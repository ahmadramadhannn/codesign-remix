import { Button, SectionBadge, SectionParagraph, SectionTitle } from "~/routes/live.collosal/components";

export function Team() {
  return (
    <div className="grid grid-cols-2 gap-10">
      <div className="flex flex-col gap-10">
        <div className="grid gap-3">
          <SectionBadge content="our team" />
          <SectionTitle title="We're a team of designers, engineers and analysts" />
        </div>
        <SectionParagraph paragraph="Our team consists of many creative people. We are committed to maintaining quality work as well as speed. These creative people work together to create maximum work results." />
        <div className="">
          <Button type="secondary" content="See Our Teams" />
        </div>
      </div>
      <div>
        <img src="/collosal/team-illustration.svg" />
      </div>
    </div>
  )
}
