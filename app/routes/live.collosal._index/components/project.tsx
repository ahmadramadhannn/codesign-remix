import { ProjectCard } from "~/routes/live.collosal.projects/components";
import { Project as ProjectType } from "~/routes/live.collosal.projects/types";
import { SectionBadge, SectionTitle } from "~/routes/live.collosal/components";

export function Project() {
  const projects: ProjectType[] = [
    { id: 1, title: "The Mobile App Landing Page", description: "A landing page for mobile app", appType: "mobile", client: "steam", technology: "flutter", category: "Development" },
    { id: 2, title: "The Desktop App Landing Page", description: "A landing page for desktop app", appType: "desktop", client: "EA", technology: "csharp", category: "Development" }
  ]
  return (
    <div className="flex flex-col gap-24">
      <div className="w-3/6 mx-auto grid gap-5 text-center place-content-center">
        <SectionBadge content="projects" />
        <SectionTitle title="We have completed many amazing projects that you will not believe" />
      </div>
      <div className="grid grid-cols-2 gap-9">
        {projects.map((project, index) => (
          <ProjectCard project={project} key={index} />
        ))}
      </div>
    </div>
  )
}
