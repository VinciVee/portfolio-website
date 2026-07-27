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

        <div className="leading-5.5">
          {/* Project Description */}
          <span className="mb-0">
            {description} Built with{' '}
          </span>
          {/* Tech Stack */}
          <ul className="inline list-none last:after:content-['.']" aria-label="Tech stack used">
            {techStack.map((tech) => (
              <li
                key={tech}
                className="inline-block px-3 py-0 mr-1 my-0.5 bg-black/50 rounded-full"
              >
                {tech}
              </li>
            ))}
          </ul>
          <span className="-ml-1">.</span>

        </div>
      </div>
    </article>
  )
}

export default ProjectCard
