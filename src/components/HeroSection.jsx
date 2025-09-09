import { SecondaryButtonSVG } from './SecondaryButtonSVG'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { SplitText } from 'gsap/SplitText'
import { useRef } from 'react'

gsap.registerPlugin(SplitText)

export const HeroSection = () => {
  const titleRef = useRef(null)
  const subTitleRef = useRef(null)
  const imageRef = useRef(null)
  const introRef = useRef(null)

  useGSAP(() => {
    const isFirefox = navigator.userAgent.toLowerCase().includes('firefox')

    // HERO-INTRO
    gsap.from(introRef.current, {
      x: -50,
      opacity: 0,
      ...(isFirefox ? {} : { filter: 'blur(10px)' }),
      duration: 1.2,
      ease: 'power3.out',
      delay: 0.5,
    })

    if (isFirefox) {
      gsap.from('.hero-intro-item', {
        filter: 'blur(10px)',
        duration: 1.2,
        ease: 'power3.out',
        delay: 0.5,
      })
    }

    //HERO TITLE
    document.fonts.ready.then(() => {
      const split = new SplitText(titleRef.current, { type: 'chars' })

      gsap.from(split.chars, {
        opacity: 0,
        z: -200,
        rotateX: -90,
        duration: 1,
        filter: 'blur(20px)',
        ease: 'power4.out',
        stagger: 0.05,
        transformOrigin: 'center center -50',
      })
    })

    // HERO SUBTITLE
    gsap.from(subTitleRef.current, {
      y: 40,
      opacity: 0,
      filter: 'blur(30px)',
      skewY: 10,
      duration: 1,
      ease: 'power3.out',
      delay: 1.3,
    })

    // HERO IMAGE
    gsap.from(imageRef.current, {
      x: 50,
      opacity: 0,
      filter: 'blur(10px)',
      scale: 0.8,
      duration: 1.2,
      ease: 'power4.out',
      delay: 1.1,
    })
  }, [])

  return (
    <div id="inicio" className="w-full h-screen relative">
      {/* HERO IMAGEN */}
      <div
        ref={imageRef}
        className="absolute inset-x-0 sm:bottom-15 top-20 md:bottom-0 flex justify-center z-10"
      >
        <img
          className="object-contain w-[360px] sm:w-[360px] md:w-[400px]"
          src="/images/profile-photo-desktop.webp"
          srcSet="
    /images/profile-photo-mobile.webp 360w,
    /images/profile-photo-desktop.webp 400w    
  "
          sizes="(max-width: 640px) 360px, 400px"
          alt="una imagen de un hombre con lentes"
          loading="eager"
          fetchPriority="high"
        />
      </div>

      <div className=" absolute bottom-0 space-y-6 z-20 inset-x-[8.4vw] sm:inset-x-0 md:inset-x-0">
        {/* HERO INTRO */}
        <section
          ref={introRef}
          className=" max-w-full sm:max-w-[40%] md:max-w-[40%] lg:max-w-[40%] space-y-3 mx-auto sm:mx-0"
        >
          <p className="hero-intro-item font-inter text-sm sm:text-base text-left">
            Hola, soy José Luis Colcha. Me especializo en desarrollar
            aplicaciones web modernas, con un enfoque en ofrecer una excelente
            experiencia de usuario y diseños visuales atractivos.
          </p>

          <SecondaryButtonSVG />
        </section>

        {/* HERO TITLE*/}
        <section className="flex flex-col mb-4">
          <h1
            ref={titleRef}
            className="font-druk text-center text-[14.8vw]/[12vw] sm:text-[15.2vw]/[12vw] md:text-[14.9vw]/[12vw] lg:text-[14.2vw]/[12vw] text-brand"
          >
            DESARROLLADOR DE SOFTWARE
          </h1>

          {/* HERO SUBTITLE*/}
          <h4
            ref={subTitleRef}
            className="font-free-script text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-brand-red flex justify-end"
          >
            & DISEÑADOR UI/UX
          </h4>
        </section>
      </div>
    </div>
  )
}
