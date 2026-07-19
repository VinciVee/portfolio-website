import ImageStack from "./ImageStack"

function ProjectCard({id, name, url, description, images, techStack}) {

  return (
    <article id={id} className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-6">
      {/* Left Column: Timeframe */}
      <header>
        <a href={url} className="font-light text-base text-text/80">{name}</a>
      </header>

      {/* Right Column: Content */}
      <div className="flex flex-col justify-between gap-0">
        {/* Image Stack */}
        <ImageStack name={name} images={images} />

        {/* Project Description */}
        <p>{description}</p>

        {/* Tech Stack */}
        <ul className="flex flex-wrap gap-4" aria-label="Tech stack used">
          {techStack.map((tech) => (
            <li><span>{tech}</span></li>
          ))}
        </ul>
      </div>
    </article>
  )
}

export default ProjectCard
