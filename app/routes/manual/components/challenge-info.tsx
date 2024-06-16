type ChallengeInfo = {
  name: string;
  children: React.ReactNode;
}


export function ChallengeInfo({ name, children }: ChallengeInfo) {
  return (
    <div className="grid gap-7" id="motivation">
      <h3 className="text-xl lg:text-2xl font-semibold font-fredoka">{name}</h3>
      <div className="grid gap-5">
        {children}
      </div>
    </div>
  )
}
