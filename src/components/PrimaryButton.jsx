import { FaArrowRight } from 'react-icons/fa6'

export const PrimaryButton = () => {
  return (
    <a
      href="#contacto"
      className="group header-item noutched-btn absolute right-0 h-full w-[136px] py-4 flex flex-row justify-center items-center gap-1 active:scale-90 transition-all"
      style={{
        clipPath: 'polygon(0 0, 85% 0, 100% 35%, 100% 100%, 15% 100%, 0 65%)',
      }}
    >
      <span>CONTÁCTAME</span>
      <FaArrowRight className="size-4 -rotate-[45deg] group-hover:rotate-0 transition-all duration-300" />
    </a>
  )
}
