import { cn } from '@utils/cn';
import { ComponentProps } from 'react';

type BadgeProps = Pick<ComponentProps<'div'>, 'className'> & {
    text: string;
};

export const Badge = ({ text, className }: BadgeProps) => {
    return (
        <div
            title={text}
            className={cn(
                'inline-flex h-6 max-w-40 items-center truncate rounded-full border border-transparent px-2.5 text-xs font-medium uppercase select-none',
                className
            )}
        >
            {text}
        </div>
    );
};
