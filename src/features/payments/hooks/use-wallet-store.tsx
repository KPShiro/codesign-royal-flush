import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { WalletConfig, WalletID } from '@features/payments/models/wallet';
import { CircleDollarSignIcon } from 'lucide-react';
import { formatNumber } from '@src/utils/format-number';

export const FALLBACK_WALLET: WalletConfig = {
    id: 'COINS',
    label: 'Coins',
    icon: CircleDollarSignIcon,
    formatter: (value: number) => {
        return formatNumber(value, {
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        });
    },
    isDefault: true,
};

type WalletState = {
    availableWallets: WalletConfig[];
    activeWalletId: WalletID;
};

type WalletStateActions = {
    init: (config: WalletConfig[]) => void;
    setActiveWallet: (id: WalletID) => void;
    getActiveWallet: () => WalletConfig;
};

type UseWalletStore = WalletState & WalletStateActions;

export const useWalletStore = create<UseWalletStore>()(
    devtools((set, get) => ({
        availableWallets: [],
        activeWalletId: '',
        init: (config) => {
            const defaultWallet: WalletConfig = config.find((w) => w.isDefault) || FALLBACK_WALLET;
            const otherWallets = config.filter((wallet) => wallet.id !== defaultWallet.id);
            const allWallets = [defaultWallet, ...otherWallets];

            set({
                availableWallets: allWallets,
                activeWalletId: defaultWallet.id,
            });
        },
        setActiveWallet: (id) => {
            const { availableWallets } = get();
            const isWalletConfigured = availableWallets.some((wallet) => wallet.id === id);

            if (!isWalletConfigured) {
                console.error(`Wallet configuration not found! [${id}]`);
                return;
            }

            set({ activeWalletId: id });
        },
        getActiveWallet: () => {
            const { availableWallets, activeWalletId } = get();

            return availableWallets.find((wallet) => wallet.id === activeWalletId);
        },
    }))
);
