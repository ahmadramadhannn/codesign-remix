import { useSearchParams } from "@remix-run/react"
import { filterChallenges } from "lib/challenges"
import { FilterChallenge, NotFoundChallenge, ChallengeCard } from "~/components"



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
        {!challenges.length ? <NotFoundChallenge /> : challenges.map((challenge) => (
          <ChallengeCard key={challenge.id} challenge={challenge} />
        ))}
      </div>

    </div>
  )
}
