import { Card } from "~/components";
import { HowToStart } from "."

type DescriptionCardProps = {
  name: string;
  description: string;
}

export function DescriptionCard({ name, description }: DescriptionCardProps) {
  return (
    <Card>
      <div className="p-10 lg:p-20 bg-white text-black grid gap-10">
        <div className="flex flex-col gap-4">
          <h2 id="challenge-name" className="text-2xl lg:text-4xl font-fredoka">{name}</h2>
          <p id="challenge-description" className="font-patrick-hand text-lg text-black/60">{description}</p>
        </div>

        <HowToStart />
      </div>
    </Card>
  )
}
