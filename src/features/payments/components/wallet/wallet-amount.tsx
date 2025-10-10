import { useGSAP } from '@gsap/react';
import { cn } from '@utils/cn';
import { animateNumber } from '@animations/animate-number';
import { useEffect, useState } from 'react';
import { useWallet } from '@features/payments/hooks/use-wallet';
import { WalletID } from '@features/payments/models/wallet';

type WalletAmountProps = Pick<React.ComponentProps<'span'>, 'className'> & {
    isAnimationDisabled?: boolean;
    onAnimationStart?: () => void;
    onAnimationComplete?: () => void;
};

export const WalletAmount = (props: WalletAmountProps) => {
    const [currentAmount, setCurrentAmount] = useState<number>(0);
    const [currentId, setCurrentId] = useState<WalletID>('');

    const wallet = useWallet();

    useEffect(() => {
        setCurrentId(wallet.id);
    }, [wallet.id]);

    useGSAP(() => {
        const isAmountDecreased = wallet.balance <= currentAmount;
        const isWalletIdChanged = currentId !== wallet.id;

        if (props.isAnimationDisabled || isAmountDecreased || isWalletIdChanged) {
            setCurrentAmount(wallet.balance);
            return;
        }

        animateNumber({
            fromValue: currentAmount,
            toValue: wallet.balance,
            onStart: props.onAnimationStart,
            onUpdate: setCurrentAmount,
            onComplete: props.onAnimationComplete,
        });
    }, [wallet.balance, wallet.id]);

    return (
        <span className={cn('text-xs font-bold', props.className)}>
            {wallet.config.formatter(currentAmount)}
        </span>
    );
};
