import { Game } from '@/models/game';
import { HorizontalCategoryLayout } from './horizontal-layout';
import { SquareCategoryLayout } from './square-layout';
import { VerticalCategoryLayout } from './vertical-layout';

export const CategoryLayoutMap = {
    square: {
        component: SquareCategoryLayout,
        gamesLimit: 8,
    },
    vertical: {
        component: VerticalCategoryLayout,
        gamesLimit: 4,
    },
    horizontal: {
        component: HorizontalCategoryLayout,
        gamesLimit: 3,
    },
};

export type BaseLobbyCategoryLayoutProps = {
    layout: keyof typeof CategoryLayoutMap;
    games: Game[];
    gamesLimit: number;
};

export type LobbyCategoryLayoutProps = Pick<BaseLobbyCategoryLayoutProps, 'games' | 'gamesLimit'>;

export const LobbyCategoryLayout = ({
    layout,
    games,
    gamesLimit,
}: BaseLobbyCategoryLayoutProps) => {
    const LayoutComponent = CategoryLayoutMap[layout].component || SquareCategoryLayout;
    const gamesLimitValue = gamesLimit || CategoryLayoutMap[layout].gamesLimit;

    return <LayoutComponent games={games} gamesLimit={gamesLimitValue} />;
};
