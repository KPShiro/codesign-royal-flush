import { LobbySection } from '@src/models/lobby-section';
import { GamesDirectorySectionMobile } from './games-directory-section/games-directiory-section-mobile';
import { ComponentType } from 'react';

const LobbySectionMap: Record<LobbySection['type'], ComponentType<any>> = {
    GAMES_DIRECTORY: GamesDirectorySectionMobile,
    // TODO: Implement QuestDirectorySectionMobile component
    QUESTS_DIRECTORY: GamesDirectorySectionMobile,
};

type LobbySectionMobileProps = LobbySection;

export const LobbySectionMobile = (props: LobbySectionMobileProps) => {
    const SectionComponent = LobbySectionMap[props.type];

    return <SectionComponent {...props} />;
};
