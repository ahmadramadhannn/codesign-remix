import { useSearchParams } from "@remix-run/react"
import { filterChallenges } from "lib/challenges"
import { FilterChallenge, NotFoundChallenge } from "~/components"



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
          <div key={challenge.id} id="challenge-card" className="border border-black p-5 bg-white grid gap-4">
            <p>{challenge.title}</p>
            <div>
              <p>difficulty</p>
              <p>{challenge.difficulty}</p>
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}
