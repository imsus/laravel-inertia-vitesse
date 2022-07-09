/// <reference types="vitest" />
import path from 'path'
import { defineConfig } from 'vite'
import laravel from 'vite-plugin-laravel'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { HeadlessUiResolver } from 'unplugin-vue-components/resolvers'
import Inspect from 'vite-plugin-inspect'
import DefineOptions from 'unplugin-vue-define-options/vite'
import Unocss from 'unocss/vite'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'resources')}/`,
      '@/': `${path.resolve(__dirname, 'resources')}/`,
    },
  },
  plugins: [
    DefineOptions(),

    vue({
      reactivityTransform: true,
    }),

    laravel(),

    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      imports: [
        'vue',
        'vue-router',
        'vue-i18n',
        'vue/macros',
        '@vueuse/head',
        '@vueuse/core',
        { '@inertiajs/inertia-vue3': ['usePage', 'useForm'] },
      ],
      dts: 'resources/scripts/auto-imports.d.ts',
      dirs: [
        'resources/scripts/composables',
        'resources/scripts/store',
      ],
      vueTemplate: true,
    }),

    // https://github.com/antfu/unplugin-vue-components
    Components({
      dirs: ['resources/views/components'],
      // allow auto load markdown components under `./src/components/`
      extensions: ['vue'],
      resolvers: [
        HeadlessUiResolver(),
        (componentName) => {
          switch (true) {
            case componentName.startsWith('InertiaLink'): return {
              from: '@inertiajs/inertia-vue3',
              name: 'Link',
            }
          }
        },
      ],
      // allow auto import and register components used in markdown
      include: [/\.vue$/, /\.vue\?vue/],
      dts: 'resources/scripts/components.d.ts',
    }),

    // https://github.com/antfu/unocss
    // see unocss.config.ts for config
    Unocss(),

    // https://github.com/antfu/vite-plugin-inspect
    // Visit http://localhost:3333/__inspect/ to see the inspector
    Inspect(),

    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        id: 'com.imsus.livt',
        name: 'LaravelInertiaVitesse',
        short_name: 'LIVT',
        description: 'Template Projects for Laravel Inertia Vitesse',
        start_url: '/?homescreen=1',
        background_color: '#ffffff',
        theme_color: '#ffffff',
        display: 'standalone',
        orientation: 'portrait',
        scope: '/',
        icons: [
          {
            src: '/build/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/build/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: '/build/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable',
          },
        ],
      },
      devOptions: {
        enabled: true,
      },
    }),
  ],
  // https://github.com/vitest-dev/vitest
  test: {
    include: ['tests/**/*.test.ts'],
    environment: 'jsdom',
    deps: {
      inline: ['@vue', '@vueuse', 'vue-demi'],
    },
  },
})
