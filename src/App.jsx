import { AboutMe } from './components/Aboutme'
import { Contact } from './components/Contact'
import { Experience } from './components/Experience'
import { Footer } from './components/Footer'
import { HeroSection } from './components/HeroSection'
import { Navbar } from './components/Navbar'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'
import { Toaster } from 'react-hot-toast'
import { ReactLenis } from 'lenis/react'
import { useLenisGSAP } from './hooks/useLenisGSAP'

function App() {
  const { lenisRef } = useLenisGSAP()

  return (
    <>
      <ReactLenis root options={{ autoRaf: false }} ref={lenisRef} />
      <div className="relative min-h-screen px-[2vw] sm:px-[10vw] md:px-[11vw] lg:px-[12.8vw] flex-center flex-col overflow-hidden">
        <Navbar />
        <HeroSection />
        <AboutMe />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
        <Footer />

        <Toaster position="top-center" reverseOrder={false} />
      </div>
    </>
  )
}

export default App
