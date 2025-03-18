import { OutlinedButton } from '@components/button';
import { PageContainer } from '@components/page-container';
import { Wallet } from '@components/wallet';
import { cn } from '@utils/cn';
import { BellIcon, MenuIcon, MessageSquareIcon } from 'lucide-react';
import { NavbarLogo } from './navbar-logo';

type NavbarProps = Pick<React.ComponentProps<'div'>, 'className'>;

export const Navbar = ({ className }: NavbarProps) => {
    return (
        <div className={cn('bg-surface-container border-b', className)}>
            <PageContainer
                className={cn('flex items-center justify-between gap-6 py-4', className)}
            >
                <NavbarLogo />
                <div className="flex items-center gap-4">
                    <Wallet />
                    <div className="bg-primary/15 h-4 w-0.5"></div>
                    <div className="desktop:flex hidden gap-2">
                        <OutlinedButton icon={BellIcon} disabled />
                        <OutlinedButton icon={MessageSquareIcon} disabled />
                    </div>
                    <div className="desktop:block bg-primary/15 hidden h-4 w-0.5"></div>
                    <OutlinedButton icon={MenuIcon} />
                </div>
            </PageContainer>
        </div>
    );
};
