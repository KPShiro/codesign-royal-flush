import { cn } from '@utils/cn';

type PageContainerProps = React.ComponentProps<'div'>;

export const PageContainer = (props: PageContainerProps) => {
    return (
        <div {...props} className={cn('max-w-page mx-auto w-full p-6', props.className)}>
            {props.children}
        </div>
    );
};
