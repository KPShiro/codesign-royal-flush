import { RewardsDashboardPage } from '@/features/rewards/pages/rewards-dashboard';
import { DefaultLayout } from '@components/layout';
import { createBrowserRouter, Navigate } from 'react-router-dom';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Navigate to="rewards" />,
    },
    {
        path: 'rewards',
        element: (
            <DefaultLayout>
                <RewardsDashboardPage />
            </DefaultLayout>
        ),
    },
    {
        path: '*',
        element: <Navigate to="/" />,
    },
]);
