import React, { ReactElement } from 'react';

type RewardsGridProps<T> = {
    items: T[];
    renderItem: (item: T) => ReactElement;
};

export const RewardsGrid = <T,>({ items, renderItem }: RewardsGridProps<T>) => {
    return (
        <div className="laptop:grid-cols-3 tablet:grid-cols-2 grid grid-cols-1 gap-4">
            {items.map((item, index) => (
                <React.Fragment key={index}>{renderItem(item)}</React.Fragment>
            ))}
        </div>
    );
};
