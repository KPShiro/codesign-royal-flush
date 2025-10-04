export type GameStatus = 'LIVE' | 'TEMP_UNAVAILABLE' | 'DOWN';

export type Game = {
    id: string;
    title: string;
    label?: string;
    status: GameStatus;
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
