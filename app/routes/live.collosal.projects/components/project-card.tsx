import { Link } from "@remix-run/react";
import { Project } from "../types";
import { Skeleton } from "./skeleton";


export function ProjectCard({ project }: { project: Project }) {
  return (
    <article>
      <div className="grid gap-12">
        <Skeleton appType={project.appType} />
        <div className="grid items-center place-items-center gap-5">
          <p className="font-bold text-xl">{project.title}</p>
          <p className="font-normal text-base text-white/60">{project.description}</p>
          <Link to={`/live/collosal/projects/${project.id}`} className="mt-6 rounded-xl border border-white text-center font-medium text-sm px-10 py-2">Detail</Link>
        </div>
      </div>
    </article>
  )
}
