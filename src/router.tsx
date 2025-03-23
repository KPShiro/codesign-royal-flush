import { LobbyPage } from '@features/lobby/pages/lobby';
import { RewardsDashboardPage } from '@features/rewards/pages/rewards-dashboard';
import { createBrowserRouter, Navigate } from 'react-router-dom';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <LobbyPage />,
    },
    {
        path: 'rewards',
        element: <RewardsDashboardPage />,
    },
    {
        path: '*',
        element: <Navigate to="/" />,
    },
]);
