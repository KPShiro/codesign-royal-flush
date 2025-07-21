import { LobbyPage } from '@/features/lobby/pages/lobby';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/lobby')({
    component: LobbyPage,
});

