import { Icon } from '@/components/icon';
import { cn } from '@/utils/cn';
import { LockIcon, PlayIcon } from 'lucide-react';

type GameTileInfoProps = Pick<React.ComponentProps<'div'>, 'className'> & {
    gameName: string;
    providerName: string;
    isUnavailable: boolean;
};

export const GameTileInfo = (props: GameTileInfoProps) => {
    return (
        <div
            className={cn(
                'flex w-full items-center justify-center gap-4 px-4 py-4',
                props.isUnavailable
                    ? 'bg-stripes-diagonal-danger-container'
                    : 'bg-surface/25 backdrop-blur-md',
                props.className
            )}
        >
            <div className="flex min-w-0 flex-1 flex-col gap-0.5 text-left">
                <div className="truncate text-sm font-semibold">{props.gameName}</div>
                <div className="truncate text-xs text-current/60">{props.providerName}</div>
            </div>
            {props.isUnavailable ? (
                <div
                    title="This game is temporairly unavailable"
                    className="flex size-10 animate-pulse items-center justify-center rounded-full bg-current/15"
                >
                    <Icon icon={LockIcon} size="sm" />
                </div>
            ) : (
                <div
                    role="button"
                    title="Play Now"
                    className="flex size-10 items-center justify-center rounded-full border border-current/25"
                >
                    <Icon icon={PlayIcon} size="sm" />
                </div>
            )}
        </div>
    );
};
