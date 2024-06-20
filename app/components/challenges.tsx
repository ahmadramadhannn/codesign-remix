import { Challenges as ChallengesType } from "types"
import { NotFoundChallenge, ChallengeCard } from "."

export function Challenges({ challenges }: { challenges: ChallengesType }) {

  if (!challenges.length) {
    return <NotFoundChallenge />
  }

  return (
    <>
      {challenges.sort((a, b) => b.difficulty - a.difficulty).map((challenge) => (

        <ChallengeCard key={challenge.id} challenge={challenge} />
      ))}

    </>
  )


}
