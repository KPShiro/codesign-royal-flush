import { Game } from '@/models/game';
import { HorizontalCategoryLayout } from './horizontal-layout';
import { SquareCategoryLayout } from './square-layout';
import { VerticalCategoryLayout } from './vertical-layout';

export const CategoryLayoutMap = {
    square: SquareCategoryLayout,
    vertical: VerticalCategoryLayout,
    horizontal: HorizontalCategoryLayout,
};

export type BaseLobbyCategoryLayoutProps = {
    layout: keyof typeof CategoryLayoutMap;
    games: Game[];
    limit?: number;
};

export type LobbyCategoryLayoutProps = {
    games: Game[];
    limit?: number;
};

export const LobbyCategoryLayout = ({ layout, games, limit }: BaseLobbyCategoryLayoutProps) => {
    const LayoutComponent = CategoryLayoutMap[layout] || SquareCategoryLayout;

    return <LayoutComponent games={games} limit={limit} />;
};
