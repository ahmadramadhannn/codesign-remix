import { useSearchParams } from "@remix-run/react"
import { filterChallenges } from "lib/challenges"
import { FilterChallenge, Challenges } from "~/components"



export default function Page() {
  const [searchParams] = useSearchParams()


  const difficulty = searchParams.get("difficulty") ?? "all"
  const category = searchParams.get("category") ?? "all"

  const challenges = filterChallenges(category, difficulty)
  const totalChallenges = challenges.length



  return (

    <div className="mt-10 grid gap-9">
      <FilterChallenge totalChallenges={totalChallenges} />
      <div className="grid gap-5">
        <Challenges challenges={challenges} />
      </div>

    </div>
  )
}
