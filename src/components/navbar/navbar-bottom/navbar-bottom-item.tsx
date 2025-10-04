import { Icon } from '@components/icon';
import { Link } from '@tanstack/react-router';
import { cn } from '@utils/cn';

export type NavbarBottomAction = {
    to: React.ComponentProps<typeof Link>['to'];
    icon: React.ComponentProps<typeof Icon>['icon'];
    label: string;
};

export type NavbarBottomItemProps = Pick<React.ComponentProps<'a'>, 'className'> &
    NavbarBottomAction;

export const NavbarBottomItem = (props: NavbarBottomItemProps) => {
    return (
        <Link
            to={props.to}
            title={props.label}
            className={cn(
                'flex size-10 flex-col items-center justify-center rounded-lg select-none',
                'text-current hover:bg-current/5 active:bg-current/10',
                'data-[status=active]:bg-primary data-[status=active]:text-on-primary',
                props.className
            )}
        >
            <Icon icon={props.icon} size={16} />
        </Link>
    );
};
