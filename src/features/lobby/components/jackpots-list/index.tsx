import { cn } from '@utils/cn';
import { Game } from '@models/game';
import { useGameJackpots } from '@features/lobby/hooks/use-game-jackpots';
import { JackpotsListItem } from './jackpots-list-item';
import { isNotDefined } from '@utils/is-not-defined';

type JackpotsListProps = Pick<React.ComponentProps<'div'>, 'className'> & {
    gameId: Game['id'];
};

export const JackpotsList = (props: JackpotsListProps) => {
    const jackpots = useGameJackpots(props.gameId);

    const sortedJackpots = [...jackpots].sort((a, b) => (a.value <= b.value ? 1 : -1));
    const highestJackpot = sortedJackpots[0];

    if (isNotDefined(jackpots) || jackpots.length === 0) {
        return null;
    }

    return (
        <div className={cn('flex gap-1 overflow-hidden p-2', props.className)}>
            <JackpotsListItem jackpot={highestJackpot} className="w-full shrink-0" />
        </div>
    );
};
