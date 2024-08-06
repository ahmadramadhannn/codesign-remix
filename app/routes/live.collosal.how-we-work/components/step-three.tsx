import { SectionBadge, SectionTitle } from "~/routes/live.collosal/components";

export function StepThree() {
  return (
    <div className="grid grid-cols-2 gap-28">
      <div>
        <img src="/collosal/step-three-illustration.svg" />
      </div>
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-3">
          <SectionBadge content="step 03" />
          <SectionTitle title="The project is complete and we ship all the project assets, and access to the server" />
        </div>
        <p className="font-medium text-base text-white/40">We will be responsible for delivering all the project assets to you, don't worry. These assets include, design files, source code, server access, and so on.</p>
        <p className="font-medium text-base text-white/40">
          In this step, everything is done and the contract ends.
        </p>
      </div>
    </div>
  )
}
