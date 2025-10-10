import { BrandConfig, BrandConfigEnv } from '..';
import { CircleDollarSignIcon, GemIcon } from 'lucide-react';
import { formatNumber } from '@utils/format-number';

const commonConfig: BrandConfig = {
    code: 'RLF',
    name: 'Royal Flush',
    motto: 'Your Kingdom, Your Rules',
    links: {
        termsAndConditions: {
            href: '#',
            label: 'Terms & Conditions',
        },
        cookiePolicy: {
            href: '#',
            label: 'Cookie Policy',
        },
        privacyPolicy: {
            href: '#',
            label: 'Privacy Policy',
        },
        responsibleSocialGameplay: {
            href: '#',
            label: 'Responsible Social Gameplay',
        },
    },
    wallets: [
        {
            id: 'COIN',
            label: 'Coin',
            icon: CircleDollarSignIcon,
            formatter: (value: number) => {
                return formatNumber(value, {
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 0,
                });
            },
            isDefault: true,
        },
        {
            id: 'GEM',
            label: 'Gem',
            icon: GemIcon,
            formatter: (value: number) => {
                return formatNumber(value, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                });
            },
            isDefault: false,
        },
    ],
};

const development: BrandConfig = {
    ...commonConfig,
    name: `${commonConfig.name} (DEV)`,
};

const test: BrandConfig = {
    ...commonConfig,
    name: `${commonConfig.name} (TEST)`,
};

const production: BrandConfig = {
    ...commonConfig,
};

const config: BrandConfigEnv = {
    development,
    test,
    production,
};

export default config;
