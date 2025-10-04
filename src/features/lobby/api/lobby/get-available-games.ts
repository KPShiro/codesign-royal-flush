import { GAMES } from '@features/lobby/database';
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

type GetAvailableGamesArgs = {
    coinsType: CoinsType;
};

export async function getAvailableGames(args: GetAvailableGamesArgs): Promise<GameEntity[]> {
    return await delayedPromise(
        () =>
            GAMES.filter((game) => {
                const isSupportinCoinsType = game.supportedCoinsTypes.includes(args.coinsType);
                const isOperational = game.status === 'LIVE' || game.status === 'TEMP_UNAVAILABLE';

                return isSupportinCoinsType && isOperational;
            }),
        1_000
    );
}
