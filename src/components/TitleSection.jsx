import { useTitleAnimation } from '../hooks/useTitleAnimation'

export const TitleSection = ({ title, subtitle }) => {
  const { containerRef, titleRef, subTitleRef } = useTitleAnimation()

  return (
    <div
      ref={containerRef}
      className="flex flex-col pt-[8vw] md:pt-[6vw] pb-[8vw] md:pb-[4vw]"
    >
      <span
        ref={subTitleRef}
        className="section-subtitle font-free-script text-2xl sm:text-[4vw] md:text-[3vw] lg:text-[2.4vw] text-brand-red"
      >
        {subtitle}
      </span>
      <span
        ref={titleRef}
        className="section-title font-druk text-[19vw]/[12vw] sm:text-[15vw]/[10vw] md:text-[12vw]/[9vw] text-brand text-center"
      >
        {title}
      </span>
    </div>
  )
}
