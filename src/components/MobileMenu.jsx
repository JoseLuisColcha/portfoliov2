import { AiOutlineMenu } from 'react-icons/ai'
import { RxCross1 } from 'react-icons/rx'
import { useState } from 'react'

export const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false)

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
    {
      url: '#contacto',
      text: 'CONTACTO',
    },
  ]

  return (
    <>
      {isOpen ? (
        <RxCross1
          className="size-8 cursor-pointer lg:hidden absolute right-0 hover:text-brand hover:rotate-90 transition-all duration-300 z-60"
          onClick={() => setIsOpen(false)}
        />
      ) : (
        <AiOutlineMenu
          className="text-white size-8 lg:hidden flex absolute right-0 cursor-pointer hover:text-brand hover:-rotate-y-180 transition-all duration-400 z-60"
          onClick={() => setIsOpen(true)}
        />
      )}

      <div
        className={`fixed top-16 right-0 h-full w-60 sm:w-90 bg-black shadow-lg transform transition-transform duration-300 z-50 lg:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div>
          <ul className="flex flex-col mt-8 space-y-6  font-inter text-xs sm:text-base px-11">
            {MENU_OPTIONS.map((menuOption, index) => (
              <li key={index}>
                <a
                  href={menuOption.url}
                  className="hover:text-brand transition-all transition-duration-300"
                >
                  {menuOption.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}
