import { useGSAP } from '@gsap/react'
import { MENU_OPTIONS } from '../constants/menuOptions'
import { MobileMenu } from './MobileMenu'
import { NavSVG } from './NavSVG'
import { PrimaryButton } from './PrimaryButton'
import gsap from 'gsap'

export const Navbar = () => {
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
          src="/icons/jlc-logo.svg"
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
            <ul className="header-item flex space-x-8 text-white font-inter text-xs">
              {MENU_OPTIONS.map((menuOption, index) => {
                if (menuOption.text !== 'CONTACTO') {
                  return (
                    <li key={index}>
                      <a
                        href={menuOption.url}
                        className="hover:text-brand transition-all duration-300"
                      >
                        {menuOption.text}
                      </a>
                    </li>
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
