import RewardGif from '/images/7.gif';
import DiamondGif from '/images/diamond.gif';

import { useMemo } from 'react';
import { Reward } from './reward';

type RewardDiamondsProps = Pick<
    React.ComponentProps<typeof Reward>,
    'amount' | 'limit' | 'className'
>;

export const RewardDiamonds = (props: RewardDiamondsProps) => {
    const particleCount = useMemo(() => {
        if (props.amount >= 100) {
            return 40;
        }

        if (props.amount >= 50) {
            return 20;
        }

        return 10;
    }, [props.amount]);

    return (
        <Reward
            type={'DIAMOND'}
            image={RewardGif}
            text={`${props.amount} Diamonds`}
            particleImage={DiamondGif}
            particleCount={particleCount}
            {...props}
        />
    );
};
