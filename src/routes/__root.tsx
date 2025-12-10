import { createRootRoute, Outlet } from '@tanstack/react-router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { CSSPlugin } from 'gsap/CSSPlugin';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import { TextPlugin } from 'gsap/TextPlugin';
import { useEffect } from 'react';
import { BRAND_CONFIG } from '@src/config';
import { NotFoundPage } from '@components/pages/not-found-page';
import { useWalletStore } from '@src/features/payments/hooks/use-wallet-store';

gsap.registerPlugin(useGSAP, CSSPlugin, MotionPathPlugin, TextPlugin);

const queryClient = new QueryClient();

export const Route = createRootRoute({
    component: RootComponent,
    notFoundComponent: NotFoundPage,
});

function RootComponent() {
    const initWalletStore = useWalletStore((state) => state.init);

    useEffect(() => {
        initWalletStore(BRAND_CONFIG.wallets);
    }, [initWalletStore]);

    useEffect(() => {
        document.title = BRAND_CONFIG.name;

        return () => {
            document.title = 'Loading...';
        };
    }, []);

    return (
        <QueryClientProvider client={queryClient}>
            <Outlet />
        </QueryClientProvider>
    );
};


