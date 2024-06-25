import { Skeleton } from "~/routes/live.collosal.projects/components";
import { Project } from "~/routes/live.collosal.projects/types";
import { ProjectDetailInfo } from "./project-detail-info";

export function ProjectDetail({ project }: { project: Project }) {
  return (
    <div className="border-t border-b border-white/10 p-10">
      <div className="mt-14 mb-14 grid grid-cols-2 gap-10 items-center">
        <Skeleton appType={project.appType} />
        <div className="grid gap-14">
          <p className="font-medium text-base text-white/60 leading-relaxed">
            Something has always existed. According to physics, there can never be true physical nothingness—though there can be times when existence resembles nothing.
          </p>

          <div className="grid gap-7">
            <ProjectDetailInfo label="category" value={project.category} />
            <ProjectDetailInfo label="client" value={project.client} />
            <ProjectDetailInfo label="technology" value={project.technology} />
          </div>
        </div>
      </div>
    </div>
  )
}
