import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const SkillsCard = ({ title, skills }) => {
  const skillsCardRef = useRef(null)
  const skillsItemsRef = useRef([])

  useGSAP(() => {
    gsap.from(skillsCardRef.current, {
      scrollTrigger: {
        trigger: skillsCardRef.current,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
      opacity: 0,
      y: 100,
      scale: 0.95,
      duration: 1.2,
      ease: 'power3.out',
    })

    gsap.from(skillsItemsRef.current, {
      scrollTrigger: {
        trigger: skillsCardRef.current,
        start: 'top 75%',
      },
      opacity: 0,
      filter: 'blur(10px)',
      y: 20,
      stagger: 0.15,
      duration: 0.6,
      ease: 'back.out(1.7)',
    })
  }, [])

  return (
    <div
      ref={skillsCardRef}
      className="bg-brand/10 font-inter border border-brand/15 backdrop-blur-sm p-8 space-y-6"
    >
      <h4 className="text-[18px]">{title}</h4>

      <section className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center font-inter">
        {skills.map((skill, index) => (
          <div
            key={index}
            ref={(skillsELement) =>
              (skillsItemsRef.current[index] = skillsELement)
            }
            className="text-center flex flex-col items-center gap-3"
          >
            <div className="text-5xl text-brand icon-hover">{skill.icon}</div>
            <h6 className="text-[14px] sm:text-[17px] text-white/80">
              {skill.title}
            </h6>
          </div>
        ))}
      </section>
    </div>
  )
}
