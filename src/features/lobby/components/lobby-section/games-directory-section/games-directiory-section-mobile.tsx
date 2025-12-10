import { useMemo } from 'react';
import { type GamesDirectorySection } from '@models/lobby-section';
import { OutlinedButton } from '@src/components/button';
import { useAvailableGames } from '@src/features/lobby/hooks/use-available-games';
import { Link, useNavigate } from '@tanstack/react-router';
import { GameTile } from '@features/lobby/components/game-tile';

export const GamesDirectorySectionMobile = (props: GamesDirectorySection) => {
    const { data: availableGames } = useAvailableGames();
    const navigate = useNavigate();

    const games = useMemo(() => {
        if (!availableGames || availableGames.length === 0) {
            return [];
        }

        return [...availableGames].filter((game) => props.gameIds.includes(game.id));
    }, [availableGames, props.gameIds]);

    const handleOnGameClick = async (gameId: string) => {
        await navigate({ to: '/games/$id', params: { id: gameId } });
    };

    if (props.gameIds.length === 0) {
        return null;
    }

    return (
        <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between">
                <h2 className="text-on-surface-0 text-md font-semibold">{props.name}</h2>
                <Link to={'/categories/$id'} params={{ id: props.id }}>
                    <OutlinedButton text="See all" size="sm" />
                </Link>
            </div>
            <div className="bg-current/5 grid snap-x snap-mandatory scroll-px-2 auto-cols-[calc(33%-4px)] grid-flow-col gap-2 overflow-x-auto scroll-smooth rounded-xl p-2 select-none">
                {games.map((game) => (
                    <button
                        type="button"
                        key={game.id}
                        onClick={() => handleOnGameClick(game.id)}
                        className="snap-center transition-transform duration-300 enabled:active:scale-95"
                    >
                        <GameTile {...game} />
                    </button>
                ))}
            </div>
        </div>
    );
};
