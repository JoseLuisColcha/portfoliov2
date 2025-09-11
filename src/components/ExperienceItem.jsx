import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef } from 'react'

export const ExperienceItem = ({ experienceOption, index }) => {
  const experienceCardRef = useRef([])

  useGSAP(() => {
    experienceCardRef.current.forEach((experienceCard) => {
      gsap.from(experienceCard, {
        rotationX: 90,
        opacity: 0,
        filter: 'blur(10px)',
        duration: 1.5,
        ease: 'back.out(1.7)',

        scrollTrigger: {
          trigger: experienceCard,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      })
    })
  }, [])

  return (
    <div
      ref={(experienceElement) =>
        (experienceCardRef.current[index] = experienceElement)
      }
      className="relative before:absolute before:size-3.5 before:bg-brand-red before:rounded-full before:mt-13 before:-ml-11 bg-brand/10 font-inter border border-black/10 backdrop-blur-sm ml-3"
    >
      <h6 className="px-12 pt-12 text-[12px] sm:text-[13px] text-brand/60">
        {experienceOption.duration}
      </h6>

      <h4 className="px-12 pb-[16px] text-brand text-[16px] sm:text-[18px]">
        {experienceOption.title}
      </h4>

      <h4 className="px-12 text-[15px] sm:text-[16px] pb-[2px]">
        {experienceOption.company}
      </h4>

      <p className="px-12 pb-10 text-white/75 text-[14px] sm:text-[15px]">
        {experienceOption.description}
      </p>
    </div>
  )
}
