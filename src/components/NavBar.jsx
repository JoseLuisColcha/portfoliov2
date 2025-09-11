import { LINKS_OPTIONS } from '../constants/linksOptions'
import { MobileMenu } from './MobileMenu'
import { NavSVG } from './NavSVG'
import { PrimaryButton } from './PrimaryButton'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useAnimatedLink } from '../hooks/useAnimatedLink'
import { useActiveSection } from '../hooks/useActiveSection'

export const Navbar = () => {
  const { handleMouseEnter, handleMouseLeave } = useAnimatedLink()
  const { activeSection } = useActiveSection()

  useGSAP(() => {
    const isFirefox = navigator.userAgent.toLowerCase().includes('firefox')

    gsap.from('.header', {
      y: -50,
      opacity: 0,
      ...(isFirefox ? {} : { filter: 'blur(30px)' }),
      duration: 1.5,
      ease: 'power4.out',
    })

    if (isFirefox) {
      gsap.from('.header-item', {
        filter: 'blur(30px)',
        duration: 1.5,
        ease: 'power4.out',
      })
    }
  }, [])

  return (
    <header className="header fixed top-4 inset-x-[3vw] h-12 z-40">
      {/* LOGO */}
      <a
        href="/"
        className="header-item absolute left-0 h-full w-[60px] sm:w-[70px] flex-center z-40"
      >
        <img
          src="/images/jlc-logo.svg"
          alt="logotipo"
          loading="eager"
          fetchPriority="high"
          className="cursor-pointer"
        />
      </a>

      <MobileMenu />

      {/* MENU DESKTOP */}
      <nav className="hidden lg:flex justify-center items-center h-full w-full relative">
        {/* LINKS */}
        <div className="relative h-full w-[500px] ">
          <div className="absolute flex justify-around items-center inset-0 ">
            <ul
              id="desktop-navbar-links"
              className="header-item flex space-x-8 text-white font-inter text-xs"
            >
              {LINKS_OPTIONS.map((link) => {
                if (link.label !== 'CONTACTO') {
                  return (
                    <a
                      key={link.id}
                      href={`#${link.id}`}
                      className={`hover:text-brand transition-all duration-300 overflow-hidden h-[23px] ${
                        activeSection === link.id
                          ? 'text-brand font-semibold'
                          : 'text-white'
                      }`}
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    >
                      <div className="text-wrapper flex flex-col">
                        <span className="text-center h-[23px] flex-center">
                          {link.label}
                        </span>
                        <span className="text-center h-[23px] flex-center">
                          {link.label}
                        </span>
                      </div>
                    </a>
                  )
                }
              })}
            </ul>
          </div>

          <NavSVG />
        </div>

        <PrimaryButton />
      </nav>
    </header>
  )
}
