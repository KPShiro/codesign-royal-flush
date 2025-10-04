import { cva, VariantProps } from 'class-variance-authority';
import { ComponentProps } from 'react';
import { Badge } from './badge';

const variants = cva('bg-current/25', {
    variants: {
        color: {
            neutral: 'text-on-surface',
            primary: 'text-primary',
            success: 'text-success',
            warning: 'text-warning',
            danger: 'text-danger',
        },
    },
    defaultVariants: {
        color: 'neutral',
    },
});

type TonalBadgeProps = ComponentProps<typeof Badge> & VariantProps<typeof variants>;

export const TonalBadge = ({ text, color, className }: TonalBadgeProps) => {
    return <Badge text={text} className={variants({ color, className })} />;
};
