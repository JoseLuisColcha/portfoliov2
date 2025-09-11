import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

export const ExperienceCards = () => {
  const EXPERIENCE_OPTIONS = [
    {
      title: 'DISEÑADOR WEB | FREELANCE',
      company: 'ADUANERO HY - SISTEMA CLASIFICADOR ADUANERO',
      duration: 'JUNIO 2024 – AGOSTO 2024',
      description:
        'Diseñé la interfaz gráfica, recopilando y analizando requisitos funcionales con el cliente para definir el alcance del sistema. Diseñé una interfaz intuitiva con filtros, búsquedas y resaltado automático de términos, desarrollé un prototipo interactivo para su validación previa y documenté la arquitectura, flujos y diseño en un informe técnico.',
    },
    {
      title: 'DESARROLLADOR FRONTEND | FREELANCE',
      company: 'ADUANERO HY - SISTEMA DE INFORMACIÓN ADUANERA',
      duration: 'MARZO 2023 – OCTUBRE 2023',
      description:
        'Diseñé y desarrollé la interfaz de usuario de un sistema para la gestión de datos aduaneros confidenciales, implementando formularios avanzados con filtros y rangos de búsqueda, integración de datos desde el backend, tablas dinámicas con paginación eficiente y visualización mediante gráficos estadísticos personalizables.',
    },
    {
      title: 'ASISTENTE DE SOPORTE WEB | PASANTIAS',
      company: 'ESCUELA POLITÉCNICA NACIONAL',
      duration: 'OCTUBRE 2021 – FEBRERO 2022',
      description:
        'Realicé el análisis y evaluación de los sitios web institucionales y de las facultades, identificando errores de visualización y proponiendo mejoras en la interfaz y la experiencia de usuario. Además, elaboré y gestioné informes técnicos y documentales relacionados con convenios institucionales.',
    },
  ]

  const experienceCardRef = useRef([])

  useGSAP(() => {
    experienceCardRef.current.forEach((experienceCard) => {
      gsap.from(experienceCard, {
        rotationX: 90,
        opacity: 0,
        filter: 'blur(10px)',
        duration: 1.3,
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
    <span className="border-l-2 border-black/20 dark:border-white/15 ml-4 pl-6 flex flex-col gap-10 mx-10 sm:mx-10 md:mx-20 lg:mx-40 relative">
      {EXPERIENCE_OPTIONS.map((experienceOption, index) => (
        <div
          key={index}
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
      ))}
    </span>
  )
}
