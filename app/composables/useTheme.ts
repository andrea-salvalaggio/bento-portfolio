type Theme = 'dark' | 'light'

export function useTheme() {
  const cookie = useCookie<Theme>('theme', { default: () => 'dark', maxAge: 60 * 60 * 24 * 365, sameSite: 'lax' })
  const theme = useState<Theme>('theme', () => cookie.value === 'light' ? 'light' : 'dark')

  useHead({
    htmlAttrs: { 'data-theme': theme },
    meta: [{ name: 'theme-color', content: () => theme.value === 'light' ? '#e6e5e1' : '#202020' }],
  })

  function toggle() {
    theme.value = theme.value === 'dark' ? 'light' : 'dark'
    cookie.value = theme.value
  }

  return { theme, toggle }
}
