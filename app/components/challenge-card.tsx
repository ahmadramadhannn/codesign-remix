import { Challenge } from "types"
import { Card, CategoryIcon, DifficultyIcon, RightArrow } from "."

type ChallengeCardProps = {
  challenge: Challenge
}


export function ChallengeCard({ challenge }: ChallengeCardProps) {
  return (
    <Card>

      <div className="bg-white text-black p-10 lg:p-20 flex flex-col lg:grid lg:grid-cols-2 gap-10">
        <div className="grid gap-2 order-2 lg:order-1">
          <h2 id="title" className="font-fredoka text-2xl lg:text-4xl font-bold">Lidia</h2>
          <p className="font-patrick-hand text-xl text-black/60 line-clamp-3 h-[4em]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
          <button className="mt-6 relative bg-white text-center h-[3.5em] px-14 border-2 border-black w-max font-fredoka text-base text-black font-bold">
            <p>View Challenge</p>
          </button>

          <div className="mt-9 grid sm:grid-cols-2 gap-2 w-8/12 lg:w-10/12">
            <div className="flex gap-5 items-start">
              <DifficultyIcon />
              <div className="flex flex-col font-patrick-hand">
                <p className="text-base text-black/60 uppercase">difficulty</p>
                <p className="text-2xl font-bold">Intermediate</p>
              </div>
            </div>
            <div className="flex gap-5 items-start">
              <CategoryIcon />
              <div className="flex flex-col font-patrick-hand">
                <p className="text-base text-black/60 uppercase">category</p>
                <p className="text-2xl font-bold">Page</p>
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
