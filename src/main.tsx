import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from './router';

import '@brand-theme';

const rootElement = document.getElementById('root');

if (!rootElement) {
    throw new Error('root element is missing!');
}

createRoot(rootElement).render(
    <StrictMode>
        <RouterProvider />
    </StrictMode>
);
