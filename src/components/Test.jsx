import { useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

export default function Test() {
  const containerRef = useRef(null)

  useGSAP(() => {
    const ctx = gsap.context(() => {
      // Navbar
      gsap.from('.nav-item', {
        y: -30,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        stagger: 0.15,
      })

      // Hero title
      gsap.from('.hero-title span', {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: 'power4.out',
        stagger: 0.05,
        delay: 0.5,
      })

      // Paragraphs
      gsap.from('.hero-text', {
        y: 20,
        opacity: 0,
        duration: 1,
        ease: 'power2.out',
        stagger: 0.2,
        delay: 1,
      })

      // CTA button
      gsap.from('.cta-btn', {
        scale: 0.8,
        opacity: 0,
        duration: 0.8,
        ease: 'back.out(1.7)',
        delay: 1.5,
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={containerRef}
      className="min-h-screen flex flex-col bg-gray-950 text-white px-8"
    >
      {/* Navbar */}
      <nav className="flex justify-between items-center py-6">
        <div className="text-2xl font-bold nav-item">LOGO</div>
        <ul className="flex gap-6">
          <li className="nav-item cursor-pointer">Home</li>
          <li className="nav-item cursor-pointer">About</li>
          <li className="nav-item cursor-pointer">Services</li>
          <li className="nav-item cursor-pointer">Contact</li>
        </ul>
      </nav>

      {/* Hero content */}
      <div className="flex flex-col justify-center flex-1 max-w-3xl mx-auto text-center">
        <h1 className="hero-title text-6xl font-extrabold leading-tight">
          {`Transforma tus ideas`.split('').map((char, i) => (
            <span key={i} className="inline-block">
              {char}
            </span>
          ))}
        </h1>
        <p className="hero-text text-lg mt-6 opacity-80">
          Una plantilla genérica en React + GSAP para crear una sección hero con
          animaciones suaves y modernas.
        </p>
        <p className="hero-text text-lg opacity-80">
          Perfecta para destacar tu marca o producto con estilo.
        </p>

        <button className="cta-btn mt-8 px-6 py-3 bg-indigo-600 rounded-2xl text-lg font-semibold hover:bg-indigo-500 transition-colors">
          Get Started
        </button>
      </div>
    </section>
  )
}
