import { SectionBadge, SectionTitle } from "~/routes/live.collosal/components";
import { PricingCard } from ".";

export function Services() {
  const pricings = [
    {
      id: 1, name: "UI Design", price: 1200, benefits: ["10 design pages", "Well-documented", "4 revisions", "$100/additional page"], color: "purple"
    },
    {
      id: 2, name: "Development", price: 5000, benefits: ["Web & Mobile", "Well-documented", "8 revisions", "$1000/additional feature"], color: "blue"
    },
    {
      id: 3, name: "Maintenance", price: 3000, benefits: [
        "Daily backup",
        "3 hours of maintenance",
        "Including fixing",
        "$30/additional hour"
      ],
      color: "pink"
    }
  ]
  return (
    <div className="min-h-[40em] bg-[#221048] rounded-lg flex flex-col gap-20 justify-center place-items-center p-20">
      <div className="grid gap-3 text-center w-3/6 mx-auto">
        <SectionBadge content="get started" />
        <SectionTitle title="What do you need? Choose a service that can help you" />
      </div>
      <div className="grid grid-cols-3 gap-8">
        {pricings.map((data) => (
          <PricingCard key={data.id} price={data.price} name={data.name} benefits={data.benefits} color={data.color} />
        ))}
      </div>
    </div>
  )
}
