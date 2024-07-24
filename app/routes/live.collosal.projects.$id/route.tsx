import { LoaderFunctionArgs } from "@remix-run/node"
import { useLoaderData, isRouteErrorResponse, useRouteError } from "@remix-run/react"
import { getProject, projects } from "../live.collosal.projects/lib";
import { Button, PageTitle, SectionBadge } from "../live.collosal/components";
import { ProjectCard } from "../live.collosal.projects/components";
import { ProjectDetail } from "./components";

// TODO: handling different cases
export const loader = ({ params }: LoaderFunctionArgs) => {
  const project = getProject(Number(params.id))

  if (!project) {
    throw new Response("Not Found", { status: 404 })
  }

  return project
}

export default function Page() {
  const project = useLoaderData<typeof loader>();
  return (
    <div className="grid gap-20">
      <div className="grid gap-4 place-content-center text-center">
        <SectionBadge content="project detail" />
        <div className="w-10/12 mx-auto">
          <PageTitle title="The Desktop App Landing Page" />
        </div>
      </div>
      <ProjectDetail project={project} />

      <div className="grid gap-10">
        <div className="grid gap-4 place-content-center place-items-center">
          <SectionBadge content="projects" />
          <PageTitle title="Other Amazing Projects" />
        </div>
        <div className="grid grid-cols-2 gap-6">
          {projects.slice(0, 2).map((project) => (

            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  )
}

export function ErrorBoundary() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    switch (error.status) {
      case 404: {
        return (
          <div className="grid gap-4">
            <h1>Project not found</h1>
            <div className="w-max">
              <Button type="secondary" content="Back to Projects" link href=".." />
            </div>
          </div>
        )
      }
    }
  } else if (error instanceof Error) {
    return (
      <div>
        <h1>Error</h1>
        <p>{error.message}</p>
        <p>The stack trace is:</p>
        <pre>{error.stack}</pre>
      </div>
    );
  } else {
    return <h1>Unkown Error</h1>
  }
}
