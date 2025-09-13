import { useRef } from 'react'
import { ProjectItem } from './ProjectItem'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
gsap.registerPlugin(ScrollTrigger)

export const ProjectCards = () => {
  const projectCardsRef = useRef([])

  const PROJECT_OPTIONS = [
    {
      title: 'MOJITO CÓCTELES ',
      description:
        'Un sistema web interactivo que invita a los usuarios a descubrir cócteles de manera sencilla, con imágenes llamativas y una experiencia visual amigable.',
      tags: ['REACT', 'TAILWIND CSS', 'GSAP'],
      img: '/images/cocktails-project.webp',
      demo_url: 'https://gsap-cocktails-navy.vercel.app/',
      code_url: 'https://github.com/JoseLuisColcha/gsap-cocktails',
    },
    {
      title: 'POLI HUELLAS',
      description:
        'Sitio web para gestionar la adopción de mascotas rescatadas, donde los usuarios pueden visualizar perfiles de animales y completar solicitudes de adopción intuitivamente.',
      tags: ['NEXTJS', 'FIREBASE', 'MATERIAL UI'],
      img: '/images/pet-adoptions-project.webp',
      demo_url: 'https://poli-huellas.vercel.app/',
      code_url: 'https://github.com/JoseLuisColcha/Poli-Huellas/',
    },
    {
      title: 'FENIX TRIAD',
      description:
        'Sitio web diseñado para presentar servicios de software, con secciones informativas y un diseño moderno y responsivo orientado a la captación de clientes',
      tags: ['ANGULAR', 'TAILWIND CSS', 'GSAP'],
      img: '/images/software-services-project.webp',
      demo_url: 'https://www.fenixtriad.com',
      code_url: 'https://github.com/FE2024NIX/NIX_PAGE.git',
    },
    {
      title: 'CLASIFICADOR ADUANERO - HY',
      description:
        'Diseño de aplicación web para facilitar el acceso a documentos de aduanas mediante un buscador intuitivo y opciones avanzadas de clasificación.',
      tags: ['FIGMA', 'PHOTOSHOP', 'ILLUSTRATOR'],
      img: '/images/customs-classifier-project.webp',
      demo_url: 'https://aduanero.com.ec/clasificador-aduanero/',
      design_url:
        'https://www.figma.com/file/pc8ggvUBr5C1Tdmeoq1wsg/El-clasificador-aduanero-V2?type=design&node-id=951%3A4054&mode=design&t=MsTtPKTAwwzP9n27-1',
    },
    {
      title: 'DATA BUSSINESS - HY',
      description:
        'Un sistema digital que facilita la gestión y análisis de información aduanera, mostrando resultados de manera clara mediante tablas organizadas y gráficos estadísticos.',
      tags: ['REACT', 'ANT DESIGN', 'RECHARTS'],
      img: '/images/databusiness-project.webp',
      demo_url: 'https://aduanero.com.ec/',
      design_url:
        'https://www.figma.com/design/y1eiOZQNeP9KbHaGRk9KJm/DataBussinessV2?node-id=0-1&p=f&t=81Z42MALhGLDdegL-0',
    },
    {
      title: 'CALENDARIO WEB',
      description:
        'Aplicación web que permite a los usuarios crear, organizar y guardar eventos en un calendario interactivo, facilitando la planificación diaria',
      tags: ['REACT', 'REDUX', 'SWEETALERT2'],
      img: '/images/calendar-project.webp',
      demo_url: 'https://calendar-app-cyan-psi.vercel.app/',
      code_url: 'https://github.com/JoseLuisColcha/calendar-app',
    },
    {
      title: 'CALENDARIO WEB - BACKEND',
      description:
        'Backend desarrollado para la aplicación de calendario, gestionando la creación, edición y almacenamiento seguro de eventos mediante una API eficiente',
      tags: ['NODE JS', 'EXPRESS JS', 'MONGODB'],
      img: '/images/calendar-bk-project.webp',
      demo_url: 'https://app-calendar-backend.up.railway.app/',
      code_url: 'https://github.com/JoseLuisColcha/calendar-app-backend',
    },
    {
      title: 'MI PORTAFOLIO',
      description:
        'Sitio web desarrollado para presentar de manera organizada mi esperiencia y mis proyectos, con información sobre funcionalidades y tecnologías empleadas',
      tags: ['REACT', 'TAILWIND CSS', 'GSAP'],
      img: '/images/portfolio-project.webp',
      demo_url: 'https://portfoliov2-olive-two.vercel.app/',
      code_url: 'https://github.com/JoseLuisColcha/portfoliov2',
    },
  ]

  useGSAP(() => {
    projectCardsRef.current.forEach((projectCard, index) => {
      gsap.from(projectCard, {
        opacity: 0,
        x: index % 2 === 0 ? -100 : 100,
        duration: 1.2,
        filter: 'blur(10px)',
        ease: 'power3.out',
        scrollTrigger: {
          trigger: projectCard,
          start: 'top 85%',
          end: 'top 50%', 
        },
      })
    })
  }, [])

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-8">
      {PROJECT_OPTIONS.map((projectOption, index) => (
        <ProjectItem
          key={index}
          refValue={(projectElement) =>
            (projectCardsRef.current[index] = projectElement)
          }
          projectOption={projectOption}
        />
      ))}
    </div>
  )
}
