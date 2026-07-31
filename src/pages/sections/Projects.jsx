import { projectsContent } from '../../content/projects'
import ProjectCard from "../../components/features/card/ProjectCard"


function Projects() {
  return (
    <>
      <h3 className="lg:hidden">Projects</h3>

      <ul className="flex flex-col gap-8">
        {projectsContent.map((project) => (
          <li key={`project-${project.id}`}>
            <ProjectCard
              id = {project.id}
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
