import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ExperienceItem } from './ExperienceItem'

gsap.registerPlugin(ScrollTrigger)

export const ExperienceCards = () => {
  const EXPERIENCE_OPTIONS = [
    {
      title: 'DISEÑADOR WEB | FREELANCE',
      company: 'ADUANERO HY - SISTEMA CLASIFICADOR ADUANERO',
      duration: 'JUNIO 2024 – AGOSTO 2024',
      description:
        'Diseñé un sistema para la clasificación de documentos de aduanas, recopilando y analizando requisitos junto al cliente para definir el alcance y transformarlos en una interfaz intuitiva con filtros y búsquedas avanzadas que ofrecieron una excelente experiencia de usuario, este prototipo interactivo permitió validar la arquitectura y los flujos de manera realista.',
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

  return (
    <span className="border-l-2 border-black/20 dark:border-white/15 ml-4 pl-6 flex flex-col gap-10 mx-10 sm:mx-10 md:mx-20 lg:mx-40 relative">
      {EXPERIENCE_OPTIONS.map((experienceOption, index) => (
        <ExperienceItem
          experienceOption={experienceOption}
          key={index}
          index={index}
        />
      ))}
    </span>
  )
}
