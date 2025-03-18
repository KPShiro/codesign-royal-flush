import { gsap } from 'gsap';

type FadeOutOptions = {
    target: gsap.TweenTarget;
    duration?: number;
    stagger?: number;
};

export const fadeOut = ({ target, duration, stagger }: FadeOutOptions) => {
    const timeline = gsap.timeline();

    timeline.to(target, {
        opacity: 0,
        duration,
        stagger,
    });

    return timeline;
};
