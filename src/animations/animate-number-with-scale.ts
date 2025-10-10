import { gsap } from 'gsap';
import { animateNumber } from './animate-number';

type AnimateNumberWithScaleOptions = {
    target: gsap.TweenTarget;
    fromValue: number;
    toValue: number;
    snap?: number;
    onStart?: () => void;
    onUpdate?: (value: number) => void;
    onComplete?: () => void;
};

export const animateNumberWithScale = (options: AnimateNumberWithScaleOptions) => {
    const timeline = gsap.timeline();

    timeline.to(options.target, {
        scale: 1.1,
        duration: 0.25,
    });

    timeline.add(
        animateNumber({
            fromValue: options.fromValue,
            toValue: options.toValue,
            duration: 1,
            snap: options.snap,
            onStart: options.onStart,
            onUpdate: options.onUpdate,
            onComplete: options.onComplete,
        }),
        '<'
    );

    timeline.to(options.target, {
        scale: 1,
        duration: 0.25,
    });

    return timeline;
};
