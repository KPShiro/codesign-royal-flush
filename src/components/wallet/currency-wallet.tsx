import { counter } from '@animations/counter';
import { explode } from '@animations/explode';
import { CurrencyText } from '@components/wallet/currency-text';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { useMemo, useRef, useState } from 'react';
import { CurrencyType, getCurrencyConfig, useWallet } from './wallet-provider';

type CurrencyWalletProps = {
    currency: CurrencyType;
};

export const CurrencyWallet = ({ currency }: CurrencyWalletProps) => {
    const containerElementRef = useRef<HTMLDivElement>(null);

    const wallet = useWallet();
    const currencyConfig = getCurrencyConfig(currency);

    const [currentAmount, setCurrentAmount] = useState<number>(0);
    const amount = useMemo(() => wallet.getAmount(currency), [currency, wallet.getAmount]);

    useGSAP(() => {
        if (currentAmount === amount) {
            return;
        }

        const timeline = gsap.timeline({ paused: true });

        timeline.add(
            explode({
                source: containerElementRef.current,
                particleImage: currencyConfig.imageSrc,
                particleCount: 5,
            })
        );

        timeline.add(
            counter({
                initialValue: currentAmount,
                targetValue: amount,
                onUpdate: (value) => setCurrentAmount(value),
            }),
            '<'
        );

        timeline.invalidate();
        timeline.restart();
    }, [amount]);

    return (
        <CurrencyText
            id={currencyConfig.walletElementId}
            ref={containerElementRef}
            value={currentAmount}
            label={currencyConfig.code}
            className="text-sm font-semibold"
        />
    );
};
