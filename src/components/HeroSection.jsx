import { SecondaryButtonSVG } from './SecondaryButtonSVG'

export const HeroSection = () => {
  return (
    <div id="inicio" className="w-full h-screen relative">
      {/* HERO IMAGEN */}
      <div className="absolute inset-x-0 sm:bottom-15 top-20 md:bottom-0 flex justify-center z-10">
        <img
          className="object-contain w-[360px] sm:w-[360px] md:w-[400px]"
          src="/images/profile-photo-desktop.webp"
          srcSet="
    /images/profile-photo-mobile.webp 360w,
    /images/profile-photo-desktop.webp 400w    
  "
          sizes="(max-width: 640px) 360px, 400px"
          alt="una imagen de un hombre con lentes"
          loading="eager"
          fetchPriority="high"
        />
      </div>

      <div className="absolute bottom-0 space-y-6 z-20 inset-x-[8.4vw] sm:inset-x-0 md:inset-x-0">
        {/* DESCRIPTION */}
        <section className="max-w-full sm:max-w-[40%] md:max-w-[40%] lg:max-w-[40%] space-y-3 mx-auto sm:mx-0">
          <p className="font-inter text-sm sm:text-base text-left">
            Hola, soy José Luis Colcha. Me especializo en desarrollar
            aplicaciones web modernas, con un enfoque en ofrecer una excelente
            experiencia de usuario y diseños visuales atractivos.
          </p>

          <SecondaryButtonSVG />
        </section>

        {/* TITLE SECTION */}
        <section className="flex flex-col mb-4">
          <span className="font-druk text-center text-[14.9vw]/[12vw] sm:text-[15.2vw]/[12vw] md:text-[14.9vw]/[12vw] lg:text-[14.3vw]/[12vw] text-brand">
            DESARROLLADOR DE SOFTWARE
          </span>
          <span className="font-free-script text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-brand-red flex justify-end">
            & DISEÑADOR UI/UX
          </span>
        </section>
      </div>
    </div>
  )
}
