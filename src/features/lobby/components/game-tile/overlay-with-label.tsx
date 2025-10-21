import { cn } from '@src/utils/cn';

type OverlayWithLabelProps = Pick<React.ComponentProps<'div'>, 'className'> & {
    label: string;
};

export const OverlayWithLabel = (props: OverlayWithLabelProps) => {
    return (
        <div className={cn('border-primary relative rounded-md border', props.className)}>
            <div
                className={cn(
                    'absolute top-0 left-0 w-fit max-w-[8ch] truncate pr-3 pb-1.5 pl-2.5',
                    'bg-primary text-on-primary rounded-br-md'
                )}
            >
                <span className="text-2xs font-bold">{props.label}</span>
            </div>
        </div>
    );
};
