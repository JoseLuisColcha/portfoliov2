import { useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { RxCross1 } from 'react-icons/rx'
import { LINKS_OPTIONS } from '../constants/linksOptions'
import { NavLinkItem } from './NavLinkItem'

export const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleClickMenu = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen)
  }

  return (
    <div className="header-item">
      {isOpen ? (
        <RxCross1
          className="mobile-nav-icon hover:rotate-90"
          onClick={handleClickMenu}
        />
      ) : (
        <AiOutlineMenu
          className="mobile-nav-icon hover:-rotate-y-180"
          onClick={handleClickMenu}
        />
      )}

      <div
        className={`fixed top-16 right-0 h-screen w-60 sm:w-90 bg-black shadow-lg transform transition-transform duration-300 z-50 lg:hidden ${
          isOpen ? 'translate-x-10' : 'translate-x-110'
        }`}
      >
        <div>
          <ul className="flex flex-col mt-8 space-y-6  font-inter text-xs sm:text-base px-11">
            {LINKS_OPTIONS.map((link) => (
              <NavLinkItem
                link={link}
                key={link.id}
                onClick={handleClickMenu}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
