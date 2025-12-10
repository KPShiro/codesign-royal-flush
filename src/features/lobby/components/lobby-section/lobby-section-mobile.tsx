import { LobbySection } from '@src/models/lobby-section';
import { GamesDirectorySectionMobile } from './games-directory-section/games-directiory-section-mobile';
import { QuestsDirectorySectionMobile } from './quests-directory-section/quests-directory-section-mobile';

type LobbySectionMobileProps = LobbySection;

export const LobbySectionMobile = (props: LobbySectionMobileProps) => {
    switch (props.type) {
        case 'GAMES_DIRECTORY':
            return <GamesDirectorySectionMobile {...props} />;
        case 'QUESTS_DIRECTORY':
            return <QuestsDirectorySectionMobile {...props} />;   
        default:
            return null;
    }
};
