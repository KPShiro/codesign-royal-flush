import { Link } from '@tanstack/react-router';
import { NavbarBottomItemProps } from './navbar-bottom-item';
import { cn } from '@utils/cn';
import { Icon } from '@components/icon';

type NavbarBottomItemSpecialProps = Omit<NavbarBottomItemProps, 'type'>;

export const NavbarBottomItemSpecial = (props: NavbarBottomItemSpecialProps) => {
    return (
        <Link
            to={props.to}
            title={props.label}
            className={cn(
                'flex overflow-clip p-(--default-border-width)',
                'from-primary-300 to-primary-400 bg-gradient-to-b',
                props.className
            )}
        >
            <div
                className={cn(
                    'flex flex-1 items-center justify-center rounded-md',
                    'from-primary-500 to-primary-800 text-primary-50 bg-gradient-to-b'
                )}
            >
                <Icon icon={props.icon} size={18} />
            </div>
        </Link>
    );
};
