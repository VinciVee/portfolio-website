import ImageStack from "./ImageStack"

function ProjectCard({id, name, url, subtitle, description, images, techStack}) {

  return (
    <article id={`project-${id}`} className="grid grid-flow-row auto-rows-min grid-cols-1 items-start md:items-baseline md:grid-cols-[minmax(10em,1fr)_5fr] md:gap-6">
      {/* Left Column */}
      <header className="row-start-1 col-span-1">
        <span className="uppercase font-light text-xs text-text/70">{Number(id)+1}.</span>
      </header>

      {/* Right Column */}
      <div className="col-span-1 md:col-start-2">
        {/* Title and Link */}
        <a href={url} className="w-full">
          <h5 className="mb-0">{name}</h5>
        </a>

        {/* Image and Tech Stack */}
        <div className="flex flex-row flex-wrap items-end md:gap-4 gap-0 bg-black/25 p-1 rounded-sm">
          <div className="w-full md:flex-[1_1_50%]">
            <ImageStack name={name} images={images} />
          </div>

          {/* Tech Stack */}
          <ul className="md:flex-[1_0_40%] w-max list-none flex justify-start items-start gap-4 md:flex-col md:justify-end md:items-end md:gap-0 py-1.5 pr-2 m-0" aria-label="Tech stack used">
            {techStack.map((tech) => (
              <li
                key={tech}
                className="text-xs font-mono tracking-wider text-white/60 text-nowrap"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>

        {/* Description */}
        <p className="mb-4 text-justify w-fit">{description}</p>
      </div>
    </article>
  )
}

export default ProjectCard
