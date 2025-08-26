import { GameCategory } from '@/models/game-category';
import { useMemo } from 'react';
import { LobbyCategoryLayout } from './lobby-category-layout';
import { useAvailableGames } from '@/features/lobby/hooks/use-available-games';
import { OutlinedButton } from '@/components/button';

export type LobbyCategoryProps = Omit<GameCategory, 'order'>;

export const LobbyCategory = (props: LobbyCategoryProps) => {
    const { data: availableGames } = useAvailableGames();

    const games = useMemo(() => {
        if (!availableGames || availableGames.length === 0) {
            return [];
        }

        return [...availableGames].filter((game) => props.gameIds.includes(game.id));
    }, [availableGames]);

    const hasMoreGames = games.length > props.limit;

    const handleNavigateToCategory = () => {
        throw new Error('Not implemented');
    };

    if (games.length === 0) {
        return null;
    }

    return (
        <div className="flex flex-col gap-6">
            <div className="tablet:flex-row flex flex-col justify-between gap-4">
                <div className="flex flex-col gap-1">
                    <h2 className="text-on-surface text-lg font-semibold">{props.name}</h2>
                    <p className="text-on-surface-variant max-w-prose text-sm">
                        {props.description}
                    </p>
                </div>
                {hasMoreGames ? (
                    <OutlinedButton text="See all games" onClick={handleNavigateToCategory} />
                ) : null}
            </div>
            <LobbyCategoryLayout layout={props.layout} games={games} gamesLimit={props.limit} />
        </div>
    );
};
