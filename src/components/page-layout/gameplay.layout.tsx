import { BasePageLayoutProps } from '@src/components/page-layout';
import { NavbarTop } from '@components/navbar/navbar-top';

export const GameplayLayout = ({ children }: BasePageLayoutProps) => {
    return (
        <div className="grid h-dvh grid-cols-1 grid-rows-[auto_1fr]">
            <NavbarTop />
            {children}
        </div>
    );
};
