import { CategoryLayoutMap } from '@/features/lobby/components/lobby-category/lobby-category-layout';
import { Game } from './game';

export type GameCategoryType = 'default' | 'favourties';

export type GameCategory = {
    id: string;
    name: string;
    description: string;
    type: GameCategoryType;
    limit: number;
    layout: keyof typeof CategoryLayoutMap;
    gameIds: Game['id'][];
    enableSubpage: boolean;
};
