import { PageContainer } from '@components/page-container';
import { BRAND_CONFIG } from '@src/config';
import { FooterDesktopLink } from './footer-desktop-link';
import { FooterSeparator } from './footer-separator';

export const FooterDesktop = () => {
    const currentYear = new Date().getFullYear();

    return (
        <PageContainer className="flex flex-col gap-6">
            <FooterSeparator />
            <div className="flex items-center justify-between gap-6">
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-1">
                        <div className="text-sm font-semibold">{BRAND_CONFIG.name}</div>
                        <div className="text-on-surface-0-variant text-xs font-semibold">
                            "{BRAND_CONFIG.motto}"
                        </div>
                    </div>
                    <div className="text-on-surface-0-variant max-w-prose text-xs">
                        All rights reserved &copy; {currentYear}. {BRAND_CONFIG.name} is a fictional
                        brand created for demonstration purposes only. Any resemblance to real
                        persons, living or dead, or actual businesses is purely coincidental. The
                        games and services offered on this website are for entertainment purposes
                        only and do not involve real money gambling or prizes. {BRAND_CONFIG.name}{' '}
                        holds license number 123456 issued by the Gaming Authority of Fictionland on
                        14th June 1993.
                    </div>
                </div>
                <div className="flex w-full max-w-xs flex-col items-center gap-2">
                    <FooterDesktopLink
                        href={BRAND_CONFIG.links.termsAndConditions.href}
                        text={BRAND_CONFIG.links.termsAndConditions.label}
                    />
                    <FooterDesktopLink
                        href={BRAND_CONFIG.links.cookiePolicy.href}
                        text={BRAND_CONFIG.links.cookiePolicy.label}
                    />
                    <FooterDesktopLink
                        href={BRAND_CONFIG.links.privacyPolicy.href}
                        text={BRAND_CONFIG.links.privacyPolicy.label}
                    />
                    <FooterDesktopLink
                        href={BRAND_CONFIG.links.responsibleSocialGameplay.href}
                        text={BRAND_CONFIG.links.responsibleSocialGameplay.label}
                    />
                </div>
            </div>
        </PageContainer>
    );
};
