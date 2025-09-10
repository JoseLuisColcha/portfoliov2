export const TitleSection = ({ title, subtitle }) => {
  return (
    <div className="flex flex-col pt-[8vw] md:pt-[6vw] pb-[8vw] md:pb-[4vw]">
      <span className="font-free-script text-2xl sm:text-[4vw] md:text-[3vw] lg:text-[2.4vw] text-brand-red">
        {subtitle}
      </span>
      <span className="font-druk text-[19vw]/[12vw] sm:text-[15vw]/[10vw] md:text-[12vw]/[9vw] text-brand text-center">
        {title}
      </span>
    </div>
  )
}

// pt-[20vw] md:pt-[15vw]