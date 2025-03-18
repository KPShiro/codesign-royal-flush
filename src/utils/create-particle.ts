type CreateParticleOptions = {
    src: React.ComponentProps<'img'>['src'];
    style?: Partial<
        Pick<
            CSSStyleDeclaration,
            | 'position'
            | 'pointerEvents'
            | 'zIndex'
            | 'width'
            | 'height'
            | 'left'
            | 'top'
            | 'transform'
        >
    >;
};

export const createParticle = ({ src, style }: CreateParticleOptions) => {
    if (!src) {
        throw new Error('Particle requires "src" of an image!');
    }

    const particle = document.createElement('div');

    particle.style.position = style?.position ?? 'absolute';
    particle.style.pointerEvents = style?.pointerEvents ?? 'none';
    particle.style.zIndex = style?.zIndex ?? '99999';
    particle.style.transform = style?.transform ?? 'translate(-50%, -50%)';
    particle.style.left = style?.left ?? '0';
    particle.style.top = style?.top ?? '0';

    const image = document.createElement('img');

    image.src = src;
    image.style.width = style?.width ?? '48px';
    image.style.height = style?.height ?? '48px';
    image.style.objectFit = 'contain';

    particle.appendChild(image);

    return particle;
};
