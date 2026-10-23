import { useEffect, useRef, useState } from 'react'

export function CountUp({ value }) {
  const ref = useRef(null)
  const [display, setDisplay] = useState(() => '0'.repeat(String(value).length))

  useEffect(() => {
    const node = ref.current
    const numeric = Number(value)
    if (!node || Number.isNaN(numeric)) return undefined

    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (media.matches) {
      setDisplay(value)
      return undefined
    }

    let frame = 0
    let started = false
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting || started) return
      started = true
      observer.disconnect()
      const start = performance.now()
      const duration = 1000
      const tick = (now) => {
        const progress = Math.min(1, (now - start) / duration)
        const eased = 1 - (1 - progress) ** 3
        setDisplay(String(Math.round(numeric * eased)).padStart(String(value).length, '0'))
        if (progress < 1) frame = requestAnimationFrame(tick)
      }
      frame = requestAnimationFrame(tick)
    }, { threshold: 0.6 })

    observer.observe(node)
    return () => {
      observer.disconnect()
      cancelAnimationFrame(frame)
    }
  }, [value])

  return <strong ref={ref}>{display}</strong>
}
