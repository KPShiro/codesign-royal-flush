import { JACKPOTS } from '@features/lobby/database';
import { delayedPromise } from '@utils/delayed-promise';
import { Randomize } from '@src/utils/randomizer';

type CoinsType = 'GC' | 'SC';

export type JackpotEntity = {
    id: string;
    type: 'MINOR' | 'MAJOR' | 'GRAND';
    coinType: CoinsType;
    gamesIds: string[];
    value: number;
};

type GetJackpotsArgs = {
    coinsType: CoinsType;
};

export async function getJackpots(args: GetJackpotsArgs): Promise<JackpotEntity[]> {
    return await delayedPromise(
        () =>
            JACKPOTS.filter((jackpot) => jackpot.coinType === args.coinsType).map((jackpot) => {
                return {
                    ...jackpot,
                    value: jackpot.value + Randomize.number(10_000, 50_000),
                };
            }),
        1_000
    );
}
