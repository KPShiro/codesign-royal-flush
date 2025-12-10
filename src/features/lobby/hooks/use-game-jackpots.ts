import { Game } from '@models/game';
import { useJackpots } from './use-jackpots';
import { useMemo } from 'react';
import { Jackpot } from '@models/jackpot';

export const useGameJackpots = (gameId: Game['id']) => {
    const { data: allJackpots } = useJackpots();

    const gameJackpots: Jackpot[] = useMemo(() => {
        const jackpots = allJackpots ? allJackpots[gameId] : null;

        if (!jackpots || jackpots.length === 0) {
            return [];
        }

        return [...jackpots].sort((a, b) => b.value - a.value);
    }, [allJackpots, gameId]);

    return gameJackpots;
};
