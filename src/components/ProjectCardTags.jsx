export const ProjectCardTags = ({ projectOptionTags }) => {
  return (
    <div className="flex flex-wrap content-start items-start gap-1.5 my-2">
      {projectOptionTags.map((tag, index) => (
        <span
          key={index}
          className="flex items-center border border-brand/20 backdrop-blur-sm bg-brand/1 px-2.5 h-6 text-xs font-medium text-brand"
        >
          {tag}
        </span>
      ))}
    </div>
  )
}
