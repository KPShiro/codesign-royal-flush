import { useMemo } from 'react';
import { GameTile } from '../game-tile/game-tile';
import { LobbyCategoryLayoutProps } from './lobby-category-layout';

export const HorizontalCategoryLayout = ({ games, limit = 10 }: LobbyCategoryLayoutProps) => {
    const items = useMemo(() => games.slice(0, limit), [games]);

    return (
        <div className="tablet:grid-cols-3 grid grid-cols-1 gap-4">
            {items.map((game) => (
                <GameTile key={game.id} {...game} variant="horizontal" />
            ))}
        </div>
    );
};
