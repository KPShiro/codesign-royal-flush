import { useQuery } from '@tanstack/react-query';
import { getJackpots } from '@features/lobby/api/jackpots';
import { Jackpot } from '@src/models/jackpot';

export const useJackpots = () => {
    return useQuery({
        queryKey: ['jackpots'],
        // TODO: Pass currently active coin type
        queryFn: () => getJackpots({ coinsType: 'GC' }),
        select: (jackpots) => {
            return jackpots.reduce<Record<string, Jackpot[]>>(
                (acc, jackpot): Record<string, Jackpot[]> => {
                    jackpot.gamesIds.forEach((gameId) => {
                        // eslint-disable-next-line @typescript-eslint/no-unused-vars
                        const { gamesIds, ...curatedJackpot } = jackpot;

                        // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
                        if (!acc[gameId]) {
                            acc[gameId] = [];
                        }

                        acc[gameId].push(curatedJackpot);
                    });

                    return acc;
                },
                {}
            );
        },
        refetchInterval: 5_000,
    });
};
