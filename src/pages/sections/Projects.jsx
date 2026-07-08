import { projectsContent } from '../../content/projects'
import CardProject from "../../components/features/card/CardProject"


function Projects() {
  return (
    <>
      <h3>Projects</h3>

      <ul className="flex flex-col gap-6">
        {projectsContent.map((project) => (
          <li key={`project-${project.id}`}>
            <CardProject
              id = {`project-${project.id}`}
              name = {project.name}
              url = {project.url}
              description = {project.description}
              images = {project.images}
              techStack= {project.techStack}
            />
          </li>
        ))}
      </ul>
    </>
  )
}

export default Projects
