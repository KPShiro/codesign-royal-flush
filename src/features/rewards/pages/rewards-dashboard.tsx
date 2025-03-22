import { PageContainer } from '@/components/page-container';
import { CurrencyType } from '@components/wallet/wallet-provider';
import { RewardsSection } from '../components/rewards-section';
import { RewardCoins } from '../components/rewards/reward-coins';
import { RewardDiamonds } from '../components/rewards/reward-diamonds';

type GetRewardsResponse = {
    amount: number;
    type: CurrencyType;
    limit?: number;
}[];

export const RewardsDashboardPage = () => {
    const rewards: GetRewardsResponse = [
        {
            amount: 10,
            type: 'COIN',
        },
        {
            amount: 200,
            type: 'COIN',
            limit: 3,
        },
        {
            amount: 1000,
            type: 'COIN',
            limit: 1,
        },
        {
            amount: 1,
            type: 'DIAMOND',
        },
        {
            amount: 10,
            type: 'DIAMOND',
            limit: 3,
        },
        {
            amount: 50,
            type: 'DIAMOND',
            limit: 1,
        },
    ];

    const coinRewards = rewards.filter((reward) => reward.type === 'COIN');
    const diamondRewards = rewards.filter((reward) => reward.type === 'DIAMOND');

    return (
        <PageContainer className="flex h-[120dvh] flex-col gap-6 py-6">
            <h1 className="text-2xl">Rewards Center</h1>
            <div className="flex flex-col gap-10">
                <RewardsSection
                    title="Coin Rewards"
                    items={coinRewards}
                    renderItem={(item) => <RewardCoins amount={item.amount} limit={item.limit} />}
                />
                <RewardsSection
                    title="Diamond Rewards"
                    items={diamondRewards}
                    renderItem={(item) => (
                        <RewardDiamonds amount={item.amount} limit={item.limit} />
                    )}
                />
            </div>
        </PageContainer>
    );
};
