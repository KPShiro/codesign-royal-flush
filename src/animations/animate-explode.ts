import { getElementPosition } from '@utils/get-element-position';
import { createParticleSystem } from '@utils/create-particle-system';
import { gsap } from 'gsap';
import { animateFadeOut } from './animate-fade-out';

type ExplodeOptions = {
    source: HTMLElement | null;
    particleImage: string;
    particleCount?: number;
    particleSize?: number;
    particleSpread?: number;
    onStart?: () => void;
    onComplete?: () => void;
};

export const animateExplode = ({
    source,
    particleImage,
    particleCount = 10,
    particleSize = 48,
    particleSpread = undefined,
    onStart,
    onComplete,
}: ExplodeOptions) => {
    const particleSystem = createParticleSystem({
        particleCount: particleCount,
        src: particleImage,
        style: {
            width: `${particleSize}px`,
            height: `${particleSize}px`,
        },
    });

    let sourcePosition = getElementPosition(source, true);

    const updatePositions = () => {
        requestAnimationFrame(() => {
            sourcePosition = getElementPosition(source, true);

            gsap.to(particleSystem.children, {
                x: () => sourcePosition.x,
                y: () => sourcePosition.y,
                duration: 0.5,
                ease: 'power2.out',
                stagger: 0.025,
            });
        });
    };

    const timeline = gsap.timeline({
        onStart: () => {
            window.addEventListener('resize', updatePositions);
            window.addEventListener('scroll', updatePositions);
            particleSystem.init();

            sourcePosition = getElementPosition(source, true);

            onStart?.();
        },
        onComplete: () => {
            window.removeEventListener('resize', updatePositions);
            window.removeEventListener('scroll', updatePositions);
            particleSystem.cleanup();
            onComplete?.();
        },
    });

    timeline.set(particleSystem.children, {
        x: () => sourcePosition.x,
        y: () => sourcePosition.y,
        xPercent: -50,
        yPercent: -50,
        opacity: 1,
    });

    const spread = particleSpread ?? particleSize + 10 * Math.sqrt(particleCount);

    const positions = Array.from({ length: particleCount }).map(() => ({
        x: Math.random() * spread * 2 - spread,
        y: Math.random() * spread * 2 - spread,
    }));

    timeline.to(particleSystem.children, {
        x: (i) => `+=${positions[i].x}`,
        y: (i) => `+=${positions[i].y}`,
        duration: 0.5,
        ease: 'power2.out',
    });

    timeline.add(
        animateFadeOut({
            target: particleSystem.children,
            duration: 0.5,
            stagger: 0.01,
        }),
        '<'
    );

    return timeline;
};
