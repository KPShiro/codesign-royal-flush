import { createRootRoute, Outlet } from '@tanstack/react-router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WalletContextProvider } from '@components/wallet';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { CSSPlugin } from 'gsap/CSSPlugin';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import { TextPlugin } from 'gsap/TextPlugin';

gsap.registerPlugin(useGSAP, CSSPlugin, MotionPathPlugin, TextPlugin);

const queryClient = new QueryClient();

export const Route = createRootRoute({
    component: () => (
        <QueryClientProvider client={queryClient}>
            <WalletContextProvider>
                <Outlet />
            </WalletContextProvider>
        </QueryClientProvider>
    ),
});
