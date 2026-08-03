//

// eslint-disable-next-line no-unused-vars
function ExperienceCard({id, timeframe, title, subtitle, description, tags}) {

  return (
    <article id={id} className="grid grid-flow-row auto-rows-min grid-cols-1 items-start md:items-baseline md:grid-cols-[minmax(8.5em,1fr)_4fr] md:gap-6">
      {/* Left Column: Timeframe */}
      <header className="row-start-1 col-span-1">
        <span className="uppercase font-medium tracking-wider text-xs text-text/50">{timeframe}</span>
      </header>

      {/* Right Column: Content */}
      <div className="col-span-1 md:col-start-2">
        <h4>{title}</h4>
        <h5>{subtitle}</h5>
        <p className="w-full">{description}</p>
      </div>
    </article>
  )
}

export default ExperienceCard
