import { cn } from '@utils/cn';
import { LucideProps } from 'lucide-react';
import { useMemo } from 'react';

export const IconSizes = ['xs', 'sm', 'md'] as const;
export type IconSize = (typeof IconSizes)[number];

type IconProps = LucideProps & {
    icon: React.ElementType<LucideProps>;
    size?: IconSize | number;
};

export const Icon = ({ icon, size = 'md', className, ...props }: IconProps) => {
    const IconComponent = icon;

    const iconSize = useMemo(() => {
        if (typeof size === 'number') {
            return size;
        }

        switch (size) {
            case 'sm':
                return 16;
            case 'xs':
                return 12;
            case 'md':
            default:
                return 24;
        }
    }, [size]);

    const iconStrokeWidth = useMemo(() => {
        switch (size) {
            case 'sm':
                return 1.4;
            case 'xs':
                return 1.2;
            case 'md':
            default:
                return 1.6;
        }
    }, [size]);

    return (
        <IconComponent
            {...props}
            size={iconSize}
            strokeWidth={props.strokeWidth ?? iconStrokeWidth}
            absoluteStrokeWidth={props.absoluteStrokeWidth ?? true}
            className={cn('flex-shrink-0 flex-grow-0', className)}
        />
    );
};
