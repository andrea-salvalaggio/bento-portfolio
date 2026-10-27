export function useGlow() {
  let frame = 0

  function onPointerMove(event: PointerEvent) {
    if (event.pointerType !== 'mouse' || frame) return
    const el = event.currentTarget as HTMLElement
    const { clientX, clientY } = event
    frame = requestAnimationFrame(() => {
      frame = 0
      const rect = el.getBoundingClientRect()
      el.style.setProperty('--mx', `${clientX - rect.left}px`)
      el.style.setProperty('--my', `${clientY - rect.top}px`)
    })
  }

  return { onPointerMove }
}
