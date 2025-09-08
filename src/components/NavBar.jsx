import { MENU_OPTIONS } from '../constants/menuOptions'
import { MobileMenu } from './MobileMenu'
import { NavSVG } from './NavSVG'
import { PrimaryButton } from './PrimaryButton'

export const Navbar = () => {
  return (
    <header className="fixed top-4 inset-x-[3vw] h-12 z-40">
      {/* LOGO */}
      <div className="absolute left-0 h-full w-[60px] sm:w-[70px] flex-center">
        <img
          src="/icons/jlc-logo.svg"
          alt="logotipo"
          loading="eager"
          fetchPriority="high"
        />
      </div>

      <MobileMenu />

      {/* MENU DESKTOP */}
      <nav className="hidden lg:flex justify-center items-center h-full w-full relative">
        {/* LINKS */}
        <div className="relative h-full w-[500px] ">
          <div className="absolute flex justify-around items-center inset-0 ">
            <ul className="flex space-x-8 text-white font-inter text-xs">
              {MENU_OPTIONS.map((menuOption, index) => (
                <li key={index}>
                  <a
                    href={menuOption.url}
                    className="hover:text-brand transition-all duration-300"
                  >
                    {menuOption.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <NavSVG />
        </div>

        <PrimaryButton
          href="#contacto"
          className="absolute right-0 h-full w-[136px] py-4"
          valuesPolygon="0 0, 85% 0, 100% 35%, 100% 100%, 15% 100%, 0 65%"
          title="CONTÁCTAME"
        />
      </nav>
    </header>
  )
}
