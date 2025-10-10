import { cn } from '@utils/cn';
import { WalletToggle } from './wallet-toggle';
import { WalletAmount } from './wallet-amount';
import { useState } from 'react';

type WalletProps = Pick<React.ComponentProps<'div'>, 'className'>;

export const Wallet = (props: WalletProps) => {
    const [isAnimationPlaying, setIsAnimationPlaying] = useState<boolean>(false);

    return (
        <div
            className={cn(
                'flex h-10 w-full items-center',
                'bg-surface-0 rounded-full border',
                isAnimationPlaying && 'glow glow-color-coins-gold',
                props.className
            )}
        >
            <WalletToggle isDisabled={isAnimationPlaying} />
            <div className="flex size-full items-center justify-center px-4">
                <WalletAmount
                    onAnimationStart={() => setIsAnimationPlaying(true)}
                    onAnimationComplete={() => setIsAnimationPlaying(false)}
                />
            </div>
        </div>
    );
};
