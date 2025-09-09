import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export const useLenisGSAP = () => {
  const lenisRef = useRef()

  useEffect(() => {
    function update(time) {
      lenisRef.current?.lenis?.raf(time * 1000)
    }

    gsap.ticker.add(update)

    return () => gsap.ticker.remove(update)
  }, [])

  return { lenisRef }
}
