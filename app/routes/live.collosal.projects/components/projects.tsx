import { ProjectCard } from "."
import { projects } from "../lib"

export function Projects() {
  return (
    <div className="grid grid-cols-2 gap-x-8 gap-y-16">
      {projects.map((project) => (

        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  )
}
