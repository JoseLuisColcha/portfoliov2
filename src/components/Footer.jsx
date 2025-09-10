import { MdOutlineMail } from 'react-icons/md'
import { TbWorld } from 'react-icons/tb'
import { LINKS_OPTIONS } from '../constants/linksOptions'

export const Footer = () => {
  return (
    <footer className="absolute bottom-0 w-full py-20 md:py-17 grid grid-cols-1 md:grid-cols-3  md:place-items-start md:justify-items-center bg-brand/10 font-inter backdrop-blur-sm gap-5 md:gap-0">
      {/* NAVEGACION */}
      <section className="flex flex-col gap-1 md:gap-2 order-3 md:order-1 items-center md:items-start">
        <h6 className="text-[16px] mb-0 md:mb-2">NAVEGACIÓN</h6>

        {/* LINKS */}
        <div className="flex flex-col sm:flex-row md:flex-col gap-2 sm:gap-4 md:gap-2 text-[13px] text-brand ">
          {LINKS_OPTIONS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="hover:text-brand-red transition-colors duration-200 cursor-pointer "
            >
              {link.label}
            </a>
          ))}
        </div>
      </section>

      {/* LOGOTIPO */}
      <section className="flex flex-col items-center gap-1 order-1 md:order-2">
        <img
          src="/icons/jlc-logo.svg"
          alt="logotipo de la empresa"
          className="w-25 h-20"
        />

        <span className="text-[15px] text-brand">
          José Luis Colcha Developer &reg;
          {new Date().getFullYear()}
        </span>
      </section>

      {/* CONTACTO */}
      <section className="flex flex-col gap-1 md:gap-2 order-2 md:order-2 items-center  md:items-start">
        <h5 className="mb-0 md:mb-2">CONTACTO</h5>

        <div className="flex flex-col items-start gap-1">
          <div className="flex flex-row gap-1 items-center text-brand text-[15px] ">
            <MdOutlineMail className="size-5" />
            <h6 className="">jose.colcha@outlook.es</h6>
          </div>

          <div className="flex flex-row gap-1 items-center text-brand text-[15px] ">
            <TbWorld className="size-5" />
            <h6>www.miportfolio.com</h6>
          </div>
        </div>
      </section>
    </footer>
  )
}
