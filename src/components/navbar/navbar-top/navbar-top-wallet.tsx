import { Icon } from '@components/icon';
import { cn } from '@utils/cn';
import { formatNumber } from '@utils/format-number';
import { CoinsIcon, PlusIcon } from 'lucide-react';

type NavbarTopWalletProps = Pick<React.ComponentProps<'div'>, 'className'> & {
    isGlowing?: boolean;
};

export const NavbarTopWallet = (props: NavbarTopWalletProps) => {
    return (
        <div
            className={cn(
                'flex h-10 w-full items-center rounded-full border',
                'bg-surface-0/5',
                props.isGlowing && 'glow glow-color-coins-gold',
                props.className
            )}
        >
            <div className="flex aspect-square h-full items-center justify-center p-1">
                <div className="flex aspect-square h-full items-center justify-center">
                    <Icon icon={CoinsIcon} size="sm" className="stroke-coins-gold" />
                </div>
            </div>
            <span className="flex-1 text-xs font-bold">{formatNumber(1_000_000)}</span>
            <div className="flex aspect-square h-full items-center justify-center gap-1 p-1">
                <div className="bg-primary text-on-primary flex aspect-square h-full items-center justify-center rounded-full">
                    <Icon icon={PlusIcon} size="sm" strokeWidth={2} />
                </div>
            </div>
        </div>
    );
};
