import { cn } from '@utils/cn';
import { Game } from '@models/game';
import { OverlayWithImage } from './overlay-with-image';
import { OverlayWithLabel } from './overlay-with-label';
import { OverlayWithJackpot } from './overlay-with-jackpot';
import { useMemo } from 'react';
import { OverlayWithUnavailable } from './overlay-with-unavailable';
import { OverlayWithFavourite } from './overlay-with-favourite';
import { useFavouriteGames } from '@features/lobby/hooks/use-favourite-games';

type GameTileProps = Pick<React.ComponentProps<'div'>, 'className'> & Game;

export const GameTile = ({ className, ...game }: GameTileProps) => {
    const { data: favouriteGames } = useFavouriteGames();

    const isFavourite = useMemo(() => {
        if (!favouriteGames) {
            return false;
        }

        return favouriteGames.find((favGame) => favGame.id === game.id) ? true : false;
    }, [favouriteGames, game.id]);

    return (
        <div className={cn('relative isolate aspect-3/4 rounded-md', className)}>
            {isFavourite ? <OverlayWithFavourite className="absolute inset-0 z-4" /> : null}
            {game.label ? (
                <OverlayWithLabel label={game.label} className="absolute inset-0 z-3" />
            ) : null}
            <OverlayWithJackpot gameId={game.id} className="absolute inset-0 z-2" />
            {game.status === 'TEMP_UNAVAILABLE' ? (
                <OverlayWithUnavailable className="absolute inset-0 z-1" />
            ) : null}
            <OverlayWithImage
                src={game.thumbnail.vertical}
                alt={game.title}
                className="absolute inset-0 z-0 rounded-md"
            />
        </div>
    );
};
