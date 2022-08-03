import {
  defineConfig,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

import { formPreflight } from './resources/scripts/unocss/form-preflight'

export default defineConfig({
  preflights: [
    formPreflight,
  ],
  presets: [
    presetUno(),
    presetTypography(),
    presetWebFonts({
      fonts: {
        sans: 'Inter',
        serif: 'DM Serif Display',
        mono: 'DM Mono',
      },
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
})
