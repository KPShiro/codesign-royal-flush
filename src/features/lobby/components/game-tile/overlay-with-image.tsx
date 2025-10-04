import { cn } from '@utils/cn';

type OverlayWithImageProps = Pick<React.ComponentProps<'img'>, 'src' | 'alt' | 'className'>;

export const OverlayWithImage = (props: OverlayWithImageProps) => {
    return (
        <img
            src={props.src}
            alt={props.alt}
            className={cn('pointer-events-none size-full object-cover', props.className)}
        />
    );
};
