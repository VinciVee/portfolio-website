//

// eslint-disable-next-line no-unused-vars
function CardExperience({id, timeframe, title, subtitle, description, tags}) {

  return (
    <article id={id} className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-4">
      {/* Left Column: Timeframe */}
      <header>
        <span>{timeframe}</span>
      </header>

      {/* Right Column: Content */}
      <div>
        <h3>{title}</h3>
        <strong>{subtitle}</strong>
        <p>{description}</p>
      </div>
    </article>
  )
}

export default CardExperience
