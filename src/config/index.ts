import brandConfig from '@brand-config';

export type BrandCode = 'RLF';

export type BrandConfigLink = {
    href: string;
    label: string;
};

export type BrandConfig = {
    code: BrandCode;
    name: string;
    motto: string;
    links: {
        termsAndConditions: BrandConfigLink;
        cookiePolicy: BrandConfigLink;
        privacyPolicy: BrandConfigLink;
        responsibleSocialGameplay: BrandConfigLink;
    };
};

export type BrandEnvironment = 'development' | 'test' | 'production';
export type BrandConfigEnv = Record<BrandEnvironment, BrandConfig>;

export function getBrandConfig(): BrandConfig {
    const currentEnv: BrandEnvironment =
        (import.meta.env.VITE_BRAND_ENV as BrandEnvironment) || 'development';

    if (currentEnv in brandConfig) {
        return brandConfig[currentEnv];
    }

    return brandConfig.development;
}

export const BRAND_CONFIG = getBrandConfig();
