import { SectionBadge, SectionTitle } from "~/routes/live.collosal/components"

export const StepTwo = () => {
  return (
    <div className="grid grid-cols-2 gap-28">
      <div className="flex flex-col gap-10">
        <div className="grid gap-3">
          <SectionBadge content="step 02" />
          <SectionTitle title="Doing planning, design and development until everything is finished" />
        </div>
        <p className="font-medium text-base text-white/40 leading-loose">When everything is agreed upon, our team will make plans related to the application that will be created. Starting from analysis, design, to development.</p>
        <p className="font-medium text-base text-white/40 leading-loose">
          In this step, the application is 100% complete.
        </p>
      </div>
      <div>
        <img src="/collosal/development-illustration.svg" />
      </div>
    </div>
  )
}
