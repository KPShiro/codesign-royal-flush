import { PropsWithChildren } from 'react';
import LayoutFullscreen from './layout-fullscreen';
import LayoutWithNavbar from './layout-with-navbar';
import LayoutWithoutNavbar from './layout-without-navbar';
import LayoutLobby from './layout-lobby';

const LayoutsMap = {
    withNavbar: LayoutWithNavbar,
    withoutNavbar: LayoutWithoutNavbar,
    fullscreen: LayoutFullscreen,
    lobby: LayoutLobby,
};

type LayoutProps = PropsWithChildren<{
    variant: keyof typeof LayoutsMap;
}>;

export type BaseLayoutProps = Pick<LayoutProps, 'children'>;

export const Layout = ({ variant, children }: LayoutProps) => {
    const Layout = LayoutsMap[variant];

    return <Layout children={children} />;
};
