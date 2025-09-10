import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'
import { useRef } from 'react'

gsap.registerPlugin(SplitText, ScrollTrigger)

export const useTitleAnimation = () => {
  const titleRef = useRef(null)
  const containerRef = useRef(null)
  const subTitleRef = useRef(null)

  useGSAP(
    () => {
      document.fonts.ready.then(() => {
        const titleSplit = new SplitText(titleRef?.current, { type: 'chars' })

        gsap.from(titleSplit.chars, {
          y: 80,
          opacity: 0,
          filter: 'blur(10px)',
          duration: 1.2,
          ease: 'power4.out',
          stagger: 0.04,
          scrollTrigger: {
            trigger: containerRef?.current,
            start: 'top center',
          },
        })
      })

      gsap.from(subTitleRef?.current, {
        y: -60,
        opacity: 0,
        filter: 'blur(8px)',
        duration: 1,
        ease: 'power3.out',
        delay: 0.2,
        scrollTrigger: {
          trigger: containerRef?.current,
          start: 'bottom bottom',
        },
      })
    },
    [],
    { scope: containerRef }
  )
  return { containerRef, titleRef, subTitleRef }
}
