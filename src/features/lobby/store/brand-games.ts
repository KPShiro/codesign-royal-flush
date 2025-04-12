import { Game } from '@/models/game';
import { create } from 'zustand';

type BrandGamesStore = {
    games: Game[];
    set: (games: Game[]) => void;
    getOneById: (id: Game['id']) => Game | undefined;
    getAllById: (ids: Game['id'][]) => Game[];
};

export const useBrandGamesStore = create<BrandGamesStore>((set, get) => ({
    games: [],
    set: (games) => set(() => ({ games })),
    getOneById: (id: Game['id']) => get().games.find((game) => game.id === id),
    getAllById: (ids: Game['id'][]) => get().games.filter((game) => ids.includes(game.id)),
}));
