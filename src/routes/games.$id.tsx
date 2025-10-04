import { createFileRoute } from '@tanstack/react-router';
import { useDetectDevice } from '@hooks/use-detect-device';
import { GameplayPageDesktop } from '@features/gameplay/pages/gameplay-page-desktop';
import { GameplayPageMobile } from '@features/gameplay/pages/gameplay-page-mobile';

export const Route = createFileRoute('/games/$id')({
    component: RouteComponent,
});

function RouteComponent() {
    const { isLaptop, isDesktop } = useDetectDevice();

    if (isLaptop || isDesktop) {
        return <GameplayPageDesktop />;
    }

    return <GameplayPageMobile />;
}
