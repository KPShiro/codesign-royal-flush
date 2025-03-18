import { gsap } from 'gsap';

type CounterOptions = {
    initialValue: number;
    targetValue: number;
    snap?: number;
    onUpdate?: (value: number) => void;
};

export const counter = ({ initialValue, targetValue, snap, onUpdate }: CounterOptions) => {
    const animationTarget = { value: initialValue };

    return gsap.to(animationTarget, {
        duration: 0.5,
        value: targetValue,
        roundProps: 'value',
        snap: { value: snap ?? 1 },
        ease: 'power2.out',
        onUpdate: () => onUpdate?.(animationTarget.value),
    });
};
