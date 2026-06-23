//

function CardProject({id, name, url, description, images, techStack}) {

  return (
    <article id={id} className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-4">
      {/* Left Column: Timeframe */}
      <div>
        <header>
          <span>{name}</span>
        </header>
        <ul className="flex flex-wrap gap-2 mt-2" aria-label="Tech stack used">
          {techStack.map((tech) => (
            <li>{tech}</li>
          ))}
        </ul>
      </div>

      {/* Right Column: Content */}
      <div>
        <div className="flex items-center isolate">
          {/* To do: Image Stack */}
        </div>
        <p>{description}</p>
      </div>
    </article>
  )
}

export default CardProject
