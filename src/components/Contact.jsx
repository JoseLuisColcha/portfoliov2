import { SocialNetworks } from './SocialNetworks'
import { TitleSection } from './TitleSection'

export const Contact = () => {
  return (
    <div className="w-full col-center mb-[570px] md:mb-[480px]">
      <TitleSection title="CONTACTO" subtitle="HABLEMOS" />

      <SocialNetworks />
      <div className="bg-brand/10 font-inter border border-brand/15 backdrop-blur-sm px-8 py-12 w-[75vw] sm:w-[450px] mt-4">
        <h1 className=" text-2xl text-brand">Tu mensaje aquí!</h1>

        <form action="" className="flex flex-col gap-3 mt-4 ">
          <input type="text" placeholder="NOMBRE" className="input-style" />
          <input type="email" placeholder="EMAIL" className="input-style" />
          <textarea className="input-style pb-14" placeholder="MENSAJE" />
          <button className="bg-brand text-btn-txt py-2 text-xs hover:bg-brand-red hover:text-white transition-colors duration-300 ">
            ENVIAR MENSAJE
          </button>
        </form>
      </div>
    </div>
  )
}
