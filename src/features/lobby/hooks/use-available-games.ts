import { useQuery } from '@tanstack/react-query';
import { getAvailableGames } from '@features/lobby/api/lobby';
import { Game } from '@src/models/game';

export const useAvailableGames = () => {
    return useQuery({
        queryKey: ['available-games'],
        queryFn: () => getAvailableGames({ coinsType: 'GC' }),
        select: (games): Game[] => {
            return games.map(
                (game) =>
                    ({
                        id: game.id,
                        title: game.title,
                        label: game.label,
                        status: game.status,
                        provider: {
                            id: game.provider.id,
                            name: game.provider.name,
                        },
                        thumbnail: {
                            square: game.thumbnail.square,
                            vertical: game.thumbnail.vertical,
                            horizontal: game.thumbnail.horizontal,
                        },
                    }) satisfies Game
            );
        },
    });
};
