import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

export function useAnimatedLink() {
  const { contextSafe } = useGSAP()

  const handleMouseEnter = contextSafe((event) => {
    const wrapper = event.currentTarget.querySelector('.text-wrapper')
    gsap.to(wrapper, {
      y: '-23px',
      duration: 0.4,
      ease: 'power2.out',
    })
  })

  const handleMouseLeave = contextSafe((event) => {
    const wrapper = event.currentTarget.querySelector('.text-wrapper')
    gsap.to(wrapper, {
      y: 0,
      duration: 0.4,
      ease: 'power2.out',
    })
  })

  return { handleMouseEnter, handleMouseLeave }
}
