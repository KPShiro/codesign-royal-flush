import { HomeIcon, SearchIcon, ShoppingCartIcon, SparklesIcon, TrophyIcon } from 'lucide-react';
import { cn } from '@utils/cn';
import { NavbarBottomAction, NavbarBottomItem } from './navbar-bottom-item';

type NavbarBottomProps = Pick<React.ComponentProps<'div'>, 'className'>;

export const NavbarBottom = (props: NavbarBottomProps) => {
    const actions: NavbarBottomAction[] = [
        {
            icon: HomeIcon,
            label: 'Home',
            to: '/',
        },
        {
            icon: SearchIcon,
            label: 'Search',
            to: '/search',
        },
        {
            icon: ShoppingCartIcon,
            label: 'Store',
            to: '/store',
        },
        {
            icon: SparklesIcon,
            label: 'Redeem',
            to: '/redeem',
        },
        {
            icon: TrophyIcon,
            label: 'Quests',
            to: '/quests',
        },
    ];

    return (
        <div className={cn('py-4', props.className)}>
            <div
                className={cn(
                    'text-on-surface-1 bg-surface-1/60 mx-auto flex w-fit items-center justify-center gap-2 rounded-full border p-2 brightness-90 saturate-150 backdrop-blur-lg'
                )}
            >
                {actions.map((action, index) => (
                    <NavbarBottomItem key={index} {...action} />
                ))}
            </div>
        </div>
    );
};
