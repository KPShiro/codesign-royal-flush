import DiamondGif from '/images/diamond.gif';

import { isNotDefined } from '@/utils/is-not-defined';
import { useEffect, useState } from 'react';
import { CurrencyWallet } from './currency-wallet';
import { Currency, useWallet } from './wallet-provider';

export const DiamondsWallet = () => {
    const wallet = useWallet();

    const [currency, setCurrency] = useState<Currency | null>(null);

    useEffect(() => {
        const currency = wallet.currencies.find((currency) => currency.type === 'DIAMOND');

        if (isNotDefined(currency)) {
            return;
        }

        setCurrency(currency);
    }, [wallet.currencies]);

    if (isNotDefined(currency)) {
        return null;
    }

    return (
        <CurrencyWallet
            particleImage={DiamondGif}
            amount={currency.amount}
            type={currency.type}
            milestone={50}
        />
    );
};
