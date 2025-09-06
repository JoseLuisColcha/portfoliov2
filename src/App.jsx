import { AboutMe } from './components/Aboutme'
import { Contact } from './components/Contact'
import { Experience } from './components/Experience'
import { HeroSection } from './components/HeroSection'
import { Navbar } from './components/Navbar'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'
import { TitleSection } from './components/TitleSection'

function App() {
  return (
    <div className="min-h-screen px-[2vw] sm:px-[10vw] md:px-[11vw] lg:px-[12.8vw] flex-center flex-col overflow-hidden">
      <Navbar />
      <HeroSection />
      <AboutMe />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
      <TitleSection title="CONTACTO" subtitle="HABLEMOS" />
    </div>
  )
}

export default App
