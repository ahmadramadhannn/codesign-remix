
type DevelopmentTypeCardProps = {
  icon: "smartphone" | "monitor" | "globe"
  type: "Mobile" | "Desktop" | "Web"
}


export function DevelopmentTypeCard({ icon, type }: DevelopmentTypeCardProps) {
  return (
    <article className="p-5 flex gap-5 border border-white/10 bg-white/5">
      <img alt="" src={`/collosal/${icon}-light.svg`} />
      <p className="font-semibold text-base">{type} App Development</p>
    </article>
  )
}
