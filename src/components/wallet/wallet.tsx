import { cn } from '@utils/cn';
import React from 'react';
import { CurrencyWallet } from './currency-wallet';

type WalletProps = Pick<React.ComponentProps<'div'>, 'className'>;

export const Wallet = ({ className }: WalletProps) => {
    return (
        <div className={cn('flex h-10 items-center gap-3 rounded-md border px-4', className)}>
            <CurrencyWallet currency={'COIN'} />
            <div className="bg-border size-1 rounded-full"></div>
            <CurrencyWallet currency={'DIAMOND'} />
        </div>
    );
};
