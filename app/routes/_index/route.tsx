import { useSearchParams } from "@remix-run/react"
import { filterChallenges, challenges } from "lib"
import { Category, Difficulty } from "types"
import { FilterChallenge, Challenges, DifficultyIcon } from "~/components"



export default function Page() {
  const [searchParams] = useSearchParams()

  const difficultyParam = searchParams.get("difficulty") ?? "all"
  const difficulty = difficultyParam as keyof typeof Difficulty
  const categoryParam = searchParams.get("category") ?? "all"
  const category = categoryParam as keyof typeof Category

  const filteredChallenges = filterChallenges(category, difficulty, challenges)
  const totalChallenges = filteredChallenges.length

  return (

    <div className="mt-10 grid gap-9">
      <FilterChallenge totalChallenges={totalChallenges} />
      <div className="grid gap-5">

        <Challenges challenges={filteredChallenges} />
      </div>

    </div>
  )
}
