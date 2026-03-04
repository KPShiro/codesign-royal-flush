import { NotFoundPage } from '@components/pages/not-found-page';
import { useGSAP } from '@gsap/react';
import { BRAND_CONFIG } from '@src/config';
import { useWalletStore } from '@src/features/payments/hooks/use-wallet-store';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createRootRoute, Outlet } from '@tanstack/react-router';
import { gsap } from 'gsap';
import { CSSPlugin } from 'gsap/CSSPlugin';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import { TextPlugin } from 'gsap/TextPlugin';

gsap.registerPlugin(useGSAP, CSSPlugin, MotionPathPlugin, TextPlugin);

const queryClient = new QueryClient();

export const Route = createRootRoute({
    component: RootComponent,
    notFoundComponent: NotFoundPage,
});

function RootComponent() {
    const initWalletStore = useWalletStore((state) => state.init);
    initWalletStore(BRAND_CONFIG.wallets);

    return (
        <QueryClientProvider client={queryClient}>
            <Outlet />
        </QueryClientProvider>
    );
}
