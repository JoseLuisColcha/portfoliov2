import { useActiveSection } from '../hooks/useActiveSection'
import { useAnimatedLink } from '../hooks/useAnimatedLink'

export const NavLinkItem = ({ link, ...rest }) => {
  const { handleMouseEnter, handleMouseLeave } = useAnimatedLink()
  const { activeSection } = useActiveSection()

  return (
    <a
      href={`#${link.id}`}
      className={`hover:text-brand transition-all duration-300 overflow-hidden h-[23px] ${
        activeSection === link.id ? 'text-brand font-semibold' : 'text-white'
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...rest}
    >
      <div className="text-wrapper flex flex-col">
        <span className="text-center h-[23px] flex-center">{link.label}</span>
        <span className="text-center h-[23px] flex-center">{link.label}</span>
      </div>
    </a>
  )
}
