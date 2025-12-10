import brandConfig from '@brand-config';
import { WalletConfig } from '@src/features/payments/models/wallet';

export type BrandCode = 'RLF';

export type BrandLinkConfig = {
    href: string;
    label: string;
};

export type BrandConfig = {
    code: BrandCode;
    name: string;
    motto: string;
    links: {
        termsAndConditions: BrandLinkConfig;
        cookiePolicy: BrandLinkConfig;
        privacyPolicy: BrandLinkConfig;
        responsibleSocialGameplay: BrandLinkConfig;
    };
    wallets: WalletConfig[];
};

export type BrandEnvironment = 'development' | 'test' | 'production';
export type BrandConfigEnv = Record<BrandEnvironment, BrandConfig>;

export function getBrandConfig(): BrandConfig {
    const currentEnv: BrandEnvironment =
        (import.meta.env.VITE_BRAND_ENV as BrandEnvironment | undefined) ?? 'development';

    if (currentEnv in brandConfig) {
        return brandConfig[currentEnv];
    }

    return brandConfig.development;
}

export const BRAND_CONFIG = getBrandConfig();
