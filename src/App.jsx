import { AboutMe } from './components/Aboutme'
import { Experience } from './components/Experience'
import { HeroSection } from './components/HeroSection'
import { Navbar } from './components/Navbar'

function App() {
  return (
    <div className="min-h-screen px-[2vw] sm:px-[10vw] md:px-[11vw] lg:px-[12.8vw] flex-center flex-col overflow-hidden">
      <Navbar />
      <HeroSection />
      <AboutMe />
      <Experience />
    </div>
  )
}

export default App
