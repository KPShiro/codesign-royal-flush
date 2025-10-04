import { BrandCode, BrandConfig, BrandConfigEnv } from '..';

const BRAND_CODE: BrandCode = 'RLF';
const BRAND_NAME: string = 'Royal Flush';
const BRAND_MOTTO: string = 'Your Kingdom, Your Rules';

const development: BrandConfig = {
    code: BRAND_CODE,
    name: `${BRAND_NAME} (DEV)`,
    motto: BRAND_MOTTO,
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
};

const test: BrandConfig = {
    code: BRAND_CODE,
    name: `${BRAND_NAME} (TEST)`,
    motto: BRAND_MOTTO,
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
};

const production: BrandConfig = {
    code: BRAND_CODE,
    name: BRAND_NAME,
    motto: BRAND_MOTTO,
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
};

const config: BrandConfigEnv = {
    development,
    test,
    production,
};

export default config;
