import { RewardsDashboardPage } from '@/features/rewards/pages/rewards-dashboard';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/rewards')({
    component: RewardsDashboardPage,
});
