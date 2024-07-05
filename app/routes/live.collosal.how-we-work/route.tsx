import { BaseLayout } from "~/components";
import { PageTitle, SectionBadge } from "../live.collosal/components";
import { Workflow } from "./components";

export default function Page() {
  return (
    <BaseLayout>
      <div className="grid gap-20">
        <div className="grid gap-2 place-content-center place-items-center text-center">
          <SectionBadge content="how we work" />
          <div className="w-[45%] mx-auto">
            <PageTitle title="We have a workflow that allows the job to be delivered well" />
          </div>
        </div>
        <div className="border border-white/10"></div>

        <Workflow />
      </div>
    </BaseLayout>
  )
}
