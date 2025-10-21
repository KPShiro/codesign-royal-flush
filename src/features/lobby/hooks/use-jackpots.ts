import { useQuery } from '@tanstack/react-query';
import { getJackpots } from '@features/lobby/api/jackpots';
import { Jackpot } from '@src/models/jackpot';

export const useJackpots = () => {
    return useQuery({
        queryKey: ['jackpots'],
        // TODO: Pass currently active coin type
        queryFn: () => getJackpots({ coinsType: 'GC' }),
        select: (jackpots) => {
            return jackpots.reduce(
                (acc, jackpot): Record<string, Jackpot[]> => {
                    jackpot.gamesIds.forEach((gameId) => {
                        const { gamesIds, ...curatedJackpot } = jackpot;

                        if (!acc[gameId]) {
                            acc[gameId] = [];
                        }

                        acc[gameId].push(curatedJackpot);
                    });

                    return acc;
                },
                {} as Record<string, Jackpot[]>
            );
        },
        refetchInterval: 5_000,
    });
};
