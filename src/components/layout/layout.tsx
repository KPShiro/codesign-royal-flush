import { PropsWithChildren } from 'react';
import LayoutFullscreen from './layout-fullscreen';
import LayoutWithNavbar from './layout-with-navbar';
import LayoutWithoutNavbar from './layout-without-navbar';

const LayoutsMap = {
    withNavbar: LayoutWithNavbar,
    withoutNavbar: LayoutWithoutNavbar,
    fullscreen: LayoutFullscreen,
};

type LayoutProps = PropsWithChildren<{
    variant: keyof typeof LayoutsMap;
}>;

export const Layout = ({ variant, ...props }: LayoutProps) => {
    const Layout = LayoutsMap[variant];

    return <Layout {...props} />;
};
