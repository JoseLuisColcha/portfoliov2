import { FaGithub } from 'react-icons/fa'
import { FaFigma } from 'react-icons/fa'
import { TbWorldWww } from 'react-icons/tb'

export const ProjectCardButtons = ({ projectOption }) => {
  return (
    <section className="flex gap-4 justify-center text-xs mt-3">
      <a
        href={projectOption.code_url || projectOption.design_url}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 px-4 py-2 sm:py-[10px] border border-brand  text-brand hover:bg-[#040000] hover:text-white transition-all duration-500 flex flex-row items-center gap-2"
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
        className="flex flex-row items-center gap-2 mt-4 px-4 py-2 sm:py-[10px]  text-btn-txt hover:text-white bg-brand hover:bg-brand-red transition-all duration-500"
      >
        <TbWorldWww className="w-4 h-4" />
        <h6>VER DEMO</h6>
      </a>
    </section>
  )
}
