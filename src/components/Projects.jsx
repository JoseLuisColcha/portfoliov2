import { ProjectCard } from './ProjectCard'
import { TitleSection } from './TitleSection'

export const Projects = () => {
  return (
    <section
      id="proyectos"
      className="page-section col-center px-[8vw] sm:px-0"
    >
      <TitleSection title="PROYECTOS" subtitle="MI PORTAFOLIO" />
      <ProjectCard />
    </section>
  )
}
