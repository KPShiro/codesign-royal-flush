import { useGSAP } from '@gsap/react';
import { formatNumber } from '@src/utils/format-number';
import { cn } from '@utils/cn';
import { useRef, useState } from 'react';
import { animateNumberWithScale } from '@src/animations/animate-number-with-scale';

type OverlayWithJackpotProps = Pick<React.ComponentProps<'div'>, 'className'> & {
    jackpotValue: number;
    jackpotType: 'GRAND' | 'MAJOR' | 'MINOR';
};

export const OverlayWithJackpot = (props: OverlayWithJackpotProps) => {
    const [displayedValue, setDisaplayedValue] = useState<number>(props.jackpotValue);
    const valueRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        animateNumberWithScale({
            target: valueRef.current,
            fromValue: displayedValue,
            toValue: props.jackpotValue,
            onUpdate: setDisaplayedValue,
        });
    }, [props.jackpotValue]);

    return (
        <div className={cn('relative', props.className)}>
            <div className="absolute right-2 bottom-2 left-2 flex flex-col">
                <div className="bg-coins-gold text-on-coins-gold z-1 -mb-0.5 w-fit rounded-t-xs px-2 py-0.5">
                    <div className="text-3xs font-bold">{props.jackpotType}</div>
                </div>
                <div className="bg-surface-0 border-coins-gold rounded-xs rounded-tl-none border p-1">
                    <div ref={valueRef} className="text-2xs truncate font-mono font-bold uppercase">
                        {formatNumber(displayedValue)}
                    </div>
                </div>
            </div>
        </div>
    );
};
