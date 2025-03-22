import { cn } from '@utils/cn';
import { formatNumber } from '@utils/format-number';

type CurrencyTextProps = React.ComponentProps<'div'> & {
    value: number;
    label: string;
};

export const CurrencyText = ({ value, label, className, ...props }: CurrencyTextProps) => {
    return (
        <div {...props} className={cn('flex min-w-0 gap-1 select-none', className)}>
            <span>{formatNumber(value)}</span>
            <span>{label}</span>
        </div>
    );
};
