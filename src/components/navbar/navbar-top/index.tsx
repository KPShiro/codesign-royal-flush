import { OutlinedButton } from '@components/button';
import { cn } from '@utils/cn';
import { MenuIcon, TrophyIcon } from 'lucide-react';
import { Link } from '@tanstack/react-router';
import { PageContainer } from '@components/page-container';
import { Logo } from '@components/logo';
import { Wallet } from '@features/payments/components/wallet';

type NavbarTopProps = Pick<React.ComponentProps<'div'>, 'className'>;

export const NavbarTop = (props: NavbarTopProps) => {
    return (
        <div
            className={cn(
                'bg-surface-1/60 border-b brightness-90 saturate-150 backdrop-blur-lg',
                props.className
            )}
        >
            <PageContainer className="flex items-center justify-between gap-6 py-4">
                <Link to="/" className="size-10 shrink-0 grow-0 cursor-pointer">
                    <Logo className="size-full scale-150 object-contain" />
                </Link>
                <div className="flex-1">
                    <Wallet />
                </div>
                <div className="flex gap-2">
                    <Link to="/">
                        <OutlinedButton icon={TrophyIcon} />
                    </Link>
                    <Link to="/">
                        <OutlinedButton icon={MenuIcon} />
                    </Link>
                </div>
            </PageContainer>
        </div>
    );
};
