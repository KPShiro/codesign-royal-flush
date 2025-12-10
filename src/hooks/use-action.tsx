import { LucideProps } from 'lucide-react';
import { useCallback, useState } from 'react';

export type Action<TArgs, TResult> = {
    icon: React.ElementType<LucideProps>;
    label: string;
    isHidden: boolean;
    isDisabled: boolean;
    isProcessing: boolean;
    execute: (args: TArgs) => Promise<TResult>;
};

type UseActionProps<TArgs, TResult> = {
    icon: React.ElementType<LucideProps>;
    label: string;
    isHidden?: boolean;
    isDisabled?: boolean;
    execute: (args: TArgs) => Promise<TResult> | TResult;
};

export function useAction<TArgs = void, TResult = void>(
    props: UseActionProps<TArgs, TResult>
): Action<TArgs, TResult> {
    const [isProcessing, setIsProcessing] = useState<boolean>(false);

    const handleExecute = useCallback(
        async (args: TArgs) => {
            if (props.isDisabled || isProcessing) {
                return Promise.resolve() as Promise<TResult>;
            }

            try {
                setIsProcessing(true);

                const result = await Promise.resolve(props.execute(args));
                return result;
            } finally {
                setIsProcessing(false);
            }
        },
        [props, isProcessing]
    );

    return {
        icon: props.icon,
        label: props.label,
        isHidden: props.isHidden ?? false,
        isDisabled: props.isDisabled ?? false,
        isProcessing: isProcessing,
        execute: handleExecute,
    };
}
