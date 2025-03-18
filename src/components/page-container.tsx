import { cn } from '@utils/cn';

type PageContainerProps = Pick<React.ComponentProps<'div'>, 'className' | 'children'>;

export const PageContainer = ({ children, className }: PageContainerProps) => {
    return <div className={cn('mx-auto w-full max-w-320 px-10', className)}>{children}</div>;
};
