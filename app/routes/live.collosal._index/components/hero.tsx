import { Button, PageDescription, PageTitle, SectionBadge } from "~/routes/live.collosal/components";

export function Hero() {
  return (
    <div className="grid text-center place-items-center gap-6">
      <SectionBadge content="client development driven" />
      <div className="w-[55%]">
        <PageTitle title="We Design. We Develop. We Ship. In The Same Day." />
        <PageDescription description="We are committed to not making clients wait. We will deliver the work as quickly as possible. Even on the same day. Even so, we do not reduce the quality of our work." />
      </div>

      <div className="flex gap-5">
        <Button type="primary" content="Send Quote" link href="./quote" />

        <Button type="secondary" content="Learn More" />
      </div>
    </div>
  )
}
