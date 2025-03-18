import { createParticleSystem } from '@utils/create-particle-system';
import { gsap } from 'gsap';
import { fadeOut } from './fade-out';

type ExplodeOptions = {
    spawner: HTMLElement | null;
    particleImage: string;
    particlePosition?: 'absolute' | 'fixed';
    particleCount?: number;
    particleSize?: number;
    scatterSize?: number;
    fade?: boolean;
};

export const explode = ({
    spawner,
    particleImage,
    particlePosition,
    particleCount = 10,
    particleSize = 48,
    scatterSize,
    fade = true,
}: ExplodeOptions) => {
    const particleSystem = createParticleSystem({
        particleCount: particleCount,
        src: particleImage,
        style: {
            position: particlePosition,
            width: `${particleSize}px`,
            height: `${particleSize}px`,
        },
    });

    const timeline = gsap.timeline({
        onStart: () => {
            document.body.appendChild(particleSystem.parent);
        },
        onComplete: () => {
            document.body.removeChild(particleSystem.parent);
        },
    });

    if (!spawner) {
        throw new Error('Spawner element is not defined!');
    }

    const spawnerRect = spawner.getBoundingClientRect();
    const spawnPoint = {
        x:
            spawnerRect.x +
            spawnerRect.width / 2 +
            (particlePosition === 'fixed' ? 0 : window.scrollX),
        y:
            spawnerRect.y +
            spawnerRect.height / 2 +
            (particlePosition === 'fixed' ? 0 : window.scrollY),
    };

    timeline.set(particleSystem.children, {
        x: spawnPoint.x,
        y: spawnPoint.y,
        opacity: 1,
    });

    const _scatterSize = scatterSize ?? (particleCount * 2 * particleSize) / 20;

    timeline.to(particleSystem.children, {
        x: `+=random(-${_scatterSize}, ${_scatterSize}, 1)`,
        y: `+=random(-${_scatterSize}, ${_scatterSize}, 1)`,
        duration: 0.5,
        ease: 'power2.out',
    });

    if (fade) {
        timeline.add(
            fadeOut({
                target: particleSystem.children,
                duration: 0.5,
                stagger: 0.01,
            }),
            '<'
        );
    }

    return timeline;
};
