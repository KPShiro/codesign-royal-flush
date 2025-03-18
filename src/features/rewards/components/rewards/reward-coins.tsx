import CoinGif from '/images/coin.gif';
import RewardGif from '/images/logo.gif';

import { useMemo } from 'react';
import { Reward } from './reward';

type RewardCoinsProps = Pick<React.ComponentProps<typeof Reward>, 'amount' | 'limit' | 'className'>;

export const RewardCoins = (props: RewardCoinsProps) => {
    const particleCount = useMemo(() => {
        if (props.amount >= 1000) {
            return 40;
        }

        if (props.amount >= 500) {
            return 20;
        }

        return 10;
    }, [props.amount]);

    return (
        <Reward
            type={'COIN'}
            image={RewardGif}
            text={`${props.amount} Coins`}
            particleImage={CoinGif}
            particleCount={particleCount}
            {...props}
        />
    );
};
