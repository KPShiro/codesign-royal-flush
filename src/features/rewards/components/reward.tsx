import { collect } from '@/animations/collect';
import { Card } from '@/components/card';
import { Icon } from '@/components/icon';
import { getCurrencyConfig } from '@/components/wallet/wallet-provider';
import { Currency, useWallet } from '@components/wallet';
import { cn } from '@utils/cn';
import { CheckIcon, ChevronRightIcon } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

type RewardProps = Pick<React.ComponentProps<'div'>, 'className'> & {
    amount: Currency['amount'];
    type: Currency['currency'];
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
    const currencyConfig = getCurrencyConfig(type);

    const [claimCounter, setClaimCounter] = useState<number>(0);
    const [claimsLeft, setClaimsLeft] = useState<number>(limit ?? 0);
    const [isLimitReached, setIsLimitReached] = useState<boolean>(false);

    const [isAnimating, setIsAnimating] = useState<boolean>(false);

    const explosionSpawnRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!limit) {
            return;
        }

        setIsLimitReached(claimCounter >= limit);
        setClaimsLeft(limit - claimCounter);
    }, [claimCounter, limit]);

    const handleOnClaimClick = () => {
        if (isLimitReached || isAnimating) {
            return;
        }

        setClaimCounter((value) => value + 1);

        collect({
            source: explosionSpawnRef.current,
            target: `#${currencyConfig.walletElementId}`,
            particleImage,
            particleCount,
            onStart: () => {
                setIsAnimating(true);
            },
            onComplete: () => {
                wallet.addAmount(amount, type);
                setIsAnimating(false);
            },
        });
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
