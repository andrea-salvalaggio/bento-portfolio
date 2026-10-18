export function useCopyToClipboard() {
  const status = ref<'idle' | 'success' | 'error'>('idle')
  let resetTimer: ReturnType<typeof setTimeout> | undefined

  async function copy(value: string) {
    status.value = 'idle'
    try {
      if (!navigator?.clipboard) throw new Error('Clipboard API unavailable')
      await navigator.clipboard.writeText(value)
      status.value = 'success'
    } catch {
      status.value = 'error'
    }
    clearTimeout(resetTimer)
    resetTimer = setTimeout(() => { status.value = 'idle' }, 3200)
  }

  return { status, copy }
}
