import { useGSAP } from '@gsap/react';
import { animateNumberWithScale } from '@animations/animate-number-with-scale';
import { useRef, useState } from 'react';
import { formatNumber } from '@utils/format-number';
import { cn } from '@src/utils/cn';
import { Jackpot } from '@src/models/jackpot';

type JackpotsListItemProps = Pick<React.ComponentProps<'div'>, 'className'> & {
    jackpot: Jackpot;
    onAnimationStart?: () => void;
    onAnimationComplete?: () => void;
};

export const JackpotsListItem = (props: JackpotsListItemProps) => {
    const [displayedValue, setDisaplayedValue] = useState<number>(props.jackpot.value);
    const valueRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        animateNumberWithScale({
            target: valueRef.current,
            fromValue: displayedValue,
            toValue: props.jackpot.value,
            onStart: props.onAnimationStart,
            onUpdate: setDisaplayedValue,
            onComplete: props.onAnimationComplete,
        });
    }, [props.jackpot.value]);

    return (
        <div className={cn('flex flex-col', props.className)}>
            <div className="bg-coins-gold text-on-coins-gold z-1 -mb-0.5 w-fit gap-2 rounded-t-xs rounded-bl-none px-1.5 py-0.5 pr-1.75">
                <div className="text-3xs font-black uppercase">{props.jackpot.type}</div>
            </div>
            <div className="bg-surface-0 border-coins-gold w-full rounded-xs rounded-tl-none border p-1 pt-1.25">
                <div ref={valueRef} className="text-2xs truncate font-mono font-black uppercase">
                    {formatNumber(displayedValue)}
                </div>
            </div>
        </div>
    );
};
