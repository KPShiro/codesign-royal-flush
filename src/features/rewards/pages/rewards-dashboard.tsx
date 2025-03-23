import { Layout } from '@components/layout';
import { PageTitle } from '@components/page';
import { CurrencyType } from '@components/wallet/wallet-provider';
import { RewardCoins } from '../components/reward-coins';
import { RewardDiamonds } from '../components/reward-diamonds';
import { RewardsSection } from '../components/rewards-section';

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
        <Layout variant="withNavbar">
            <div className="flex flex-col gap-10 py-10">
                <PageTitle
                    title="Rewards Center"
                    description="Your hub for tracking points, discovering special offers, and redeeming exclusive benefits designed to recognize and celebrate your loyalty."
                />
                <div className="flex flex-col gap-10">
                    <RewardsSection
                        title="Coin Rewards"
                        items={coinRewards}
                        renderItem={(item) => (
                            <RewardCoins amount={item.amount} limit={item.limit} />
                        )}
                    />
                    <RewardsSection
                        title="Diamond Rewards"
                        items={diamondRewards}
                        renderItem={(item) => (
                            <RewardDiamonds amount={item.amount} limit={item.limit} />
                        )}
                    />
                </div>
            </div>
        </Layout>
    );
};
