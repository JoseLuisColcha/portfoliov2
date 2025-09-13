import { ReactLenis } from 'lenis/react'
import { useState } from 'react'
import { Toaster } from 'react-hot-toast'
import { AboutMe } from './components/AboutMe'
import { Contact } from './components/Contact'
import { Experience } from './components/Experience'
import { Footer } from './components/Footer'
import { HeroSection } from './components/HeroSection'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'
import { useLenisGSAP } from './hooks/useLenisGSAP'
import { LoaderPage } from './pages/LoaderPage'
import { Navbar } from './components/Navbar'

function App() {
  const { lenisRef } = useLenisGSAP()
  const [loading, setLoading] = useState(true)

  return (
    <ReactLenis root options={{ autoRaf: false }} ref={lenisRef}>
      {loading && <LoaderPage setLoading={setLoading} />}

      {!loading && (
        <main className="relative min-h-screen px-[3vw] sm:px-[10vw] md:px-[11vw] lg:px-[12.8vw] flex-center flex-col overflow-hidden gap-[15vw] md:gap-[9vw]">
          <Navbar />
          <HeroSection />
          <AboutMe />
          <Experience />
          <Projects />
          <Skills />
          <Contact />
          <Footer />

          <Toaster position="top-center" reverseOrder={false} />
        </main>
      )}
    </ReactLenis>
  )
}

export default App
