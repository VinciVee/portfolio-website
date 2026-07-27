import { projectsContent } from '../../content/projects'
import ProjectCard from "../../components/features/card/ProjectCard"


function Projects() {
  return (
    <>
      <h3>Projects</h3>

      <ul className="flex flex-col gap-12">
        {projectsContent.map((project) => (
          <li key={`project-${project.id}`}>
            <ProjectCard
              id = {`project-${project.id}`}
              name = {project.name}
              url = {project.url}
              subtitle = {project.subtitle}
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
