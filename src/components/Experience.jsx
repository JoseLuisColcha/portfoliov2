import { ExperienceCard } from './ExperienceCard'
import { TitleSection } from './TitleSection'

export const Experience = () => {
  return (
    <section id="experiencia" className="page-section col-center w-full">
      <TitleSection
        title="EXPERIENCIA"
        subtitle="MI RECORRIDO"
      />
      <ExperienceCard />
    </section>
  )
}
