//

// eslint-disable-next-line no-unused-vars
function ExperienceCard({id, timeframe, title, subtitle, description, tags}) {

  return (
    <article id={id} className="grid grid-cols-1 md:grid-cols-[1fr_3fr]">
      {/* Left Column: Timeframe */}
      <header className="shrink-0 w-35.5 basis-1/4 pe-4">
        <span className="font-light text-base text-text/80">{timeframe}</span>
      </header>

      {/* Right Column: Content */}
      <div>
        <h4>{title}</h4>
        <h5>{subtitle}</h5>
        <p>{description}</p>
      </div>
    </article>
  )
}

export default ExperienceCard
