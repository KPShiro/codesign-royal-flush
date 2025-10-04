import { Popover } from '@components/popover';
import { Icon } from '@components/icon';
import { cn } from '@utils/cn';
import { Loader2Icon, LucideProps } from 'lucide-react';
import React from 'react';

type PopoverMenuOptionProps = {
    icon?: React.ElementType<LucideProps>;
    label: string;
    isDisabled?: React.ComponentProps<'button'>['disabled'];
    isProcessing?: boolean;
    callback: React.ComponentProps<'button'>['onClick'];
};

const PopoverMenuOption = ({
    icon,
    label,
    isProcessing,
    isDisabled,
    callback,
    ...props
}: PopoverMenuOptionProps) => {
    const handleOnClick: React.MouseEventHandler<HTMLButtonElement> = (event) => {
        if (isDisabled || isProcessing) {
            return;
        }

        callback?.(event);
    };

    return (
        <button
            {...props}
            title={label}
            disabled={isDisabled}
            aria-disabled={isDisabled}
            onClick={handleOnClick}
            className={cn(
                'enabled:hover:bg-on-surface/5 enabled:active:bg-on-surface/10 disabled:opacity-disabled flex h-10 w-full cursor-pointer items-center gap-2.5 px-4 disabled:cursor-default',
                icon && 'pr-7'
            )}
        >
            {icon && !isProcessing ? (
                <Icon icon={icon} size="sm" strokeWidth={1.25} className="text-on-surface/60" />
            ) : null}
            {icon && isProcessing ? (
                <Icon
                    icon={Loader2Icon}
                    size="sm"
                    strokeWidth={1.25}
                    className="text-on-surface/60 animate-spin"
                />
            ) : null}
            <span className="truncate text-sm">{label}</span>
        </button>
    );
};

type PopoverMenuGroupProps = Pick<React.ComponentProps<'div'>, 'children'>;

const PopoverMenuGroup = ({ children, ...props }: PopoverMenuGroupProps) => {
    return (
        <div
            {...props}
            className="[&:not(:first-child)]:before:bg-border [&:not(:first-child)]:before:my-2 [&:not(:first-child)]:before:block [&:not(:first-child)]:before:h-px [&:not(:first-child)]:before:content-['']"
        >
            {children}
        </div>
    );
};

type PopoverMenuOptionsProps = Pick<React.ComponentProps<typeof Popover.Content>, 'children'>;

const PopoverMenuOptions = ({ children, ...props }: PopoverMenuOptionsProps) => {
    return (
        <Popover.Content {...props} className="max-w-64 min-w-32 py-2">
            {children}
        </Popover.Content>
    );
};

type PopoverMenuTriggerProps = Pick<
    React.ComponentProps<typeof Popover.Trigger>,
    'asChild' | 'children'
>;

const PopoverMenuTrigger = ({ children, ...props }: PopoverMenuTriggerProps) => {
    return (
        <Popover.Trigger
            {...props}
            className="data-[state=open]:bg-primary/10 data-[state=open]:text-primary"
        >
            {children}
        </Popover.Trigger>
    );
};

type PopoverMenuProps = React.ComponentProps<typeof Popover>;

const PopoverMenu = ({ ...props }: PopoverMenuProps) => {
    return <Popover {...props} />;
};

PopoverMenu.Trigger = PopoverMenuTrigger;
PopoverMenu.Options = PopoverMenuOptions;
PopoverMenu.Group = PopoverMenuGroup;
PopoverMenu.Option = PopoverMenuOption;

export default PopoverMenu;
