import { PageLayout } from '@components/page-layout';
import { SplashScreen } from '@components/splash-screen';
import { LobbySectionMobile } from '@features/lobby/components/lobby-section/lobby-section-mobile';
import { useLobbySections } from '@features/lobby/hooks/use-lobby-sections';
import { useAvailableGames } from '@features/lobby/hooks/use-available-games';
import { useFavouriteGames } from '@features/lobby/hooks/use-favourite-games';
import { useJackpots } from '@features/lobby/hooks/use-jackpots';
import { useWallet } from '@src/features/payments/hooks/use-wallet';

export const LobbyPageMobile = () => {
    const { data: sections, isLoading: isLoadingSections } = useLobbySections();
    const { isLoading: isLoadingGames } = useAvailableGames();
    const { isLoading: isLoadingFavGames } = useFavouriteGames();
    const { isLoading: isLoadingJackpots } = useJackpots();
    const { isLoading: isLoadingWallet } = useWallet();

    if (
        isLoadingSections ||
        isLoadingGames ||
        isLoadingFavGames ||
        isLoadingJackpots ||
        isLoadingWallet
    ) {
        return (
            <PageLayout variant="fullscreen">
                <SplashScreen className="size-full" />
            </PageLayout>
        );
    }

    return (
        <PageLayout variant="lobby">
            {sections
                ? sections.map((section) => <LobbySectionMobile key={section.id} {...section} />)
                : null}
        </PageLayout>
    );
};
