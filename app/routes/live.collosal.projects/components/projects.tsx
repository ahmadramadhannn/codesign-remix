import { For } from "~/components"
import { ProjectCard } from "."
import { projects } from "../lib"

export function Projects() {
  return (
    <div className="grid grid-cols-2 gap-x-8 gap-y-16">
      <For each={projects}>
        {(project, index) =>
          <ProjectCard key={index} project={project} />
        }
      </For>

    </div>
  )
}
