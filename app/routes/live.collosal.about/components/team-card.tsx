type TeamCardProps = {
  pic: string;
  name: string;
  position: string;
}

export function TeamCard({ pic, name, position }: TeamCardProps) {
  return (
    <article>
      <img alt="a picture of team member" src={`/collosal/${pic}.png`} className="w-full" />

      <div className="bg-white/5 p-10 grid gap-3">
        <p className="font-bold text-base">{name}</p>
        <p className="font-medium text-sm text-white/60">{position}</p>
      </div>
    </article>
  )
}
