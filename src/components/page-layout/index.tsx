import { PropsWithChildren } from 'react';
import { FullScreenPageLayout } from './full-screen.layout';
import { LobbyLayout } from './lobby.layout';
import { GameplayLayout } from './gameplay.layout';
import { CategoryLayout } from './category.layout';

const PageLayoutMap = {
    fullscreen: FullScreenPageLayout,
    lobby: LobbyLayout,
    gameplay: GameplayLayout,
    category: CategoryLayout,
};

type PageLayoutProps = PropsWithChildren<{
    variant: keyof typeof PageLayoutMap;
}>;

export type BasePageLayoutProps = Pick<PageLayoutProps, 'children'>;

export const PageLayout = ({ variant, children }: PageLayoutProps) => {
    const Layout = PageLayoutMap[variant] || PageLayoutMap['fullscreen'];

    return <Layout children={children} />;
};
