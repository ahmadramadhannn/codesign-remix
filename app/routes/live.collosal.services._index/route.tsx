import { BaseLayout } from "~/components";
import { SectionBadge, SectionTitle } from "../live.collosal/components";
import { UIDesign, Development, Maintenance } from "./components"

export default function Page() {
  return (
    <BaseLayout>
      <div className="w-2/5 mx-auto text-center flex flex-col gap-4">
        <SectionBadge content="services" />
        <SectionTitle title="We are here to help solve your company's problems" />
      </div>

      <div className="w-full h-[1px] bg-white/10 mt-32"></div>
      <div className="w-11/12 mx-auto grid gap-32 mt-24">
        <UIDesign />
        <Development />
        <Maintenance />
      </div>
    </BaseLayout>
  )
}
