import { createApp, h } from 'vue'
import { createInertiaApp } from '@inertiajs/inertia-vue3'
import { InertiaProgress } from '@inertiajs/progress'
import pkg from '../../package.json'
import { importPageComponent } from '~/scripts/vite/import-page-component'
import '@unocss/reset/tailwind.css'
import 'uno.css'

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
      .mount(el)

    InertiaProgress.init()
  },
})
