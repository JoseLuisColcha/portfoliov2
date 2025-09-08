import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { IoLogoWhatsapp } from 'react-icons/io'

export const SocialNetworks = () => {
  return (
    <div className="flex flex-row gap-4 w-full h-12 flex-center text-brand">
      <a
        href="https://github.com/JoseLuisColcha"
        target="_blank"
        rel="noopener noreferrer"
        className="icon-hover"
      >
        <FaGithub className="size-8" />
      </a>

      <a
        href="https://github.com/JoseLuisColcha"
        target="_blank"
        rel="noopener noreferrer"
        className="icon-hover"
      >
        <FaLinkedin className="size-8" />
      </a>

      <a
        href="https://wa.me/+593939971790"
        target="_blank"
        rel="noopener noreferrer"
        className="icon-hover"
      >
        <IoLogoWhatsapp className="size-8" />
      </a>
    </div>
  )
}
