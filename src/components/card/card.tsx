import { cn } from '@utils/cn';
import { ComponentProps } from 'react';

type CardProps = ComponentProps<'div'> & {
    mode?: 'static' | 'interactive';
};

export const Card = ({ children, className, mode = 'static', ...props }: CardProps) => {
    return (
        <div
            {...props}
            className={cn(
                'bg-surface-container ring-border/25 overflow-clip rounded-md border ring-4',
                mode === 'interactive' &&
                    'transition-all duration-300 hover:shadow-md hover:ring-8',
                className
            )}
        >
            {children}
        </div>
    );
};
