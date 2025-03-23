import { Navbar } from '@components/navbar';
import { PageContainer } from '@components/page';
import { PropsWithChildren } from 'react';

type LayoutWithNavbarProps = PropsWithChildren;

const LayoutWithNavbar = ({ children }: LayoutWithNavbarProps) => {
    return (
        <>
            <Navbar className="sticky top-0 z-10" />
            <PageContainer>{children}</PageContainer>
        </>
    );
};

export default LayoutWithNavbar;
