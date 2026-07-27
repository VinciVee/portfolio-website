import ImageStack from "./ImageStack"

function ProjectCard({id, name, url, subtitle, description, images, techStack}) {

  return (
    <article id={id} className="grid grid-cols-1 md:grid-cols-[1fr_3fr]">
      {/* Left Column: Timeframe */}
      <header className="shrink-0 basis-1/4 pe-6">
        <a href={url}><p>{name}</p></a>
      </header>

      {/* Right Column: Content */}
      <div className="flex flex-col justify-between basis-3/4">
        {/* Image Stack */}
        <ImageStack name={name} images={images} />

        <div>
          {/* Project Description */}
          <span className="mb-0">
            {description} Built with{' '}
          </span>
          <ul className="inline list-none" aria-label="Tech stack used">
            {techStack.map((tech) => (
              <li
                key={tech}
                className="inline after:content-[',_'] last:after:content-['.']"
              >
                {tech}
              </li>
            ))}
          </ul>

          {/* Tech Stack */}
        </div>
      </div>
    </article>
  )
}

export default ProjectCard
