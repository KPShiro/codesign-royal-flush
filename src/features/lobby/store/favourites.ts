import { Game } from '@/models/game';
import { create } from 'zustand';

type FavouriteGamesStore = {
    gameIds: Game['id'][];
    set: (ids: Game['id'][]) => void;
    add: (id: Game['id']) => void;
    remove: (id: Game['id']) => void;
    contain: (id: Game['id']) => boolean;
};

export const useFavouriteGamesStore = create<FavouriteGamesStore>((set, get) => ({
    gameIds: [],
    set: (ids) => set(() => ({ gameIds: ids })),
    add: (id) => set((state) => ({ gameIds: [...state.gameIds, id] })),
    remove: (id) => set((state) => ({ gameIds: state.gameIds.filter((item) => item !== id) })),
    contain: (id) => get().gameIds.find((gameId) => gameId === id) !== undefined,
}));
