import { useFavouriteGamesStore } from '../store/favourites';

export const useFavouriteGames = () => {
    const store = useFavouriteGamesStore();

    const addGame = (gameId: string) => {
        // TODO: Add API call to add the game to the user's favourites
        store.add(gameId);
    };

    const removeGame = (gameId: string) => {
        // TODO: Add API call to remove the game from the user's favourites
        store.remove(gameId);
    };

    const contains = (gameId: string) => {
        return store.contain(gameId);
    };

    return {
        gameIds: store.gameIds,
        addGame,
        removeGame,
        contains,
    };
};
