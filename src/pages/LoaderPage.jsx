// Loader.jsx
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import DrawSVGPlugin from 'gsap/DrawSVGPlugin'
import { useRef } from 'react'
import { LogoSVG } from '../components/LogoSVG'

gsap.registerPlugin(DrawSVGPlugin)

export const LoaderPage = ({ setLoading }) => {
  const loaderRef = useRef(null)

  useGSAP(
    () => {
      gsap.set('.strokes', {
        drawSVG: '0%',
        stroke: '#F2F2F2',
      })

      const svgTimeline = gsap.timeline({
        defaults: { ease: 'none' },
      })

      svgTimeline.timeScale(1.5)

      svgTimeline
        .to('#path-j', {
          drawSVG: '100%',
          ease: 'sine.inOut',
          duration: 0.8,
        })
        .to('#path-l', {
          drawSVG: '100%',
          ease: 'sine.inOut',
          duration: 0.8,
        })
        .to('#path-c', {
          drawSVG: '100%',
          ease: 'sine.in',
          duration: 0.8,
        })

      svgTimeline.to(loaderRef.current, {
        y: '-100%',
        duration: 1,
        ease: 'power4.inOut',
        onComplete: () => setLoading(false),
      })
    },
    { dependencies: [setLoading], scope: loaderRef }
  )

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 bg-black flex items-center justify-center"
    >
      <LogoSVG />
    </div>
  )
}
