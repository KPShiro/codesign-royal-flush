import { createFileRoute } from '@tanstack/react-router';
import { useDetectDevice } from '@hooks/use-detect-device';
import { LobbyPageMobile } from '@features/lobby/pages/lobby-page-mobile';
import { LobbyPageDesktop } from '@features/lobby/pages/lobby-page-desktop';

export const Route = createFileRoute('/')({
    component: RouteComponent,
});

function RouteComponent() {
    const { isLaptop, isDesktop } = useDetectDevice();

    if (isLaptop || isDesktop) {
        return <LobbyPageDesktop />;
    }

    return <LobbyPageMobile />;
}
