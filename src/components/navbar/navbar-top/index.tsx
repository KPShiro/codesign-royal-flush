import NavbarTopStyles from './navbar-top.module.css';

import { OutlinedButton } from '@components/button';
import { cn } from '@utils/cn';
import { MenuIcon, TrophyIcon } from 'lucide-react';
import { NavbarTopLogo } from './navbar-top-logo';
import { useNavigate } from '@tanstack/react-router';
import { PageContainer } from '@components/page-container';
import { NavbarTopWallet } from './navbar-top-wallet';

type NavbarTopProps = Pick<React.ComponentProps<'div'>, 'className'>;

export const NavbarTop = (props: NavbarTopProps) => {
    const navigate = useNavigate();

    return (
        <div className={cn('', props.className)}>
            <PageContainer
                className={cn(
                    'flex items-center gap-6 py-4',
                    NavbarTopStyles['navbar-top--fosted']
                )}
            >
                <NavbarTopLogo />
                <div className="flex flex-1 items-center gap-4">
                    <NavbarTopWallet isGlowing={true} />
                    <div className="bg-primary/15 h-2 w-0.5"></div>
                    <div className="flex gap-2">
                        <OutlinedButton icon={TrophyIcon} onClick={() => navigate({ to: '/' })} />
                        <OutlinedButton icon={MenuIcon} onClick={() => navigate({ to: '/' })} />
                    </div>
                </div>
            </PageContainer>
        </div>
    );
};
