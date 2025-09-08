export const PrimaryButton = ({ href, className, valuesPolygon, title }) => {
  return (
    <a
      href={href}
      className={`bg-brand font-inter text-xs text-btn-txt text-center cursor-pointer hover:bg-brand-red hover:text-white transition-colors duration-300 ${className}`}
      style={{
        clipPath: `polygon(${valuesPolygon})`,
      }}
    >
      {title}
    </a>
  )
}
