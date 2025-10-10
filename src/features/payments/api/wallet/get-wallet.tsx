import { delayedPromise } from '@utils/delayed-promise';
import { Randomize } from '@utils/randomizer';
import { WalletID } from '@features/payments/models/wallet';

let MOCKED_WALLETS: { id: WalletID; balance: number }[] = [
    {
        id: 'COIN',
        balance: 42_692_137,
    },
    {
        id: 'GEM',
        balance: 2_137,
    },
];

export type BalanceEntity = {
    id: string;
    balance: number;
};

export async function getWallet(): Promise<BalanceEntity[]> {
    return await delayedPromise(() => {
        MOCKED_WALLETS = [...MOCKED_WALLETS].map((wallet) => ({
            id: wallet.id,
            balance: wallet.balance + Randomize.number(1_000, 5_000),
        }));

        return MOCKED_WALLETS;
    }, 1_000);
}
