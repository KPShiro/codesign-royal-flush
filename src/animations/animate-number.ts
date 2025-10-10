import { gsap } from 'gsap';

type AnimateNumberOptions = {
    fromValue: number;
    toValue: number;
    snap?: number;
    onStart?: () => void;
    onUpdate?: (value: number) => void;
    onComplete?: () => void;
} & Pick<gsap.TweenVars, 'duration' | 'ease'>;

export const animateNumber = (options: AnimateNumberOptions) => {
    const animationTarget = { value: options.fromValue };

    return gsap.to(animationTarget, {
        value: options.toValue,
        roundProps: 'value',
        snap: { value: options.snap ?? 1 },
        ease: options.ease ?? 'power2.out',
        duration: options.duration ?? 1,
        onStart: options.onStart,
        onUpdate: () => options.onUpdate?.(animationTarget.value),
        onComplete: options.onComplete,
    });
};
