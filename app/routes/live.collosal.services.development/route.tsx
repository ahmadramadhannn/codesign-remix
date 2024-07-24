import { BaseLayout } from "~/components";
import { PageTitle, SectionBadge } from "../live.collosal/components";
import { Faq, Features, Overview } from "./components";

export default function Page() {
  return (
    <BaseLayout>
      <div className="grid gap-14 place-items-center">
        <div className="text-center">
          <SectionBadge content="development" />
          <div className="w-[45%] mx-auto">
            <PageTitle title="Solve your company's repetitive problems by designing apps" />
          </div>
        </div>

        <div className="w-full h-[1px] bg-white/10"></div>
        <Overview />
        <Features />
        <Faq />
      </div>
    </BaseLayout>
  )
}
