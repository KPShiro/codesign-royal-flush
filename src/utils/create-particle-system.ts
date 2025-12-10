import { createParticle } from './create-particle';
import { randomizeString } from './randomizer/randomize-string';

type CreateParticleSystemOptions = {
    particleCount: number;
} & Parameters<typeof createParticle>[0];

export const createParticleSystem = (
    { particleCount, ...particleConfig }: CreateParticleSystemOptions,
    debug?: boolean
) => {
    const particleSystem = document.createElement('div');

    particleSystem.id = `particle-system-${randomizeString(5)}`;

    particleSystem.style.pointerEvents = 'none';
    particleSystem.style.position = 'absolute';
    particleSystem.style.zIndex = '999999';
    particleSystem.style.overflow = 'clip';
    particleSystem.style.left = '0';
    particleSystem.style.top = '0';

    if (debug) {
        particleSystem.style.border = '1px solid yellow';
    }

    const recalculateParticleSystemSize = () => {
        const width =
            window.innerWidth < document.body.clientWidth
                ? window.innerWidth
                : document.body.clientWidth;

        particleSystem.style.width = `${width}px`;

        const height =
            window.innerHeight > document.body.clientHeight
                ? window.innerHeight
                : document.body.clientHeight;

        particleSystem.style.height = `${height}px`;
    };

    const particles = [...new Array<number>(particleCount)].map(() => {
        const particle = createParticle(particleConfig, debug);
        particleSystem.appendChild(particle);

        return particle;
    });

    return {
        parent: particleSystem,
        children: particles,
        init: () => {
            recalculateParticleSystemSize();
            document.body.appendChild(particleSystem);
            window.addEventListener('resize', recalculateParticleSystemSize);
        },
        cleanup: () => {
            window.removeEventListener('resize', recalculateParticleSystemSize);
            document.body.removeChild(particleSystem);
        },
    };
};
