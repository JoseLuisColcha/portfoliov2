import { PrimaryButton } from './PrimaryButton'
import { SocialNetworks } from './SocialNetworks'
import { TitleSection } from './TitleSection'

export const Contact = () => {
  return (
    <div id='contacto' className="w-full col-center mb-[570px] md:mb-[480px]">
      <TitleSection title="CONTACTO" subtitle="HABLEMOS" />

      <SocialNetworks />
      <div className="bg-brand/10 font-inter border border-brand/15 backdrop-blur-sm px-8 py-12 w-[75vw] sm:w-[450px] mt-4">
        <h1 className=" text-2xl text-brand">Tu mensaje aquí!</h1>

        <form action="" className="flex flex-col gap-3 mt-4 ">
          <input type="text" placeholder="NOMBRE" className="input-style" />
          <input type="email" placeholder="EMAIL" className="input-style" />

          <textarea className="input-style pb-14" placeholder="MENSAJE" />

          <PrimaryButton
            href="#"
            className="py-[14px]"
            valuesPolygon="0 0, 95% 0, 100% 35%, 100% 100%, 5% 100%, 0% 65%"
            title="ENVIAR MENSAJE"
          />
        </form>
      </div>
    </div>
  )
}
