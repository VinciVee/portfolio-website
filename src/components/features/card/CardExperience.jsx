//

// eslint-disable-next-line no-unused-vars
function CardExperience({id, timeframe, title, subtitle, description, tags}) {

  return (
    <article id={id} className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-2">
      {/* Left Column: Timeframe */}
      <header className="pe-4">
        <span>{timeframe}</span>
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

export default CardExperience
