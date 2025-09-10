import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef } from 'react'

export const useAnimationAboutMe = () => {
  const paragraphRef = useRef()

  useGSAP(() => {
    gsap.from(paragraphRef.current, {
      y: 40,
      opacity: 0,
      filter: 'blur(10px)',
      duration: 1,
      ease: 'power2.out',
      delay: 0.5,
      scrollTrigger: {
        trigger: paragraphRef.current,
        start: 'top bottom',
      },
    })
  }, [])
  return { paragraphRef }
}
