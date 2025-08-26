import { Layout } from '@components/layout';
import { useAvailableGamesCategories } from '../hooks/use-available-games-categories';
import { LobbyCategory } from '@/features/lobby/components/lobby-category/lobby-category';
import { useAvailableGames } from '@/features/lobby/hooks/use-available-games';
import { SplashScreen } from '@/components/splash-screen';

export const LobbyPage = () => {
    const { data: categories, isLoading: isLoadingCategories } = useAvailableGamesCategories();
    const { isLoading: isLoadingGames } = useAvailableGames();

    if (isLoadingCategories || isLoadingGames) {
        return <SplashScreen />;
    }

    return (
        <Layout variant="lobby">
            {categories?.map((category) => (
                <LobbyCategory key={category.id} {...category} />
            ))}
        </Layout>
    );
};
