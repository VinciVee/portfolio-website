import ImageStack from "./ImageStack"

function ProjectCard({id, name, url, description, images, techStack}) {

  return (
    <article id={id} className="grid grid-cols-1 md:grid-cols-[1fr_3fr]">
      {/* Left Column: Timeframe */}
      <header className="shrink-0 w-35.5 basis-1/4 pe-4">
        <a href={url} className="font-light text-base text-text/80">{name}</a>
      </header>

      {/* Right Column: Content */}
      <div className="flex flex-col justify-between basis-3/4">
        {/* Image Stack */}
        <ImageStack name={name} images={images} />

        {/* Project Description */}
        <h5 className="mb-0">{description}</h5>

        {/* Tech Stack */}
        <ul className="flex flex-wrap gap-4" aria-label="Tech stack used">
          {techStack.map((tech) => (
            <li><p>{tech}</p></li>
          ))}
        </ul>
      </div>
    </article>
  )
}

export default ProjectCard
