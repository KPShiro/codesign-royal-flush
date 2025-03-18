/// <reference types="vitest" />
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vitest/config';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), tailwindcss()],
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
            '@': path.resolve(__dirname, './src'),
            '@animations': path.resolve(__dirname, './src/animations'),
            '@assets': path.resolve(__dirname, './src/assets'),
            '@components': path.resolve(__dirname, './src/components'),
            '@features': path.resolve(__dirname, './src/features'),
            '@utils': path.resolve(__dirname, './src/utils'),
            // Add more path aliases here, just remember to add them to the tsconfing.app.json as well...
        },
    },
    server: {
        host: true,
    },
});
