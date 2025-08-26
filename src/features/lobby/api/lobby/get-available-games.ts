import { GAMES } from '@/features/lobby/database';
import { Game } from '@/models/game';
import { delayedPromise } from '@/utils/delayed-promise';

export async function getAvailableGames(): Promise<Game[]> {
    return await delayedPromise(() => GAMES, 1_000);
}
