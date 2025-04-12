import { Game } from '@/models/game';
import { cn } from '@utils/cn';
import { cva, VariantProps } from 'class-variance-authority';
import { useRef } from 'react';
import { GameTileFavourite } from './game-tile-favourite';
import { GameTileImage } from './game-tile-image';

const variants = cva(
    [
        'bg-surface-container relative isolate cursor-pointer overflow-clip rounded-md shadow-md transition-all duration-300 size-full',
        'outline-2 outline-transparent outline-offset-4 hover:outline-on-surface hover:border-on-surface focus-visible:border-on-surface focus-visible:outline-on-surface max-laptop:active:outline-on-surface',
        'hover:scale-105 hover:z-1 focus-visible:scale-105 focus-visible:z-1 max-laptop:active:scale-90 ',
    ],
    {
        variants: {
            variant: {
                horizontal: 'aspect-[16/9]',
                square: 'aspect-[1/1]',
                vertical: 'aspect-[2/3]',
            },
        },
        defaultVariants: {
            variant: 'square',
        },
    }
);

type GameTileProps = Pick<React.ComponentProps<'button'>, 'className'> &
    VariantProps<typeof variants> &
    Game;

export const GameTile = ({ variant, className, ...props }: GameTileProps) => {
    const gameTileElementRef = useRef<HTMLButtonElement>(null);

    return (
        <button
            ref={gameTileElementRef}
            className={cn('group', variants({ variant, className }))}
            title={props.title}
        >
            <GameTileImage variant={variant} thumbnail={props.thumbnail} alt={props.title} />
            <GameTileFavourite gameId={props.id} className="absolute top-2 right-2 z-10" />
            <div className="text-on-surface from-surface-container absolute bottom-0 z-10 flex h-2/3 w-full items-end bg-gradient-to-t to-transparent p-6">
                <div className="flex min-w-0 flex-1 flex-col gap-1 text-left">
                    <div className="truncate text-sm font-bold">{props.title}</div>
                    <div className="truncate text-xs opacity-60">{props.provider.name}</div>
                </div>
            </div>
        </button>
    );
};
