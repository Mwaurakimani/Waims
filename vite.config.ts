import { wayfinder } from '@laravel/vite-plugin-wayfinder';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import laravel from 'laravel-vite-plugin';
import { defineConfig } from 'vite';
import inertia from '@inertiajs/vite';

//this is the change
// @ts-ignore
export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.tsx'],
            ssr: 'resources/js/ssr.tsx',
            refresh: [
                {
                    paths: [
                        // 'resources/**',
                        'routes/**',
                        'app/Http/Controllers/**',
                    ],
                },
            ],
        }),
        inertia(),
        react({
            babel: {
                plugins: ['babel-plugin-react-compiler'],
            },
        }),
        tailwindcss(),
        wayfinder({
            command: 'herd php artisan wayfinder:generate',
            formVariants: true,
        }),
    ],
    esbuild: {
        jsx: 'automatic',
    },
});
