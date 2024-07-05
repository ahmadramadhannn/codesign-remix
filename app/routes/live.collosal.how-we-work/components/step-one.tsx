import { SectionBadge, PageTitle } from "~/routes/live.collosal/components"
import { DiscussIllustration } from "."

export function StepOne() {
  return (
    <div id="step-1" className="mx-auto grid items-center grid-cols-2 gap-28">
      <DiscussIllustration />
      <div className="flex flex-col gap-10">
        <div className="grid gap-3">
          <SectionBadge content="step 01" />
          <PageTitle title="Let's talk about your company's problem first" />
        </div>
        <p className="font-medium text-base text-white/40 leading-loose">
          After submitting the quote form, we will review the data, then we will contact you. You can discuss with our team regarding your problem and find a solution to that problem.
        </p>
        <p className="font-medium text-base text-white/40 leading-loose">
          In this step, you will discuss what application to build.
        </p>
      </div>
    </div>
  )
}
