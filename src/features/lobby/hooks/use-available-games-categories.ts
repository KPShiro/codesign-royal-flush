import { useQuery } from '@tanstack/react-query';
import { getAvailableGamesCategories } from '@/features/lobby/api/lobby';

export const useAvailableGamesCategories = () => {
    return useQuery({
        queryKey: ['available-games-categories'],
        queryFn: getAvailableGamesCategories,
    });
};
