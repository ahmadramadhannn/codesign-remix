type InfoCardProps = {
  icon: string;
  name: string;
  value: string
}

export function InfoCard({ icon, name, value }: InfoCardProps) {
  return (
    <article className="w-max flex gap-5 items-center">
      <div className="w-16 h-16 grid items-center place-content-center bg-white/5">
        <img src={`/collosal/${icon}.svg`} />
      </div>

      <div className="grid gap-2">
        <p className="font-bold text-4xl">{value}</p>
        <p className="font-bold text-white/60 text-base uppercase">{name}</p>
      </div>
    </article>
  )
}
