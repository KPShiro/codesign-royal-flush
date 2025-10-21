import { FAVOURITE_GAMES, GAMES } from '@features/lobby/database';
import { delayedPromise } from '@utils/delayed-promise';

type CoinsType = 'GC' | 'SC';

export type GameEntity = {
    id: string;
    title: string;
    label?: string;
    status: 'LIVE' | 'TEMP_UNAVAILABLE' | 'DOWN';
    supportedCoinsTypes: CoinsType[];
    provider: {
        id: string;
        name: string;
    };
    thumbnail: {
        square: string;
        vertical: string;
        horizontal: string;
    };
};

type GetFavouriteGamesArgs = {
    coinsType: CoinsType;
};

export async function getFavouriteGames(args: GetFavouriteGamesArgs): Promise<GameEntity[]> {
    return await delayedPromise(() => {
        return GAMES.filter((game) => FAVOURITE_GAMES.includes(game.id)).filter((game) => {
            const isSupportinCoinsType = game.supportedCoinsTypes.includes(args.coinsType);
            const isOperational = game.status === 'LIVE' || game.status === 'TEMP_UNAVAILABLE';

            return isSupportinCoinsType && isOperational;
        });
    }, 1_000);
}
