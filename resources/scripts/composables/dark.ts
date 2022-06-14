import { useDark, useToggle } from '@vueuse/core'

export const isDark = useDark({
  onChanged(dark: boolean) {
    document.documentElement.classList.toggle('dark', dark)
    document.documentElement.style.setProperty('color-scheme', dark ? 'dark' : 'normal')
    document.querySelector('meta[name=theme-color]')!.setAttribute('content', dark ? '#000000' : '#ffffff')
  },
})

export const toggleDark = useToggle(isDark)
