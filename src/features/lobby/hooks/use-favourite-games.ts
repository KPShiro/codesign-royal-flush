import { useQuery } from '@tanstack/react-query';
import { getFavouriteGames } from '@features/lobby/api/games';
import { Game } from '@src/models/game';

export const useFavouriteGames = () => {
    return useQuery({
        queryKey: ['favourite-games'],
        queryFn: () => getFavouriteGames({ coinsType: 'GC' }),
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
