//

function CardProject({id, name, url, description, images, techStack}) {

  return (
    <article id={id} className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-4">
      {/* Left Column: Timeframe */}
      <div>
        <header className="pe-4 overflow-hidden">
          <ul className="flex flex-wrap gap-2" aria-label="Tech stack used">
            {techStack.map((tech) => (
              <li><span>{tech}</span></li>
            ))}
          </ul>
        </header>
      </div>

      {/* Right Column: Content */}
      <div>
        <a href={url}>{name}</a>
        <div className="flex items-center isolate">
          {/* To do: Image Stack */}
        </div>
        <p>{description}</p>
      </div>
    </article>
  )
}

export default CardProject
