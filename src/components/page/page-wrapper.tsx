import { cn } from '@/utils/cn';

type PageWrapperProps = React.ComponentProps<'div'>;

export const PageWrapper = ({ className, ...props }: PageWrapperProps) => {
    return <div {...props} className={cn('flex flex-col gap-6 py-6', className)} />;
};
