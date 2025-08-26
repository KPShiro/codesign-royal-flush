import { cn } from '@/utils/cn';
import LogoGif from '/images/logo.gif';

type SplashScreenProps = React.ComponentProps<'div'>;

export const SplashScreen = (props: SplashScreenProps) => {
    return (
        <div
            {...props}
            className={cn('flex h-dvh w-dvw items-center justify-center', props.className)}
        >
            <img src={LogoGif} alt="SLOTS" className="size-64" />
        </div>
    );
};
