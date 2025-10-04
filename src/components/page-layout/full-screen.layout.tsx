import { BasePageLayoutProps } from '@src/components/page-layout';

export const FullScreenPageLayout = ({ children }: BasePageLayoutProps) => {
    return <div className="w-vw h-dvh">{children}</div>;
};
