import { MobileMenu } from './MobileMenu'

export const Navbar = () => {
  const MENU_OPTIONS = [
    {
      url: '#inicio',
      text: 'INICIO',
    },
    {
      url: '#sobre-mi',
      text: 'SOBRE MI',
    },
    {
      url: '#habilidades',
      text: 'HABILIDADES',
    },
    {
      url: '#proyectos',
      text: 'PROYECTOS',
    },
  ]

  return (
    <nav className="fixed top-4 inset-x-[10vw] sm:inset-x-[10vw] md:inset-x-[11vw] lg:inset-x-[12.8vw] h-12 z-50">
      {/* LOGO */}
      <div className="absolute left-0 h-full w-[70px] flex-center">
        <img src="/icons/jlc-logo.svg" alt="logotipo" />
      </div>

      <MobileMenu />

      {/* MENU DESKTOP */}
      <section className="hidden lg:flex justify-center items-center h-full w-full relative">
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

          <svg
            width="100%"
            height="100%"
            viewBox="0 0 2118 205"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d_0_1)">
              <path
                d="M2032.5 1H5V136L93.5 204H2122V73L2032.5 1Z"
                fill="white"
                fillOpacity="0.2"
              />
              <path
                d="M2032.5 1H5V136L93.5 204H2122V73L2032.5 1Z"
                stroke="url(#paint0_linear_0_1)"
                strokeWidth="3"
              />
            </g>
            <defs>
              <linearGradient
                id="paint0_linear_0_1"
                x1="5"
                y1="102.5"
                x2="2122"
                y2="102.5"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#B6B1A0" />
                <stop offset="0.315" stopColor="#8B8983" />
                <stop offset="0.54" stopColor="#424242" />
                <stop offset="1" stopColor="#B6B1A0" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* CTA BUTTON */}
        <a href="#contacto" className="absolute right-0 h-full w-[123px]">
          <span className="font-inter text-xs text-btn-txt absolute inset-0 flex-center">
            CONTÁCTAME
          </span>
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 555 203"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d_0_1)">
              <path
                d="M464.916 0H4V135L97.5111 203H554V72L464.916 0Z"
                fill="#DAC5A7"
              />
              <path
                d="M464.916 0H4V135L97.5111 203H554V72L464.916 0Z"
                stroke="url(#paint0_linear_2929_1065)"
                strokeWidth="3"
              />
            </g>
            <defs>
              <linearGradient
                id="paint0_linear_2929_1065"
                x1="5"
                y1="102.5"
                x2="502"
                y2="102.5"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#B6B1A0" />
                <stop offset="0.315" stopColor="#8B8983" />
                <stop offset="0.54" stopColor="#424242" />
                <stop offset="1" stopColor="#B6B1A0" />
              </linearGradient>
            </defs>
          </svg>
        </a>
      </section>
    </nav>
  )
}
