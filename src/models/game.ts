export type Game = {
    id: string;
    title: string;
    status: 'LIVE' | 'TEMP_UNAVAILABLE' | 'DOWN';
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
