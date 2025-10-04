import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { PageLayout } from '@src/components/page-layout';

export const NotFoundPage = () => {
    return (
        <PageLayout variant="fullscreen">
            <div className="flex size-full flex-col items-center justify-center gap-4 text-center">
                <div className="size-32">
                    <DotLottieReact src="/animations/crown.lottie" loop autoplay />
                </div>
                <div className="laptop:max-w-sm flex w-full max-w-xs flex-col gap-2">
                    <h1 className="text-on-surface-0 text-xl">Nothing's here...</h1>
                    <p className="text-on-surface-0-variant text-sm">
                        Looks like you've managed to find a very well hidden page on our platform.
                        Congratulations!
                    </p>
                </div>
            </div>
        </PageLayout>
    );
};
