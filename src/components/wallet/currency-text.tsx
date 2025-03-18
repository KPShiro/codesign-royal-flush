import { Currency } from '@components/wallet';
import { cn } from '@utils/cn';
import { formatNumber } from '@utils/format-number';
import { useMemo } from 'react';

type CurrencyTextProps = Pick<React.ComponentProps<'div'>, 'ref' | 'className'> & {
    amount: Currency['amount'];
    type: Currency['type'];
    mode?: 'shortcuts' | 'full';
};

export const CurrencyText = ({
    amount,
    type,
    mode = 'shortcuts',
    ref,
    className,
}: CurrencyTextProps) => {
    const typeShortcut = useMemo(() => {
        if (mode === 'full') {
            return type;
        }

        switch (type) {
            case 'DIAMOND':
                return 'DC';
            case 'COIN':
            default:
                return 'GC';
        }
    }, [type, mode]);

    return (
        <div ref={ref} className={cn('flex min-w-0 gap-1 select-none', className)}>
            <div>{formatNumber(amount)}</div>
            <div className="truncate">{typeShortcut}</div>
        </div>
    );
};
