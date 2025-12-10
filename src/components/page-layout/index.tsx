import { PropsWithChildren } from 'react';
import { FullScreenPageLayout } from './full-screen.layout';
import { LobbyLayout } from './lobby.layout';
import { GameplayLayout } from './gameplay.layout';
import { CategoryLayout } from './category.layout';

type PageLayoutVariant = 'category' | 'fullscreen' | 'gameplay' | 'lobby';

type PageLayoutProps = PropsWithChildren<{
    variant: PageLayoutVariant;
}>;

export type BasePageLayoutProps = Pick<PageLayoutProps, 'children'>;

export const PageLayout = ({ variant, children }: PageLayoutProps) => {
    switch (variant) {
        case 'category':
            return <CategoryLayout>{children}</CategoryLayout>;
        case 'fullscreen':
            return <FullScreenPageLayout>{children}</FullScreenPageLayout>;
        case 'gameplay':
            return <GameplayLayout>{children}</GameplayLayout>;
        case 'lobby':
            return <LobbyLayout>{children}</LobbyLayout>;
        default:
            return null;
    }
};
