import { counter } from '@animations/counter';
import { explode } from '@animations/explode';
import { rain } from '@animations/rain';
import { CurrencyText } from '@components/wallet/currency-text';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { useRef, useState } from 'react';
import { Currency } from './wallet-provider';

type CurrencyWalletProps = {
    amount: Currency['amount'];
    type: Currency['type'];
    particleImage: string;
    milestone?: number;
};

export const CurrencyWallet = ({ amount, type, particleImage, milestone }: CurrencyWalletProps) => {
    const containerElementRef = useRef<HTMLDivElement>(null);

    const [currentAmount, setCurrentAmount] = useState<number>(amount);
    const [isMilestoneReached, setIsMilestoneReached] = useState<boolean>(false);

    useGSAP(() => {
        if (currentAmount === amount) {
            return;
        }

        const timeline = gsap.timeline({ paused: true });

        timeline.add(
            explode({
                spawner: containerElementRef.current,
                particlePosition: 'fixed',
                particleCount: 5,
                particleImage,
            })
        );

        timeline.add(
            counter({
                initialValue: currentAmount,
                targetValue: amount,
                onUpdate: (value) => setCurrentAmount(value),
            })
        );

        timeline.invalidate();
        timeline.restart();
    }, [amount]);

    useGSAP(() => {
        if (!milestone || amount < milestone || isMilestoneReached) {
            return;
        }

        const timeline = gsap.timeline({
            onStart: () => setIsMilestoneReached(true),
            paused: true,
        });

        timeline.add(
            rain({
                particleSize: 48,
                particleImage,
            })
        );

        timeline.invalidate();
        timeline.restart();
    }, [amount]);

    return (
        <CurrencyText
            ref={containerElementRef}
            amount={currentAmount}
            type={type}
            className="text-sm font-semibold"
        />
    );
};
