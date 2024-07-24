import { Feature } from "../types";

export function FeatureCard({ feature }: { feature: Feature }) {
  return (
    <article className="p-10 grid gap-7 bg-white/5 rounded-md">
      <img src={`/collosal/${feature.icon}.svg`} />
      <p className="font-bold text-lg">{feature.title}</p>
      <p className="font-medium text-base text-white/60">{feature.description}</p>
    </article>
  )
}
