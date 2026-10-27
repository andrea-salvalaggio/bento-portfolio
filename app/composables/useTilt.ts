const MAX_TILT = 6

export function useTilt() {
  let frame = 0

  function onPointerMove(event: PointerEvent) {
    if (event.pointerType !== 'mouse' || frame) return
    const el = event.currentTarget as HTMLElement
    const { clientX, clientY } = event
    frame = requestAnimationFrame(() => {
      frame = 0
      const rect = el.getBoundingClientRect()
      const x = (clientX - rect.left) / rect.width - 0.5
      const y = (clientY - rect.top) / rect.height - 0.5
      el.style.setProperty('--rx', `${(-y * MAX_TILT * 2).toFixed(2)}deg`)
      el.style.setProperty('--ry', `${(x * MAX_TILT * 2).toFixed(2)}deg`)
    })
  }

  function onPointerLeave(event: PointerEvent) {
    cancelAnimationFrame(frame)
    frame = 0
    const el = event.currentTarget as HTMLElement
    el.style.removeProperty('--rx')
    el.style.removeProperty('--ry')
  }

  return { onPointerMove, onPointerLeave }
}
