import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { LINKS_OPTIONS } from '../constants/linksOptions'
import { MobileMenu } from './MobileMenu'
import { NavLinkItem } from './NavLinkItem'
import { NavSVG } from './NavSVG'
import { PrimaryButton } from './PrimaryButton'

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
        className="header-item absolute left-0 h-full w-[40px] sm:w-[50px] md:w-[70px] flex-center z-40"
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
        <div className="relative h-full w-[500px] ">
          <div className="absolute flex justify-around items-center inset-0 ">
            <ul
              id="desktop-navbar-links"
              className="header-item flex space-x-8 text-white font-inter text-xs"
            >
              {LINKS_OPTIONS.map((link) => {
                if (link.label !== 'CONTACTO') {
                  return <NavLinkItem key={link.id} link={link} />
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
