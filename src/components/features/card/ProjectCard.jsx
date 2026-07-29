import ImageStack from "./ImageStack"

function ProjectCard({id, name, url, subtitle, description, images, techStack}) {

  return (
    <article id={id} className="grid grid-cols-1 md:grid-cols-[1fr_4fr]">
      {/* Left Column: Timeframe */}
      <header className="shrink-0 basis-1/5 w-35.5 pe-4">
        <a href={url}><h5>{name}</h5></a>
      </header>

      {/* Right Column: Content */}
      <div>
        {/* Image Stack */}
        <div className="float-right ml-8 mb-2">
          <ImageStack name={name} images={images} />
        </div>

        {/* Project Title and Description */}
        <p className="mb-4 text-justify">{description}</p>

        {/* Tech Stack */}
        <ul className="list-none flex flex-wrap justify-start gap-2" aria-label="Tech stack used">
          {techStack.map((tech) => (
            <li
              key={tech}
              className="px-3 py-1 bg-black/50 rounded-full font-normal text-sm text-text/80 text-nowrap">
              {tech}
            </li>
          ))}
        </ul>

      </div>
    </article>
  )
}

export default ProjectCard
