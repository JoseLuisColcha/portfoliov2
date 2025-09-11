import { ExperienceCards } from './ExperienceCards'
import { TitleSection } from './TitleSection'

export const Experience = () => {
  return (
    <section id="experiencia" className="col-center w-full">
      <TitleSection
        title="EXPERIENCIA"
        subtitle="MI RECORRIDO"
      />
      <ExperienceCards />
    </section>
  )
}
