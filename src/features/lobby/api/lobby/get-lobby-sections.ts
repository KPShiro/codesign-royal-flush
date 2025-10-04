import { LOBBY_SECTIONS } from '@features/lobby/database';
import { delayedPromise } from '@utils/delayed-promise';

type LobbySectionEntityBase = {
    id: string;
    type: 'GAMES_DIRECTORY' | 'QUESTS_DIRECTORY';
    name: string;
    isVisible: boolean;
};

type GamesDirectorySectionEntity = LobbySectionEntityBase & {
    type: 'GAMES_DIRECTORY';
    variant: 'DEFAULT' | 'PROMOTED';
    gameIds: string[];
};

type QuestsDirectorySectionEntity = LobbySectionEntityBase & {
    type: 'QUESTS_DIRECTORY';
    questsIds: string[];
};

export type LobbySectionEntity = GamesDirectorySectionEntity | QuestsDirectorySectionEntity;

export async function getLobbySections(): Promise<LobbySectionEntity[]> {
    return await delayedPromise(() => LOBBY_SECTIONS, 1_500);
}
