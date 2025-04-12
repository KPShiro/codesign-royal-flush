import { OutlinedButton } from '@/components/button';
import { Game } from '@/models/game';
import { GameCategory } from '@/models/game-category';
import { SquareArrowOutUpRightIcon } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFavouriteGames } from '../../hooks/use-favourite-games';
import { useBrandGamesStore } from '../../store/brand-games';
import { LobbyCategoryLayout } from './lobby-category-layout';

export type LobbyCategoryProps = Omit<GameCategory, 'order'>;

export const LobbyCategory = (props: LobbyCategoryProps) => {
    const [games, setGames] = useState<Game[]>([]);
    const [showSubpageLink, setShowSubpageLink] = useState<boolean>(false);

    const navigate = useNavigate();

    const gamesStore = useBrandGamesStore();
    const favourtieGamesStore = useFavouriteGames();

    useEffect(() => {
        if (props.type === 'favourties') {
            const favouriteGames = gamesStore.getAllById(favourtieGamesStore.gameIds);
            setGames(favouriteGames);
            return;
        }

        const categoryGames = gamesStore.getAllById(props.gameIds);
        setGames(categoryGames);
    }, [gamesStore.games, favourtieGamesStore.gameIds]);

    useEffect(() => {
        setShowSubpageLink(props.enableSubpage && props.limit < games.length);
    }, [games]);

    const handleOnOpenSubpageClick = () => {
        navigate(`/categories/${props.id}`);
    };

    if (games.length === 0) {
        return null;
    }

    return (
        <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between gap-4">
                <h2 className="text-on-surface text-xl">{props.name}</h2>
                {showSubpageLink && (
                    <OutlinedButton
                        size="sm"
                        icon={SquareArrowOutUpRightIcon}
                        text="See All"
                        onClick={handleOnOpenSubpageClick}
                    />
                )}
            </div>
            <LobbyCategoryLayout layout={props.layout} games={games} limit={props.limit} />
        </div>
    );
};
