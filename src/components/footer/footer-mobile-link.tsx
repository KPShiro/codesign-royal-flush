import { cn } from '@utils/cn';
import { Icon } from '@components/icon';
import { ExternalLinkIcon } from 'lucide-react';

type FooterMobileLinkProps = {
    href: string;
    text: string;
};

export const FooterMobileLink = (props: FooterMobileLinkProps) => {
    return (
        <a
            href={props.href}
            target="_blank"
            rel="noreferrer"
            className={cn(
                'text-on-surface flex w-full items-center justify-between rounded-md bg-current/5 p-4 backdrop-blur-lg select-none',
                'active:bg-current/10'
            )}
        >
            <span className="text-xs">{props.text}</span>
            <Icon icon={ExternalLinkIcon} size="xs" className="text-on-surface-variant" />
        </a>
    );
};
