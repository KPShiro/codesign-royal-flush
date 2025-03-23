import { PropsWithChildren } from 'react';

type LayoutFullscreenProps = PropsWithChildren;

const LayoutFullscreen = ({ ...props }: LayoutFullscreenProps) => {
    return <div {...props} className="h-dvh w-dvw overflow-x-clip overflow-y-auto" />;
};

export default LayoutFullscreen;
