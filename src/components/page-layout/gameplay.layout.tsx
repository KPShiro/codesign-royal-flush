import { BasePageLayoutProps } from '@src/components/page-layout';
import { NavbarTop } from '@components/navbar/navbar-top';
import { cn } from '@src/utils/cn';
import { useLayoutEffect, useRef } from 'react';

export const GameplayLayout = ({ children }: BasePageLayoutProps) => {
    const originalOverflow = useRef(document.body.style.overflow);

    useLayoutEffect(() => {
        originalOverflow.current = document.body.style.overflow;
        document.body.style.overflow = 'clip';

        return () => {
            document.body.style.overflow = originalOverflow.current;
        };
    }, []);

    return (
        <div className={cn('grid h-dvh grid-cols-1 grid-rows-[auto_1fr]')}>
            <NavbarTop />
            {children}
        </div>
    );
};
