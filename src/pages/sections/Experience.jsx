import ExperienceCard from "../../components/features/card/ExperienceCard"
import { educationContent } from "../../content/education"
import { experienceContent } from "../../content/experience"
import { HiMiniArrowUpRight } from "react-icons/hi2"

function Experience() {
  return (
    <>
      <h3 className="lg:hidden">Experience</h3>
      <ul className="flex flex-col gap-6 mb-10">
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

      {/* PDF Link */}
      <a
        href="/resume.pdf"
        download="Vincent_Veerapen_Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="group hover:underline underline-offset-4">
        <strong>
          View Full Resumé <HiMiniArrowUpRight className="pb-0.5 inline size-4.5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform ease-out duration-200"/>
        </strong>
      </a>
    </>
  )
}

export default Experience
