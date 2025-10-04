import { cn } from '@utils/cn';
import { Logo } from '@components/logo';

type SplashScreenProps = React.ComponentProps<'div'>;

export const SplashScreen = (props: SplashScreenProps) => {
    return (
        <div
            {...props}
            className={cn('bg-surface flex items-center justify-center', props.className)}
        >
            <Logo className="size-32" />
        </div>
    );
};
