import { useRef } from 'react'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { IoLogoWhatsapp } from 'react-icons/io'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const SocialNetworks = () => {
  const containerRef = useRef(null)

  useGSAP(() => {
    const icons = gsap.utils.toArray(containerRef.current.querySelectorAll('a'))

    gsap.fromTo(
      icons,
      {
        opacity: 0,
        scale: 0,
        rotate: -180,
        filter: 'blur(10px)',
      },
      {
        opacity: 1,
        scale: 1,
        rotate: 0,
        duration: 0.8,
        ease: 'back.out(1.7)',
        stagger: 0.3,
        filter: 'blur(0px)',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 90%',
          toggleActions: 'play none none none',
        },
      }
    )
  }, [])

  return (
    <div
      ref={containerRef}
      className="flex flex-row gap-4 w-full h-12 justify-center items-center text-brand"
    >
      <a
        href="https://github.com/JoseLuisColcha"
        target="_blank"
        rel="noopener noreferrer"
        className="icon-hover"
      >
        <FaGithub className="size-8" />
      </a>

      <a
        href="https://www.linkedin.com/in/joseluiscolcha/"
        target="_blank"
        rel="noopener noreferrer"
        className="icon-hover"
      >
        <FaLinkedin className="size-8" />
      </a>

      <a
        href="https://wa.me/+593939971790"
        target="_blank"
        rel="noopener noreferrer"
        className="icon-hover"
      >
        <IoLogoWhatsapp className="size-8" />
      </a>
    </div>
  )
}
