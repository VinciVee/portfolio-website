import CardExperience from "../components/features/card/CardExperience"
import { experienceContent } from "../content/experience"
import { educationContent } from "../content/education"

function Experience() {
  return (
    <div>
      <h2>Education and Experience</h2>
      {/* Education */}
      <div>
        {educationContent.map((item) => {
          <CardExperience
            key = {item.id}
            timeframe = {item.timeframe}
            title = {item.course}
            subtitle = {item.institute}
            description = {item.description}
            tags = {item.tags}
          />
        })}
      </div>

      {/* Work Experience */}
      <div>
        {experienceContent.map((item) => {
          <CardExperience
            key = {item.id}
            timeframe = {item.timeframe}
            title = {item.role}
            subtitle = {item.company}
            description = {item.description}
            tags = {item.tags}
          />
        })}
      </div>
    </div>
  )
}

export default Experience
