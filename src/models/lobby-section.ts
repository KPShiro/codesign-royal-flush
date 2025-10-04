export type LobbySectionType = 'GAMES_DIRECTORY' | 'QUESTS_DIRECTORY';

type LobbySectionBase = {
    id: string;
    name: string;
};

export type GamesDirectorySection = LobbySectionBase & {
    type: 'GAMES_DIRECTORY';
    variant: 'DEFAULT' | 'PROMOTED';
    gameIds: string[];
};

export type QuestsDirectorySection = LobbySectionBase & {
    type: 'QUESTS_DIRECTORY';
    questsIds: string[];
};

export type LobbySection = GamesDirectorySection | QuestsDirectorySection;
