import { cn } from '@src/utils/cn';

type OverlayWithLabelProps = Pick<React.ComponentProps<'div'>, 'className'> & {
    label: string;
};

export const OverlayWithLabel = (props: OverlayWithLabelProps) => {
    return (
        <div className={cn('border-primary rounded-md border', props.className)}>
            <div className="bg-primary text-on-primary w-fit max-w-[8ch] truncate rounded-br-md pr-3 pb-1.5 pl-2.5">
                <span className="text-2xs font-bold">{props.label}</span>
            </div>
        </div>
    );
};
