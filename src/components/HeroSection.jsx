export const HeroSection = () => {
  return (
    <div
      id="inicio"
      className="w-full h-screen relative"
    >
      <div className="absolute inset-x-0 sm:bottom-15 top-20 sm:top-0 md:bottom-0 flex justify-center z-10">
        <img
          className="object-contain w-[360px] sm:w-[360px] md:w-[400px]"
          src="/images/profile-photo.png"
          alt="una imagen de un hombre con lentes"
        />
      </div>

      <div className="absolute bottom-0 space-y-6 z-20 inset-x-[8.4vw] sm:inset-x-0 md:inset-x-0">
        <section className="max-w-full sm:max-w-[40%] md:max-w-[40%] lg:max-w-[40%] space-y-3 mx-auto sm:mx-0">
          <p className="font-inter text-sm sm:text-base text-left">
            Hola, soy José Luis Colcha. Me especializo en desarrollar
            aplicaciones web modernas, con un enfoque en ofrecer una excelente
            experiencia de usuario y diseños visuales atractivos.
          </p>

          <a href="#cv" className="flex justify-center sm:justify-start">
            <div className="relative h-12 w-32 sm:h-14 sm:w-36">
              <span className="font-inter text-xs sm:text-sm text-white absolute inset-0 flex items-center justify-center">
                DESCARGAR CV
              </span>

              <svg
                width="100%"
                height="100%"
                viewBox="0 0 555 203"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <path
                    d="M464.916 0H4V135L97.5111 203H554V72L464.916 0Z"
                    stroke="#DAC5A7"
                    strokeWidth="3"
                  />
                </g>
              </svg>
            </div>
          </a>
        </section>

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
