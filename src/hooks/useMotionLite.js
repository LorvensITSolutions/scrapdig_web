import { useState, useEffect } from 'react'

/** Viewports ≤1023px: fewer Framer calculations + less scroll jank on phones/tablets */
const MOTION_LITE_QUERY = '(max-width: 1023px)'

export function useMotionLite() {
  const [lite, setLite] = useState(() =>
    typeof window !== 'undefined' ? window.matchMedia(MOTION_LITE_QUERY).matches : false
  )

  useEffect(() => {
    const mq = window.matchMedia(MOTION_LITE_QUERY)
    const onChange = () => setLite(mq.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  return lite
}
