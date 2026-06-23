import CardExperience from "../components/features/card/CardExperience"
import { educationContent } from "../content/education"
import { experienceContent } from "../content/experience"

function Experience() {
  return (
    <>
      <h3>Experience</h3>
      {/* Education */}
      <div>
        {educationContent.map((course) => (
          <CardExperience
            key = {course.id}
            id = {`edu-${course.id}`}
            timeframe = {course.timeframe}
            title = {course.courseName}
            subtitle = {course.institute}
            description = {course.description}
            tags = {course.tags}
          />
        ))}
      </div>

      {/* Work Experience */}
      <div>
        {experienceContent.map((item) => (
          <CardExperience
            key = {item.id}
            timeframe = {item.timeframe}
            title = {item.role}
            subtitle = {item.company}
            description = {item.description}
            tags = {item.tags}
          />
        ))}
      </div>
    </>
  )
}

export default Experience
