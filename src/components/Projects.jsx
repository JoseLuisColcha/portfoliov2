import { ProjectCards } from './ProjectCards'
import { TitleSection } from './TitleSection'

export const Projects = () => {
  return (
    <section
      id="proyectos"
      className="page-section col-center px-[8vw] sm:px-0"
    >
      <TitleSection title="PROYECTOS" subtitle="MI PORTAFOLIO" />
      <ProjectCards />
    </section>
  )
}
