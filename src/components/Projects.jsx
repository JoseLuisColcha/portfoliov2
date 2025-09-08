import { ProjectCard } from './ProjectCard'
import { TitleSection } from './TitleSection'

export const Projects = () => {
  return (
    <div id='proyectos' className="col-center px-[8vw] sm:px-0">
      <TitleSection title="PROYECTOS" subtitle="MI PORTAFOLIO" />
      <ProjectCard />
    </div>
  )
}
