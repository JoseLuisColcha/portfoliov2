import { FaGithub } from 'react-icons/fa'
import { FaFigma } from 'react-icons/fa'
import { TbWorldWww } from 'react-icons/tb'

export const ProjectCard = () => {
  const PROJECT_OPTIONS = [
    {
      title: 'MOJITO CÓCTELES ',
      description:
        'Un sistema web interactivo que invita a los usuarios a descubrir cócteles de manera sencilla, con imágenes llamativas y una experiencia visual amigable.',
      tags: ['REACT', 'TAILWIND CSS', 'GSAP'],
      img: '/images/cocktails-project.jpg',
      demo_url: 'https://gsap-cocktails-navy.vercel.app/',
      code_url: 'https://github.com/JoseLuisColcha/gsap-cocktails',
    },
    {
      title: 'POLI HUELLAS',
      description:
        'Sitio web para gestionar la adopción de mascotas rescatadas, donde los usuarios pueden visualizar perfiles de animales y completar solicitudes de adopción intuitivamente.',
      tags: ['NEXTJS', 'FIREBASE', 'MATERIAL UI'],
      img: '/images/pet-adoptions-project.jpg',
      demo_url: 'https://poli-huellas.vercel.app/',
      code_url: 'https://github.com/JoseLuisColcha/Poli-Huellas/',
    },
    {
      title: 'FENIX TRIAD',
      description:
        'Sitio web diseñado para presentar servicios de software, con secciones informativas y un diseño moderno y responsivo orientado a la captación de clientes',
      tags: ['ANGULAR', 'TAILWIND CSS', 'GSAP'],
      img: '/images/software-services-project.jpg',
      demo_url: 'https://www.fenixtriad.com',
      code_url: 'https://github.com/FE2024NIX/NIX_PAGE.git',
    },
    {
      title: 'CLASIFICADOR ADUANERO - HY',
      description:
        'Diseño de aplicación web para facilitar el acceso a documentos de aduanas mediante un buscador intuitivo y opciones avanzadas de clasificación.',
      tags: ['FIGMA', 'PHOTOSHOP', 'ILLUSTRATOR'],
      img: '/images/customs-classifier-project.jpg',
      demo_url: 'https://aduanero.com.ec/clasificador-aduanero/',
      design_url:
        'https://www.figma.com/file/pc8ggvUBr5C1Tdmeoq1wsg/El-clasificador-aduanero-V2?type=design&node-id=951%3A4054&mode=design&t=MsTtPKTAwwzP9n27-1',
    },
    {
      title: 'DATA BUSSINESS - HY',
      description:
        'Un sistema digital que facilita la gestión y análisis de información aduanera, mostrando resultados de manera clara mediante tablas organizadas y gráficos estadísticos.',
      tags: ['REACT', 'ANT DESIGN', 'RECHARTS'],
      img: '/images/databusiness-project.jpg',
      demo_url: 'https://aduanero.com.ec/',
      design_url:
        'https://www.figma.com/design/y1eiOZQNeP9KbHaGRk9KJm/DataBussinessV2?node-id=0-1&p=f&t=81Z42MALhGLDdegL-0',
    },
    {
      title: 'CALENDARIO WEB',
      description:
        'Aplicación web que permite a los usuarios crear, organizar y guardar eventos en un calendario interactivo, facilitando la planificación diaria',
      tags: ['REACT', 'REDUX', 'SWEETALERT2'],
      img: '/images/calendar-project.jpg',
      demo_url: 'https://calendar-app-cyan-psi.vercel.app/',
      code_url: 'https://github.com/JoseLuisColcha/calendar-app',
    },
    {
      title: 'CALENDARIO WEB - BACKEND',
      description:
        'Backend desarrollado para la aplicación de calendario, gestionando la creación, edición y almacenamiento seguro de eventos mediante una API eficiente',
      tags: ['NODE JS', 'EXPRESS JS', 'MONGODB'],
      img: '/images/calendar-bk-project.jpg',
      demo_url: 'https://app-calendar-backend.up.railway.app/',
      code_url: 'https://github.com/JoseLuisColcha/calendar-app-backend',
    },
    {
      title: 'MI PORTAFOLIO',
      description:
        'Sitio web desarrollado para presentar de manera organizada mi esperiencia y mis proyectos, con información sobre funcionalidades y tecnologías empleadas',
      tags: ['REACT', 'TAILWIND CSS', 'GSAP'],
      img: '/images/portfolio-project.jpg',
      demo_url: 'https://github.com/JoseLuisColcha/portfoliov2',
      code_url: 'https://github.com/JoseLuisColcha/portfoliov2',
    },
  ]
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-8">
      {PROJECT_OPTIONS.map((projectOption, index) => (
        <figure
          key={index}
          className="bg-brand/10 font-inter border border-brand/15 backdrop-blur-sm grid grid-col-3 gap-4 h-auto"
        >
          <img
            className="w-full h-50 object-cover"
            src={projectOption.img}
            alt="Una imagen de un sitio web"
          />

          <figcaption className="px-8 pb-6 flex flex-col justify-between">
            <h2 className=" text-start pb-[4px] text-brand text-base sm:text-[18px]">
              {projectOption.title}
            </h2>

            <p className="text-white/80 text-[14px] sm:text-[15px] font-light mb-1">
              {projectOption.description}
            </p>

            {/* TAGS */}
            <section className="flex flex-wrap content-start items-start gap-1.5 my-2">
              {projectOption.tags.map((tag, index) => (
                <span
                  key={index}
                  className="flex items-center border border-brand/20 backdrop-blur-sm bg-brand/1 px-2.5 h-6 text-xs font-medium text-brand"
                >
                  {tag}
                </span>
              ))}
            </section>

            {/* BUTTONS */}
            <section className="flex gap-4 justify-center text-xs mt-3">
              <a
                href={projectOption.code_url || projectOption.design_url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 px-4 py-2 sm:py-[10px] border border-brand  text-brand hover:bg-orange-900 hover:text-white transition-all duration-300 flex flex-row items-center gap-2"
              >
                {projectOption.code_url ? (
                  <FaGithub className="w-4 h-4" />
                ) : (
                  <FaFigma className="w-4 h-4" />
                )}

                <h6> {projectOption.code_url ? 'VER CÓDIGO' : 'VER DISEÑO'}</h6>
              </a>

              <a
                href={projectOption.demo_url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-row items-center gap-2 mt-4 px-4 py-2 sm:py-[10px]  text-btn-txt hover:text-white bg-brand hover:bg-brand-red transition-all duration-300"
              >
                <TbWorldWww className="w-4 h-4" />
                <h6>VER DEMO</h6>
              </a>
            </section>
          </figcaption>
        </figure>
      ))}
    </div>
  )
}
