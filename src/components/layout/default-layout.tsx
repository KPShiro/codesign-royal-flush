import { Navbar } from '@components/navbar';
import { PropsWithChildren } from 'react';

type DefaultLayoutProps = PropsWithChildren;

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
    return (
        <>
            <Navbar className="sticky top-0 z-10" />
            {children}
        </>
    );
};

export default DefaultLayout;
