import { AboutMe } from './components/Aboutme'
import { HeroSection } from './components/HeroSection'
import { Navbar } from './components/Navbar'


function App() {
  return (
    <div className="min-h-screen px-[2vw] sm:px-[10vw] md:px-[11vw] lg:px-[12.8vw] flex-center flex-col space-y-50">
      <Navbar />
      <HeroSection />
      <AboutMe />
    </div>
  )
}

export default App
