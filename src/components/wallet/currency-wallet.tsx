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
    const walletAmount = useMemo(() => wallet.getAmount(currency), [currency, wallet.getAmount]);
    const currencyConfig = getCurrencyConfig(currency);

    const [amount, setAmount] = useState<number>(walletAmount);

    useGSAP(() => {
        if (amount === walletAmount) {
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
                initialValue: amount,
                targetValue: walletAmount,
                onUpdate: (value) => setAmount(value),
            }),
            '<'
        );

        timeline.invalidate();
        timeline.restart();
    }, [walletAmount]);

    return (
        <CurrencyText
            id={currencyConfig.walletElementId}
            ref={containerElementRef}
            value={amount}
            label={currencyConfig.code}
            className="text-sm font-semibold"
        />
    );
};
