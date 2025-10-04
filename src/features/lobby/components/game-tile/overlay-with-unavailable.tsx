import { Icon } from '@src/components/icon';
import { cn } from '@src/utils/cn';
import { LockIcon } from 'lucide-react';

type OverlayWithUnavailableProps = Pick<React.ComponentProps<'div'>, 'className'>;

export const OverlayWithUnavailable = (props: OverlayWithUnavailableProps) => {
    return (
        <div
            className={cn(
                'bg-on-surface-0/15 text-on-surface-0 flex flex-col items-center justify-center gap-1 rounded-md backdrop-blur-sm',
                props.className
            )}
        >
            <Icon icon={LockIcon} size="xs" className="text-shadow-md" />
            <span className="text-2xs font-bold text-shadow-md">Unavailable</span>
        </div>
    );
};
