import { Game } from '@models/game';
import { useJackpots } from './use-jackpots';
import { useEffect, useState } from 'react';
import { Jackpot } from '@models/jackpot';

export const useGameJackpots = (gameId: Game['id']) => {
    const [gameJackpots, setGameJackpots] = useState<Jackpot[]>([]);

    const { data: allJackpots } = useJackpots();

    useEffect(() => {
        const jackpots = allJackpots ? allJackpots[gameId] : null;

        if (jackpots && jackpots.length > 0) {
            const sortedJackpots = [...jackpots].sort((a, b) => b.value - a.value);
            setGameJackpots(sortedJackpots);
        }
    }, [allJackpots]);

    return gameJackpots;
};
