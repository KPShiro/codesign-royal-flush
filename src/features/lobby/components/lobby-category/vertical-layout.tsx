import { GameTile } from '@/features/lobby/components/game-tile/game-tile';
import { LobbyCategoryLayoutProps } from './lobby-category-layout';

export const VerticalCategoryLayout = ({ games, gamesLimit }: LobbyCategoryLayoutProps) => {
    const items = games.slice(0, gamesLimit);

    return (
        <div className="laptop:grid-cols-4 tablet:grid-cols-2 grid grid-cols-2 gap-4">
            {items.map((game) => (
                <GameTile key={game.id} {...game} variant="vertical" />
            ))}
        </div>
    );
};
