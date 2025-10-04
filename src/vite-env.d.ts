/// <reference types="vite/client" />

import { BrandCode, BrandEnvironment } from './config';

interface ImportMetaEnv {
    readonly VITE_BRAND_CODE: BrandCode;
    readonly VITE_BRAND_ENV: BrandEnvironment;
    // more env variables...
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
