import { useQuery } from '@tanstack/react-query';
import { getAvailableGames } from '@/features/lobby/api/lobby';

export const useAvailableGames = () => {
    return useQuery({
        queryKey: ['available-games'],
        queryFn: getAvailableGames,
    });
};
