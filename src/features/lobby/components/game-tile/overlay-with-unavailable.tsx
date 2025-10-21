import { Icon } from '@src/components/icon';
import { cn } from '@src/utils/cn';
import { BanIcon } from 'lucide-react';

type OverlayWithUnavailableProps = Pick<React.ComponentProps<'div'>, 'className'>;

export const OverlayWithUnavailable = (props: OverlayWithUnavailableProps) => {
    return (
        <div
            className={cn(
                'relative isolate flex flex-col items-center justify-center gap-2',
                'rounded-md',
                props.className
            )}
        >
            <div
                className={cn(
                    'absolute inset-0 z-0',
                    'stripes stripes-primary/25 stripes-animate-up'
                )}
            ></div>
            <Icon icon={BanIcon} size="md" className="animate-pulse opacity-25" />
        </div>
    );
};
