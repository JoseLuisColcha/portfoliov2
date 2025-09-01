import { HeroSection } from './components/HeroSection'
import { NavBar } from './components/NavBar'

function App() {
  return (
    <div className="h-screen mx-[10vw] sm:mx-[10vw] md:mx-[11vw] lg:mx-[12.8vw] flex-center ">
      <NavBar />
      <HeroSection />
    </div>
  )
}

export default App
