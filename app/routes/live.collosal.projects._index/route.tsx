import { Projects } from "../live.collosal.projects/components";
import { Button, PageTitle, SectionBadge } from "../live.collosal/components";

export default function Page() {
  return (
    <div className="grid gap-20">
      <div className="grid grid-cols-2 items-center gap-10">
        <div className="flex flex-col gap-4">
          <SectionBadge content="projects" />
          <PageTitle title="We have completed many amazing projects that you will not believe" />
        </div>
        <div className="relative grid place-content-end">
          <button className="text-white/40 w-[174px] text-start px-4 py-2 border border-white/10 font-normal text-base">
            Technology
          </button>
          <div className="w-2 h-2 absolute rotate-45 border-b border-r border-white/40 right-5 translate-y-4"></div>
        </div>
      </div>

      <div className="w-full border border-white/10"></div>

      <Projects />

      <div className="grid place-content-center mt-4">

        <Button type="secondary" content="Load More" />

      </div>
    </div>
  )
}
