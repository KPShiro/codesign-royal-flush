import { Card } from '@/components/card';
import { Icon } from '@/components/icon';
import { explode } from '@animations/explode';
import { Currency, useWallet } from '@components/wallet';
import { useGSAP } from '@gsap/react';
import { cn } from '@utils/cn';
import { gsap } from 'gsap';
import { CheckIcon, ChevronRightIcon } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

type RewardProps = Pick<React.ComponentProps<'div'>, 'className'> & {
    amount: Currency['amount'];
    type: Currency['type'];
    text: string;
    image: string;
    limit?: number;
    particleImage: string;
    particleCount: number;
};

export const Reward = ({
    amount,
    type,
    text,
    image,
    limit,
    particleImage,
    particleCount,
    className,
}: RewardProps) => {
    const wallet = useWallet();

    const [claimCounter, setClaimCounter] = useState<number>(0);
    const [claimsLeft, setClaimsLeft] = useState<number>(limit ?? 0);
    const [isLimitReached, setIsLimitReached] = useState<boolean>(false);

    const [timeline, setTimeline] = useState<gsap.core.Timeline | null>(null);
    const [isAnimating, setIsAnimating] = useState<boolean>(false);

    const explosionSpawnRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!limit) {
            return;
        }

        setIsLimitReached(claimCounter >= limit);
        setClaimsLeft(limit - claimCounter);
    }, [claimCounter, limit]);

    useGSAP(() => {
        const timeline = gsap.timeline({
            paused: true,
            onStart: () => {
                setIsAnimating(true);
            },
            onComplete: () => {
                wallet.addCurrency(amount, type);
                setIsAnimating(false);
            },
        });

        timeline.add(
            explode({
                spawner: explosionSpawnRef.current,
                particleImage,
                particleCount,
            })
        );

        setTimeline(timeline);
    }, []);

    const handleOnClaimClick = () => {
        if (isLimitReached || isAnimating) {
            return;
        }

        setClaimCounter((value) => value + 1);

        if (!timeline) {
            return;
        }

        timeline.invalidate();
        timeline.restart();
    };

    return (
        <Card
            ref={explosionSpawnRef}
            className={cn(
                'select-none',
                isLimitReached || isAnimating
                    ? 'opacity-disabled pointer-events-none'
                    : 'cursor-pointer',
                className
            )}
            mode={isLimitReached ? 'static' : 'interactive'}
            onClick={handleOnClaimClick}
        >
            <div className="grid grid-cols-[auto_1fr]">
                <div className="bg-surface relative isolate flex aspect-square items-center justify-center">
                    {isLimitReached && (
                        <div className="bg-surface/25 absolute inset-0 z-10 flex items-center justify-center backdrop-blur-md">
                            <Icon icon={CheckIcon} size="md" />
                        </div>
                    )}
                    <img src={image} className={cn('size-10')} />
                </div>
                <div className="@container/text flex items-center justify-between p-6 pr-8">
                    <div className="flex flex-col gap-0.5 text-sm">
                        <div className="font-semibold">{text}</div>
                        <div className="opacity-60">
                            {limit ? `${claimsLeft} claims left` : 'Infinite claims'}
                        </div>
                    </div>
                    <div className="text-sm opacity-25">
                        <Icon icon={ChevronRightIcon} size="sm" />
                    </div>
                </div>
            </div>
        </Card>
    );
};
