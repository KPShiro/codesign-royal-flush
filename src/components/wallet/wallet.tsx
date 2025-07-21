import { cn } from '@utils/cn';
import React from 'react';
import { CurrencyWallet } from './currency-wallet';

type WalletProps = Pick<React.ComponentProps<'div'>, 'className'>;

export const Wallet = ({ className }: WalletProps) => {
    return (
        <div className={cn('flex gap-2', className)}>
            <CurrencyWallet currency={'COIN'} />
            <CurrencyWallet currency={'DIAMOND'} />
        </div>
    );
};
