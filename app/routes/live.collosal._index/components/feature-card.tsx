type FeatureCardProps = {
  featureName: string;
  description: string;
  icon: string;
}

export function FeatureCard({ featureName, description, icon }: FeatureCardProps) {
  return (
    <article className="bg-white/5 p-10 h-[276px] flex flex-col gap-7">
      <div className="w-12 h-12 bg-white/5 grid place-content-center">
        <img alt="white color svg icon" src={`/collosal/${icon}.svg`} />
      </div>
      <div className="grid gap-4">
        <p className="font-bold text-base">{featureName}</p>
        <p className="text-white/60">{description}</p>

      </div>
    </article>
  )
}
