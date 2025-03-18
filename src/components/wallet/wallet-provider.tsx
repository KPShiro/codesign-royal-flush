import {
    createContext,
    PropsWithChildren,
    useCallback,
    useContext,
    useMemo,
    useState,
} from 'react';

type CurrencyType = 'COIN' | 'DIAMOND';

export type Currency = {
    type: CurrencyType;
    amount: number;
};

export type WalletContext = {
    currencies: Currency[];
    addCurrency: (amount: number, type: CurrencyType) => void;
};

export const WalletContext = createContext<WalletContext | null>(null);

export const WalletContextProvider = ({ children }: PropsWithChildren) => {
    const [currencies, setCurrencies] = useState<Currency[]>([
        {
            type: 'COIN',
            amount: 0,
        },
        {
            type: 'DIAMOND',
            amount: 0,
        },
    ]);

    const addCurrency = useCallback(
        (amount: number, type: CurrencyType) => {
            setCurrencies((currencies) =>
                currencies.map((currency) => {
                    if (currency.type !== type) {
                        return currency;
                    }

                    return {
                        ...currency,
                        amount: currency.amount + amount,
                    };
                })
            );
        },
        [currencies]
    );

    const value = useMemo(() => ({ currencies, addCurrency }), [currencies, addCurrency]);

    return <WalletContext.Provider value={value}>{children}</WalletContext.Provider>;
};

export const useWallet = () => {
    const context = useContext(WalletContext);

    if (!context) {
        throw new Error('useWallet can be used only within WalletContext');
    }

    return context;
};
