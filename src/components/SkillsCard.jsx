export const SkillsCard = ({ title, skills }) => {
  return (
    <div className="bg-brand/10 font-inter border border-brand/15 backdrop-blur-sm p-8 space-y-6">
      <h4 className="text-[18px]">{title}</h4>

      <section className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center font-inter">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="text-center flex flex-col items-center gap-3"
          >
            <div className="text-5xl text-brand icon-hover">{skill.icon}</div>
            <h6 className="text-[14px] sm:text-[17px] text-white/80">{skill.title}</h6>
          </div>
        ))}
      </section>
    </div>
  )
}
