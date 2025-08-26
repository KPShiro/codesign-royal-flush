import { BaseLayoutProps } from './layout';

const LayoutFullscreen = ({ children }: BaseLayoutProps) => {
    return <div className="h-dvh w-dvw overflow-x-clip overflow-y-auto">{children}</div>;
};

export default LayoutFullscreen;
