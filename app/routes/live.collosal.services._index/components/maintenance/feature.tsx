
type FeatureProps = {
  icon: string
  content: string
}

export function Feature({ icon, content }: FeatureProps) {
  return (
    <div className="flex items-center gap-6">
      <div className="grid place-content-center items-center rounded-md bg-white/5 p-3">
        <img src={`/collosal/${icon}.svg`} />
      </div>
      <p className="font-medium text-base">{content}</p>
    </div>
  )
}
