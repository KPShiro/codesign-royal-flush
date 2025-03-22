import { isNotDefined } from '@/utils/is-not-defined';
import CoinGif from '/images/coin.gif';
import DiamondGif from '/images/diamond.gif';

import {
    createContext,
    PropsWithChildren,
    useCallback,
    useContext,
    useMemo,
    useState,
} from 'react';

export type CurrencyType = 'COIN' | 'DIAMOND';

interface CurrencyConfig {
    code: string;
    type: CurrencyType;
    imageSrc: string;
    walletElementId: string;
    isPremium: boolean;
}

const CurrencyConfig = new Map<CurrencyType, CurrencyConfig>([
    [
        'COIN',
        {
            code: 'GC',
            type: 'COIN',
            imageSrc: CoinGif,
            walletElementId: 'coin-wallet',
            isPremium: false,
        },
    ],
    [
        'DIAMOND',
        {
            code: 'DC',
            type: 'DIAMOND',
            imageSrc: DiamondGif,
            walletElementId: 'diamond-wallet',
            isPremium: true,
        },
    ],
]);

export const getCurrencyConfig = (type: CurrencyType) => {
    const config = CurrencyConfig.get(type);

    if (!config) {
        throw new Error(`Currency not supported! [${type}]`);
    }

    return config;
};

type Wallet = {
    currency: CurrencyType;
    amount: number;
};

type WalletContext = {
    addAmount: (amount: number, type: CurrencyType) => void;
    getAmount: (type: CurrencyType) => number;
};

const WalletContext = createContext<WalletContext | null>(null);

export const useWallet = () => {
    const context = useContext(WalletContext);

    if (!context) {
        throw new Error('useWallet can be used only within WalletContext');
    }

    return context;
};

export const WalletContextProvider = ({ children }: PropsWithChildren) => {
    const [wallets, setWallets] = useState<Wallet[]>([
        {
            currency: 'COIN',
            amount: 0,
        },
        {
            currency: 'DIAMOND',
            amount: 0,
        },
    ]);

    const addAmount = useCallback(
        (amount: number, type: CurrencyType) => {
            setWallets((wallets) =>
                wallets.map((wallet) => {
                    if (wallet.currency !== type) {
                        return wallet;
                    }

                    return {
                        ...wallet,
                        amount: wallet.amount + amount,
                    };
                })
            );
        },
        [wallets]
    );

    const getAmount = useCallback(
        (type: CurrencyType) => {
            const wallet = wallets.find((wallet) => wallet.currency === type);

            if (isNotDefined(wallet)) {
                throw new Error(`Wallet not found! [${type}]`);
            }

            return wallet.amount;
        },
        [wallets]
    );

    const value = useMemo(() => ({ addAmount, getAmount }), [addAmount, getAmount]);

    return <WalletContext.Provider value={value}>{children}</WalletContext.Provider>;
};
