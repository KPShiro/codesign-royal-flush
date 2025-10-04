export type JackpotType = 'MINOR' | 'MAJOR' | 'GRAND';

export type Jackpot = {
    id: string;
    type: JackpotType;
    value: number;
};
