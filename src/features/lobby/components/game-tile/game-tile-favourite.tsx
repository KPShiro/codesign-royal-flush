import { Icon } from '@/components/icon';
import { Game } from '@/models/game';
import { cn } from '@/utils/cn';
import { HeartIcon } from 'lucide-react';
import { useFavouriteGames } from '../../hooks/use-favourite-games';

type GameTileFavouriteProps = {
    gameId: Game['id'];
} & Pick<React.ComponentProps<'div'>, 'className'>;

export const GameTileFavourite = ({ gameId, className }: GameTileFavouriteProps) => {
    const favouriteGames = useFavouriteGames();
    const isFavourite = favouriteGames.contains(gameId);

    const handleAddToFavourites = () => {
        if (!isFavourite) {
            favouriteGames.addGame(gameId);
        } else {
            favouriteGames.removeGame(gameId);
        }
    };

    return (
        <div
            onClick={handleAddToFavourites}
            className={cn(
                'flex size-10 items-center justify-center rounded-sm backdrop-blur-md',
                isFavourite ? 'bg-primary/25' : 'bg-on-surface/5',
                className
            )}
        >
            <Icon
                icon={HeartIcon}
                size="sm"
                className={cn(
                    isFavourite
                        ? 'fill-primary text-primary'
                        : 'text-on-surface/50 fill-transparent'
                )}
            />
        </div>
    );
};
