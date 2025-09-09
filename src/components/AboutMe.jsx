import { TitleSection } from './TitleSection'


export const AboutMe = () => {

  return (
    <div id="sobre-mi" className="col-center">
      <TitleSection title="ACERCA DE MI" subtitle="TRAYECTORIA" />

      <p className="font-inter px-10 sm:px-10 md:px-20 lg:px-40 text-start text-sm sm:text-base">
        Soy un apasionado por la tecnología y el diseño, graduado en Desarrollo
        de Software en la EPN, tras mis estudios, comencé mi camino como
        freelance, donde aprendí a gestionar proyectos de principio a fin y a
        trabajar de forma autónoma.Me enfoqué en el Frontend y en el diseño
        UI/UX, ya que disfruto crear interfaces intuitivas que generen una
        experiencia agradable al usuario.Si bien manejo Backend y desarrollo
        full stack, me identifico más con el Frontend, porque me permite unir mi
        lado técnico con mi lado creativo.
      </p>
    </div>
  )
}
