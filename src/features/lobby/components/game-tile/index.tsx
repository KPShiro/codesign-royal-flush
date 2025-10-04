import { cn } from '@utils/cn';
import { Game } from '@models/game';
import { OverlayWithImage } from './overlay-with-image';
import { OverlayWithLabel } from './overlay-with-label';
import { OverlayWithJackpot } from './overlay-with-jackpot';
import { useJackpots } from '@features/lobby/hooks/use-jackpots';
import { useEffect, useMemo, useState } from 'react';
import { Jackpot } from '@models/jackpot';
import { OverlayWithUnavailable } from './overlay-with-unavailable';
import { OverlayWithFavourite } from './overlay-with-favourite';
import { useFavouriteGames } from '@features/lobby/hooks/use-favourite-games';

type GameTileProps = Pick<React.ComponentProps<'div'>, 'className' | 'onClick'> & Game;

export const GameTile = ({ className, onClick, ...game }: GameTileProps) => {
    const [jackpot, setJackpot] = useState<Jackpot | null>(null);

    const { data: allJackpots } = useJackpots();
    const { data: favouriteGames } = useFavouriteGames();

    const isFavourite = useMemo(() => {
        if (!favouriteGames) {
            return false;
        }

        return favouriteGames.find((favGame) => favGame.id === game.id) ? true : false;
    }, [favouriteGames, game.id]);

    useEffect(() => {
        const jackpots = allJackpots ? allJackpots[game.id] : null;
        if (jackpots && jackpots.length > 0) {
            const sortedJackpots = [...jackpots].sort((a, b) => b.value - a.value);
            setJackpot(sortedJackpots[0]);
        }
    }, [allJackpots]);

    return (
        <div className={cn('relative isolate aspect-[3/4] rounded-md', className)}>
            {isFavourite ? <OverlayWithFavourite className="absolute inset-0 z-4" /> : null}
            {game.label ? (
                <OverlayWithLabel label={game.label} className="absolute inset-0 z-3" />
            ) : null}
            {jackpot ? (
                <OverlayWithJackpot
                    jackpotValue={jackpot.value}
                    jackpotType={jackpot.type}
                    className="absolute inset-0 z-2"
                />
            ) : null}
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
