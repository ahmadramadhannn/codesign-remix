import { SectionBadge, SectionTitle } from "~/routes/live.collosal/components";
import { FeatureCard } from "."
import { Features as FeaturesType } from "../types";

export function Features() {
  const features: FeaturesType = [
    { icon: "figma", title: "Design Files", description: "Projects are well designed using Figma. You will get the design file." },
    { icon: "clock", title: "Same Day", description: "We don't want you to wait long. Everything will be finished on the same day." },
    { icon: "code", title: "Quality Code", description: "Code written according to good practice is highly maintainable." },
    { icon: "trending-up", title: "SEO", description: "The website will appear on the first page of the search engine." },
    { icon: "layout", title: "Responsive Design", description: "Access the website on any device, don't limit your visitors." },
    { icon: "zap", title: "Blazing Fast", description: "A high speed website will not disappoint prospective customers." }
  ]

  return (
    <div className="mt-20 w-full grid gap-24">
      <div className="text-center w-[60%] grid gap-2 mx-auto">
        <SectionBadge content="features" />
        <SectionTitle title="Here's what you will get when purchasing this service" />
      </div>
      <div className="w-full grid grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <FeatureCard feature={feature} key={index} />
        ))}
      </div>
    </div>
  )
}
