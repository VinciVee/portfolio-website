import ImageStack from "./ImageStack"

function ProjectCard({id, name, url, subtitle, description, images, techStack}) {

  return (
    <article id={`project-${id}`} className="grid grid-flow-row auto-rows-min grid-cols-1 items-baseline md:grid-cols-[minmax(8.5em,1fr)_4fr] md:gap-6">
      {/* Left Column: Title and Link */}
      <header className="row-start-1 col-span-1">
        <a href={url} className="w-full">
          <span className="uppercase font-medium tracking-wider text-xs text-text/50">{name}</span>
        </a>
      </header>

      {/* Right Column */}
      <div className="col-span-1 md:col-start-2">
        {/* Subtitle */}
        <h5 className="mb-0">{subtitle}</h5>

        {/* Images and Tech Stack */}
        <div className="flex flex-row flex-wrap items-end md:gap-4 gap-0 bg-black/25 p-1 rounded-sm">
          <div className="w-full md:flex-[1_1_50%]">
            <ImageStack name={name} images={images} />
          </div>

          {/* Tech Stack */}
          <ul className="md:flex-[1_0_40%] w-max list-none flex justify-start items-start gap-4 md:flex-col md:justify-end md:items-end md:gap-0 py-1.5 pr-2 m-0" aria-label="Tech stack used">
            {techStack.map((tech) => (
              <li key={tech} className="text-xs font-mono tracking-wider text-white/60 text-nowrap">{tech}</li>
            ))}
          </ul>
        </div>

        {/* Description */}
        <p className="mt-2 text-justify w-fit">{description}</p>
      </div>
    </article>
  )
}

export default ProjectCard
