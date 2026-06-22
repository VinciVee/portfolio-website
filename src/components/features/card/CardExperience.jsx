//

// eslint-disable-next-line no-unused-vars
function CardExperience({timeframe, title, subtitle, description, tags}) {

  return (
    <div>
      {/* Left Column: Timeframe */}
      <div>
        <span>{timeframe}</span>
      </div>

      {/* Right Column: Content */}
      <div>
        <h3>{title}</h3>
        <strong>{subtitle}</strong>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default CardExperience
