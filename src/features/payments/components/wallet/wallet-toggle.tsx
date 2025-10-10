import { cn } from '@utils/cn';
import { Icon } from '@src/components/icon';
import { useWallet } from '@features/payments/hooks/use-wallet';
import { WalletID } from '@features/payments/models/wallet';

type WalletToggleProps = Pick<React.ComponentProps<'div'>, 'className'> & {
    onClick?: (walletId: WalletID) => void;
    isDisabled?: boolean;
};

export const WalletToggle = (props: WalletToggleProps) => {
    const wallet = useWallet();

    const handleOnClick = (walletId: WalletID) => {
        if (props.isDisabled) {
            return;
        }

        wallet.setActiveWallet(walletId);
        props.onClick?.(walletId);
    };

    return (
        <div className={cn('bg-border flex h-full rounded-full p-0.5', props.className)}>
            {wallet.availableWallets.map((w) => (
                <button
                    key={w.id}
                    type="button"
                    onClick={() => handleOnClick(w.id)}
                    disabled={props.isDisabled}
                    className={cn(
                        'flex aspect-square h-full items-center justify-center',
                        'cursor-pointer rounded-full',
                        'disabled:opacity-disabled disabled:cursor-not-allowed',
                        wallet.id === w.id ? 'bg-coins-gold text-on-coins-gold' : 'text-current/25'
                    )}
                >
                    <Icon icon={w.icon} size="sm" />
                </button>
            ))}
        </div>
    );
};
