//

function ProjectCard({id, name, url, description, images, techStack}) {
  const imageArray = Object.entries(images)
  const totalImages = imageArray.length
  const fibonacciSpacing = [0,16,32,48,80,128] // fibonacci sequeen multiplied by 16px

  return (
    <article id={id} className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-2">
      {/* Left Column: Timeframe */}
      <div>
        <header className="pe-4 overflow-hidden">
          <a href={url} className="font-light text-base text-text/80">{name}</a>
        </header>
      </div>

      {/* Right Column: Content */}
      <div>

        {/* Image Stack */}
        <div className="flex items-center isolate h-38 pl-16 w-fit overflow-hidden">
          {Object.entries(images).map(([key, value], index) => (
            <img
              key={key}
              src={value}
              alt={`${name} ${key} screenshot`}
              style={{
                left: fibonacciSpacing[index],
                zIndex: totalImages-index
              }}
              className="h-fit w-58 object-cover -ml-16 drop-shadow-lg"
            />
          ))}
        </div>

        <p>{description}</p>

        {/* Tech Stack */}
        <ul className="flex flex-wrap gap-0" aria-label="Tech stack used">
          {techStack.map((tech) => (
            <li><span>{tech}</span></li>
          ))}
        </ul>

      </div>
    </article>
  )
}

export default ProjectCard
