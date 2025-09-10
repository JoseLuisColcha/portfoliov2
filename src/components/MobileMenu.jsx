import { AiOutlineMenu } from 'react-icons/ai'
import { RxCross1 } from 'react-icons/rx'
import { useState } from 'react'
import { LINKS_OPTIONS } from '../constants/linksOptions'

export const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleClickMenu = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen)
  }

  return (
    <div className="header-item">
      {isOpen ? (
        <RxCross1
          className="size-7 sm:size-8 cursor-pointer lg:hidden absolute right-0 hover:text-brand hover:rotate-90 transition-all duration-300 z-60"
          onClick={handleClickMenu}
        />
      ) : (
        <AiOutlineMenu
          className="text-white size-7 sm:size-8 lg:hidden flex absolute right-0 cursor-pointer hover:text-brand hover:-rotate-y-180 transition-all duration-400 z-60"
          onClick={handleClickMenu}
        />
      )}

      <div
        className={`fixed top-16 right-0 h-screen w-60 sm:w-90 bg-black shadow-lg transform transition-transform duration-300 z-50 lg:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div>
          <ul className="flex flex-col mt-8 space-y-6  font-inter text-xs sm:text-base px-11">
            {LINKS_OPTIONS.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className="hover:text-brand transition-all transition-duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
