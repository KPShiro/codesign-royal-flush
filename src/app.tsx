import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { CSSPlugin } from 'gsap/CSSPlugin';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import { TextPlugin } from 'gsap/TextPlugin';

gsap.registerPlugin(useGSAP, CSSPlugin, MotionPathPlugin, TextPlugin);

import { WalletContextProvider } from '@components/wallet';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useMemo } from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';

const queryClient = new QueryClient();

const App = () => {
    const appRouter = useMemo(() => router, []);

    return (
        <QueryClientProvider client={queryClient}>
            <WalletContextProvider>
                <RouterProvider router={appRouter} />
            </WalletContextProvider>
        </QueryClientProvider>
    );
};

export default App;
