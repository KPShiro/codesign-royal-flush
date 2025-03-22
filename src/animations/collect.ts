import { getElementPosition } from '@/utils/get-element-position';
import { createParticleSystem } from '@utils/create-particle-system';
import { gsap } from 'gsap';

type ElementType = Element | string | null;

type CollectOptions = {
    source: ElementType;
    target: ElementType;
    particleImage: string;
    particleCount?: number;
    particleSize?: number;
    onStart?: () => void;
    onComplete?: () => void;
};

export const collect = ({
    source,
    target,
    particleImage,
    particleCount = 10,
    particleSize = 48,
    onStart,
    onComplete,
}: CollectOptions) => {
    const particleSystem = createParticleSystem({
        particleCount,
        src: particleImage,
        style: {
            width: `${particleSize}px`,
            height: `${particleSize}px`,
        },
    });

    let sourcePosition = getElementPosition(source, true);
    let targetPosition = getElementPosition(target, true);

    const updatePositions = () => {
        requestAnimationFrame(() => {
            sourcePosition = getElementPosition(source, true);
            targetPosition = getElementPosition(target, true);

            gsap.to(particleSystem.children, {
                x: () => targetPosition.x,
                y: () => targetPosition.y,
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
            targetPosition = getElementPosition(target, true);
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

    const spread = particleSize + 10 * Math.sqrt(particleCount);

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

    timeline.to(particleSystem.children, {
        x: () => targetPosition.x,
        y: () => targetPosition.y,
        duration: 0.5,
        ease: 'power2.out',
        stagger: 0.025,
    });

    timeline.to(
        particleSystem.children,
        {
            duration: 0.5,
            opacity: 0,
            stagger: 0.025,
        },
        '<'
    );

    return timeline;
};
