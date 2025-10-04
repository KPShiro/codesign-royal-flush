import { Icon } from '@src/components/icon';
import { cn } from '@src/utils/cn';
import { HeartIcon } from 'lucide-react';

type OverlayWithFavouriteProps = Pick<React.ComponentProps<'div'>, 'className'>;

export const OverlayWithFavourite = (props: OverlayWithFavouriteProps) => {
    return (
        <div
            className={cn(
                'border-danger relative overflow-clip rounded-md border',
                props.className
            )}
        >
            <div className="bg-danger text-on-danger absolute top-0 right-0 rounded-bl-md pt-2 pr-2 pb-2.5 pl-2.5">
                <Icon icon={HeartIcon} size="xs" className="fill-on-danger" />
            </div>
        </div>
    );
};
