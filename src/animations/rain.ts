import { createParticleSystem } from '@utils/create-particle-system';
import { gsap } from 'gsap';

type RainOptions = {
    particleImage: string;
    particleSize: number;
};

export const rain = ({ particleImage, particleSize }: RainOptions) => {
    const particleSystem = createParticleSystem({
        particleCount: 150,
        src: particleImage,
        style: {
            position: 'fixed',
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

    timeline.set(particleSystem.children, {
        x: `+=random(-${window.innerWidth}, ${window.innerWidth}, 1)`,
        y: -particleSize * 2,
        opacity: 1,
    });

    timeline.to(particleSystem.children, {
        y: window.innerHeight + particleSize * 2,
        ease: 'expo.in',
        stagger: 0.01,
        duration: 2,
    });

    return timeline;
};
