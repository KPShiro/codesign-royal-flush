import CoinGif from '/images/coin.gif';

import { isNotDefined } from '@/utils/is-not-defined';
import { useEffect, useState } from 'react';
import { CurrencyWallet } from './currency-wallet';
import { Currency, useWallet } from './wallet-provider';

export const CoinsWallet = () => {
    const wallet = useWallet();

    const [currency, setCurrency] = useState<Currency | null>(null);

    useEffect(() => {
        const currency = wallet.currencies.find((currency) => currency.type === 'COIN');

        if (isNotDefined(currency)) {
            return;
        }

        setCurrency(currency);
    }, [wallet.currencies]);

    if (isNotDefined(currency)) {
        return '-';
    }

    return (
        <CurrencyWallet
            particleImage={CoinGif}
            amount={currency.amount}
            type={currency.type}
            milestone={1000}
        />
    );
};
