import { createFileRoute } from '@tanstack/react-router';
import { useDetectDevice } from '@hooks/use-detect-device';
import { CategoryPageMobile } from '@features/category/pages/category-page-mobile';
import { CategoryPageDesktop } from '@features/category/pages/category-page-desktop';

export const Route = createFileRoute('/categories/$id')({
    component: RouteComponent,
});

function RouteComponent() {
    const { isLaptop, isDesktop } = useDetectDevice();

    if (isLaptop || isDesktop) {
        return <CategoryPageDesktop />;
    }

    return <CategoryPageMobile />;
}

