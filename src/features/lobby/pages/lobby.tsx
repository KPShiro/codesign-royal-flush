import { isDefined } from '@/utils/is-defined';
import { Layout } from '@components/layout';
import { PageWrapper } from '@components/page';
import { useEffect } from 'react';
import { LobbyCategory } from '../components/lobby-category/lobby-category';
import { GAME_DIRECTORIES, GAMES } from '../database';
import { useBrandCategoriesStore } from '../store/brand-categories';
import { useBrandGamesStore } from '../store/brand-games';
import { useFavouriteGamesStore } from '../store/favourites';

export const LobbyPage = () => {
    const gamesStore = useBrandGamesStore();
    const categoriesStore = useBrandCategoriesStore();
    const favouriteGamesStore = useFavouriteGamesStore();

    useEffect(() => {
        // Simulate backend call for available games
        const gamesTimeout = setTimeout(() => {
            gamesStore.set(GAMES);
        }, 1000);

        // Simulate backend call for available categories
        const categoriesTimeout = setTimeout(() => {
            categoriesStore.set(GAME_DIRECTORIES);

            const favouriteGamesDir = GAME_DIRECTORIES.find((dir) => dir.type === 'favourties');

            if (isDefined(favouriteGamesDir)) {
                favouriteGamesStore.set(favouriteGamesDir.gameIds);
            }
        }, 1000);

        return () => {
            clearTimeout(gamesTimeout);
            clearTimeout(categoriesTimeout);
        };
    }, []);

    return (
        <Layout variant="withNavbar">
            <PageWrapper>
                {categoriesStore.categories.map((category) => (
                    <LobbyCategory key={category.id} {...category} />
                ))}
            </PageWrapper>
        </Layout>
    );
};
