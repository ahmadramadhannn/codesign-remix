import { Challenge } from "types"
import { Card, CategoryIcon, DifficultyIcon, RightArrow } from "."
import { Link } from "@remix-run/react"
import { categoryToString, difficultyToString } from "lib"

type ChallengeCardProps = {
  challenge: Challenge
}

export function ChallengeCard({ challenge }: ChallengeCardProps) {
  console.log(challenge.id)
  const difficulty = difficultyToString(challenge.difficulty)
  const category = categoryToString(challenge.category)
  return (
    <Card>

      <div className="bg-white text-black p-10 lg:p-20 flex flex-col lg:grid lg:grid-cols-2 gap-10">
        <div className="grid gap-2 order-2 lg:order-1">
          <h2 id="title" className="font-fredoka text-2xl lg:text-4xl font-bold">{challenge.name}</h2>
          <p className="font-patrick-hand text-xl text-black/60 line-clamp-3 h-[4em]">{challenge.description}
          </p>
          <Link prefetch="intent" to={`/challenge/${challenge.slug}`} className="mt-6 relative bg-white text-center h-[3.5em] px-14 border-2 border-black w-max font-fredoka text-base text-black grid items-center font-bold">
            <p>View Challenge</p>
          </Link>

          <div className="mt-9 grid sm:grid-cols-2 gap-2 w-8/12 lg:w-10/12">
            <div className="flex gap-5 items-start">
              <DifficultyIcon />
              <div className="flex flex-col font-patrick-hand">
                <p className="text-base text-black/60 uppercase">difficulty</p>
                <p className="text-2xl font-bold">{difficulty}</p>
              </div>
            </div>
            <div className="flex gap-5 items-start">
              <CategoryIcon />
              <div className="flex flex-col font-patrick-hand">
                <p className="text-base text-black/60 uppercase">category</p>
                <p className="text-2xl font-bold">{category}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-4 border-black h-[11em] sm:h-[25em] lg:h-[17em] xl:h-[20em] relative -rotate-1 order-1 lg:order-2">
          <div className="absolute w-3 h-3 border-2 border-black bg-white -top-2 -left-2"></div>
          <div className="absolute w-3 h-3 border-2 border-black bg-white -top-2.5 -right-2"></div>
          <div className="absolute w-3 h-3 border-2 border-black bg-white -bottom-2 -left-2"></div>
          <div className="absolute w-3 h-3 border-2 border-black bg-white -bottom-2 -right-2"></div>
        </div>
      </div>
    </Card>
  )
}
