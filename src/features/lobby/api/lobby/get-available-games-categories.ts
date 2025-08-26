import { GAME_DIRECTORIES } from '@/features/lobby/database';
import { GameCategory } from '@/models/game-category';
import { delayedPromise } from '@/utils/delayed-promise';

export async function getAvailableGamesCategories(): Promise<GameCategory[]> {
    return await delayedPromise(() => GAME_DIRECTORIES, 1_500);
}
