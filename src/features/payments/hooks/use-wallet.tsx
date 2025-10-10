import { useWalletStore } from '@features/payments/hooks/use-wallet-store';
import { useQuery } from '@tanstack/react-query';
import { getWallet } from '@features/payments/api/wallet';
import { useMemo } from 'react';
import { isNotDefined } from '@utils/is-not-defined';

export const useWallet = () => {
    const activeWalletId = useWalletStore((state) => state.activeWalletId);
    const activeWalletConfig = useWalletStore((state) => state.getActiveWallet());
    const availableWallets = useWalletStore((state) => state.availableWallets);
    const setActiveWallet = useWalletStore((state) => state.setActiveWallet);

    const queryResult = useQuery({
        queryKey: ['balances'],
        queryFn: getWallet,
        refetchInterval: 5_000,
    });

    const balance = useMemo(() => {
        if (isNotDefined(queryResult.data)) {
            return 0;
        }

        const entity = queryResult.data.find((entity) => entity.id === activeWalletId);

        if (isNotDefined(entity)) {
            return 0;
        }

        return entity.balance;
    }, [queryResult.data, activeWalletId]);

    return {
        id: activeWalletId,
        balance,
        config: activeWalletConfig,
        availableWallets,
        setActiveWallet,
        isLoading: queryResult.isLoading,
    };
};
