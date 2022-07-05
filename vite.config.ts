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
