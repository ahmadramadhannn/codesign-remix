import { SectionBadge, SectionParagraph, SectionTitle } from "~/routes/live.collosal/components";

export function HowWeWork() {
  return (
    <div className="grid grid-cols-2 items-center gap-10">
      <div>
        <img src="/collosal/how-we-work-illustration.svg" />
      </div>
      <div className="flex flex-col gap-10">
        <div className="grid gap-3">
          <SectionBadge content="how we work?" />
          <SectionTitle title="Everything is well planned, well designed and developed wholeheartedly" />
        </div>
        <SectionParagraph paragraph="Careful planning makes us confident, developed with best practices so that the project can be maintained. We always test projects before they are shipped." />
      </div>
    </div>
  )
}
