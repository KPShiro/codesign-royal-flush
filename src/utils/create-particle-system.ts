import { createParticle } from './create-particle';

type CreateParticleSystemOptions = {
    particleCount: number;
} & Parameters<typeof createParticle>[0];

export const createParticleSystem = ({
    particleCount,
    ...particleConfig
}: CreateParticleSystemOptions) => {
    const particleSystem = document.createElement('div');

    particleSystem.style.pointerEvents = 'none';
    particleSystem.style.position = 'absolute';
    particleSystem.style.zIndex = '999999';
    particleSystem.style.left = '0';
    particleSystem.style.top = '0';

    particleSystem.style.width = `${document.body.clientWidth}px`;

    const height =
        window.innerHeight > document.body.clientHeight
            ? window.innerHeight
            : document.body.clientHeight;

    particleSystem.style.height = `${height}px`;

    const particles = [...new Array(particleCount)].map(() => {
        const particle = createParticle(particleConfig);
        particleSystem.appendChild(particle);

        return particle;
    });

    return {
        children: particles,
        parent: particleSystem,
    };
};
