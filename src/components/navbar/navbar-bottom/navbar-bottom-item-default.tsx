import { Link } from '@tanstack/react-router';
import { NavbarBottomItemProps } from './navbar-bottom-item';
import { cn } from '@utils/cn';
import { Icon } from '@components/icon';

type NavbarBottomItemDefaultProps = Omit<NavbarBottomItemProps, 'type'>;

export const NavbarBottomItemDefault = (props: NavbarBottomItemDefaultProps) => {
    return (
        <Link
            to={props.to}
            title={props.label}
            className={cn(
                'flex flex-col items-center justify-center',
                'text-current hover:bg-current/15',
                props.className
            )}
        >
            <Icon icon={props.icon} size={18} />
        </Link>
    );
};
