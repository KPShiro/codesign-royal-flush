import React from 'react';
import { RewardsGrid } from './rewards-grid';

type RewardsSectionProps<T = any> = React.ComponentProps<typeof RewardsGrid<T>> & {
    title?: string;
};

export const RewardsSection = <T,>({ title, items, renderItem }: RewardsSectionProps<T>) => {
    return (
        <div className="flex flex-col gap-4">
            {title && <h2 className="text-sm opacity-60">{title}</h2>}
            <RewardsGrid items={items} renderItem={renderItem} />
        </div>
    );
};
