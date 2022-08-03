import '@unocss/reset/tailwind.css'
import 'uno.css'
import { createApp, h } from 'vue'
import { createHead } from '@vueuse/head'
import { createInertiaApp } from '@inertiajs/inertia-vue3'
import { InertiaProgress } from '@inertiajs/progress'
import pkg from '../../package.json'
import { importPageComponent } from '~/scripts/vite/import-page-component'

createInertiaApp({
  resolve: name => importPageComponent(name, import.meta.glob('../views/pages/**/*.vue')),
  setup({ el, app, props, plugin }) {
    createApp({
      name: 'LaravelInertiaVitesse',
      data() {
        return {
          version: pkg.version,
        }
      },
      mounted: () => {
        // Remove Data Page for Protection
        document.querySelector('[data-page]')?.removeAttribute('data-page')
      },
      render: () => h(app, props),
    })
      .use(plugin)
      .use(createHead())
      .mount(el)

    InertiaProgress.init()
  },
})
