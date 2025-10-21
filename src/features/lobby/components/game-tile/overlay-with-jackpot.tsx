import { cn } from '@utils/cn';
import { Game } from '@models/game';
import { JackpotsList } from '@features/lobby/components/jackpots-list';

type OverlayWithJackpotProps = Pick<React.ComponentProps<'div'>, 'className'> & {
    gameId: Game['id'];
};

export const OverlayWithJackpot = (props: OverlayWithJackpotProps) => {
    return (
        <div className={cn('relative', props.className)}>
            <JackpotsList gameId={props.gameId} className="absolute right-0 bottom-0 left-0" />
        </div>
    );
};
