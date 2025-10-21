import { BasePageLayoutProps } from '@src/components/page-layout';
import { NavbarTop } from '@components/navbar/navbar-top';
import { NavbarBottom } from '@components/navbar/navbar-bottom';
import { PageContainer } from '@components/page-container';
import { FooterMobile } from '@components/footer/footer-mobile';

export const LobbyLayout = ({ children }: BasePageLayoutProps) => {
    return (
        <div className="flex flex-col">
            <NavbarTop className="sticky top-0 z-20" />
            <PageContainer className="min-h-vh flex flex-col gap-6">{children}</PageContainer>
            <FooterMobile />
            <NavbarBottom className="sticky bottom-4 z-10" />
        </div>
    );
};
