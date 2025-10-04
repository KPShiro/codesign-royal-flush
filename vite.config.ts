/// <reference types="vitest" />
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { loadEnv } from 'vite';
import { defineConfig } from 'vitest/config';
import { tanstackRouter } from '@tanstack/router-plugin/vite';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
    const environment = loadEnv(mode, process.cwd(), '');
    const brandCode = environment.VITE_BRAND_CODE;

    if (!brandCode) {
        throw new Error('VITE_BRAND_CODE is not defined in your .env file!');
    }

    return {
        plugins: [
            tanstackRouter({
                target: 'react',
                autoCodeSplitting: true,
            }),
            react(),
            tailwindcss(),
        ],
        test: {
            dir: 'src',
            environment: 'jsdom',
            exclude: ['**/node_modules/**', '**/dist/**', '**/public/**'],
            testTimeout: 10000,
            globals: true,
            setupFiles: './vitest.setup.ts',
        },
        resolve: {
            alias: {
                '@brand-theme': path.resolve(__dirname, `./src/themes/${brandCode}.theme.css`),
                '@brand-config': path.resolve(
                    __dirname,
                    `./src/config/brand-config/${brandCode}.config.ts`
                ),

                '@src': path.resolve(__dirname, './src'),
                '@animations': path.resolve(__dirname, './src/animations'),
                '@assets': path.resolve(__dirname, './src/assets'),
                '@components': path.resolve(__dirname, './src/components'),
                '@config': path.resolve(__dirname, './src/config'),
                '@features': path.resolve(__dirname, './src/features'),
                '@hooks': path.resolve(__dirname, './src/hooks'),
                '@models': path.resolve(__dirname, './src/models'),
                '@utils': path.resolve(__dirname, './src/utils'),
                // Add more path aliases here, just remember to add them to the tsconfing.app.json as well...
            },
        },
        server: {
            host: true,
        },
    };
});
