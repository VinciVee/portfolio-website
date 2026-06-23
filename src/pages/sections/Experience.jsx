import CardExperience from "../../components/features/card/CardExperience"
import { educationContent } from "../../content/education"
import { experienceContent } from "../../content/experience"

function Experience() {
  return (
    <>
      <h3>Experience</h3>
      {/* Education */}
      <ul>
        {educationContent.map((course) => (
          <li>
            <CardExperience
              key = {`course-${course.id}`}
              id = {`course-${course.id}`}
              timeframe = {course.timeframe}
              title = {course.courseName}
              subtitle = {course.institute}
              description = {course.description}
              tags = {course.tags}
            />
          </li>
        ))}
      </ul>

      {/* Work Experience */}
      <ul>
        {experienceContent.map((role) => (
          <li>
            <CardExperience
              key = {`role-${role.id}`}
              id = {`role-${role.id}`}
              timeframe = {role.timeframe}
              title = {role.role}
              subtitle = {role.company}
              description = {role.description}
              tags = {role.tags}
            />
          </li>
        ))}
      </ul>
    </>
  )
}

export default Experience
