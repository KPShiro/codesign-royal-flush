import { Game } from '@/models/game';
import { cva, VariantProps } from 'class-variance-authority';
import { GameTileImage } from './game-tile-image';
import { GameTileInfo } from './game-tile-info';
import { cn } from '@/utils/cn';

const variants = cva(
    [
        'bg-surface isolate border border-border/60 relative cursor-pointer overflow-clip rounded-md shadow-md transition-transform duration-250 size-full select-none outline-2 outline-transparent outline-offset-4',
        'hover:scale-105 hover:z-1 hover:outline-on-surface',
        'focus-visible:scale-105 focus-visible:z-1 focus-visible:outline-on-surface',
        'laptop:active:scale-100 active:scale-95 active:z-1',
    ],
    {
        variants: {
            variant: {
                horizontal: 'aspect-[16/9]',
                square: 'aspect-[1/1]',
                vertical: 'aspect-[3/4]',
            },
        },
        defaultVariants: {
            variant: 'square',
        },
    }
);

type GameTileProps = Pick<React.ComponentProps<'button'>, 'className' | 'onClick'> &
    VariantProps<typeof variants> &
    Game;

export const GameTile = ({ variant, className, onClick, ...game }: GameTileProps) => {
    const isUnavailable = game.status === 'DOWN' || game.status === 'TEMP_UNAVAILABLE';

    const handleOnClick: React.MouseEventHandler<HTMLButtonElement> = (event) => {
        if (isUnavailable) {
            alert('This game is currently unavailable.');
            return;
        }

        onClick?.(event);
    };

    return (
        <button type="button" className={variants({ variant, className })} onClick={handleOnClick}>
            <GameTileImage
                variant={variant}
                thumbnail={game.thumbnail}
                alt={game.title}
                className={cn(isUnavailable ? 'opacity-15' : '')}
            />
            <GameTileInfo
                gameName={game.title}
                providerName={game.provider.name}
                isUnavailable={isUnavailable}
                className="absolute bottom-0 left-0 z-20"
            />
        </button>
    );
};
