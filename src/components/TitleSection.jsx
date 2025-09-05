export const TitleSection = ({ title, subtitle }) => {
  return (
    <div className="flex flex-col pt-50 pb-20">
      <span className="font-free-script text-2xl sm:text-[4vw] md:text-[3vw] lg:text-[2.4vw] text-brand-red">
        {subtitle}
      </span>
      <span className="font-druk text-[15vw]/[10vw] sm:text-[15vw]/[10vw] md:text-[12vw]/[9vw] text-brand text-center">
        {title}
      </span>
    </div>
  )
}
