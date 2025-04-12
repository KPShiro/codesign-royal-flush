import { GameCategory } from '@/models/game-category';
import { create } from 'zustand';

type BrandCategoriesStore = {
    categories: GameCategory[];
    set: (categories: GameCategory[]) => void;
};

export const useBrandCategoriesStore = create<BrandCategoriesStore>((set) => ({
    categories: [],
    set: (categories) => set(() => ({ categories })),
}));
