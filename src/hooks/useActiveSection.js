import { useEffect, useState } from 'react'

export const useActiveSection = () => {
  const [activeSection, setActiveSection] = useState('inicio')

  useEffect(() => {
    const sections = document.querySelectorAll('main section')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      {
        threshold: 0,
        rootMargin: '-50% 0px -50% 0px',
      }
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return { activeSection }
}
