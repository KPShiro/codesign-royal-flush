import { Game } from '@/models/game';
import { Maybe } from '@/models/maybe';
import { cn } from '@/utils/cn';
import { useEffect, useState } from 'react';

type GameTileImageProps = Pick<React.ComponentProps<'img'>, 'className'> & {
    alt: Game['title'];
    variant: Maybe<keyof Game['thumbnail']>;
    thumbnail: Game['thumbnail'];
};

export const GameTileImage = ({ alt, variant, thumbnail, className }: GameTileImageProps) => {
    const [image, setImage] = useState<string>(thumbnail.square);

    useEffect(() => {
        if (variant === 'horizontal') {
            setImage(thumbnail.horizontal);
            return;
        }

        if (variant === 'vertical') {
            setImage(thumbnail.vertical);
            return;
        }

        setImage(thumbnail.square);
    }, [variant]);

    return (
        <img
            src={image}
            alt={alt}
            className={cn('pointer-events-none size-full object-cover', className)}
        />
    );
};
