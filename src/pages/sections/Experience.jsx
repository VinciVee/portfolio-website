import ExperienceCard from "../../components/features/card/ExperienceCard"
import { educationContent } from "../../content/education"
import { experienceContent } from "../../content/experience"

function Experience() {
  return (
    <>
      <h3 className="lg:hidden">Experience</h3>
      <ul className="flex flex-col gap-6">
        {/* Education */}
        {educationContent.map((course) => (
          <li key={`course-${course.id}`}>
            <ExperienceCard
              id = {`course-${course.id}`}
              timeframe = {course.timeframe}
              title = {course.courseName}
              subtitle = {course.institute}
              description = {course.description}
              tags = {course.tags}
            />
          </li>
        ))}

        {/* Work Experience */}
        {experienceContent.map((role) => (
          <li key={`role-${role.id}`}>
            <ExperienceCard
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
