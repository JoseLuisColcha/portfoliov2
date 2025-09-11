import { ProjectCardButtons } from './ProjectCardButtons'
import { ProjectCardTags } from './ProjectCardTags'

export const ProjectItem = ({ projectOption, refValue }) => {
  return (
    <figure
      ref={refValue}
      className="bg-brand/10 font-inter border border-brand/15 backdrop-blur-sm grid grid-col-3 gap-4 h-auto"
    >
      <img
        className="w-full h-50 object-cover"
        src={projectOption.img}
        alt="Una imagen de un sitio web"
        loading="lazy"
      />

      <figcaption className="px-8 pb-6 flex flex-col justify-between">
        <h2 className=" text-start pb-[4px] text-brand text-base sm:text-[18px]">
          {projectOption.title}
        </h2>

        <p className="text-white/80 text-[14px] sm:text-[15px] font-light mb-1">
          {projectOption.description}
        </p>

        <ProjectCardTags projectOptionTags={projectOption.tags} />

        <ProjectCardButtons projectOption={projectOption} />
      </figcaption>
    </figure>
  )
}
