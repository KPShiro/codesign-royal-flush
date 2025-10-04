import { useQuery } from '@tanstack/react-query';
import { getLobbySections } from '@features/lobby/api/lobby';
import { LobbySection } from '@src/models/lobby-section';

export const useLobbySections = () => {
    return useQuery({
        queryKey: ['lobby-sections'],
        queryFn: getLobbySections,
        select: (sections) => {
            return sections
                .filter((section) => section.isVisible)
                .map((section): LobbySection => {
                    switch (section.type) {
                        case 'GAMES_DIRECTORY':
                            return {
                                id: section.id,
                                name: section.name,
                                type: section.type,
                                variant: section.variant,
                                gameIds: section.gameIds,
                            };
                        case 'QUESTS_DIRECTORY':
                            return {
                                id: section.id,
                                name: section.name,
                                type: section.type,
                                questsIds: section.questsIds,
                            };
                        default:
                            throw new Error('Unknown section type');
                    }
                });
        },
    });
};
