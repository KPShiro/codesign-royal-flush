import { PageContainer } from '@/components/page';
import { OutlinedButton } from '@components/button';
import { Wallet } from '@components/wallet';
import { cn } from '@utils/cn';
import { TrophyIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { NavbarLogo } from './navbar-logo';
import './navbar.css';

type NavbarProps = Pick<React.ComponentProps<'div'>, 'className'>;

export const Navbar = ({ className }: NavbarProps) => {
    const navigate = useNavigate();

    return (
        <div className={cn('navbar-frost', className)}>
            <PageContainer
                className={cn('flex items-center justify-between gap-6 py-4', className)}
            >
                <NavbarLogo />
                <div className="flex items-center gap-4">
                    <Wallet />
                    <div className="bg-primary/15 h-2 w-0.5"></div>
                    <div className="flex gap-2">
                        <OutlinedButton icon={TrophyIcon} onClick={() => navigate('/rewards')} />
                    </div>
                </div>
            </PageContainer>
        </div>
    );
};
