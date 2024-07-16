import { Challenges as ChallengesType } from "types"
import { NotFoundChallenge, ChallengeCard, For } from "."

export function Challenges({ challenges }: { challenges: ChallengesType }) {

  if (!challenges.length) {
    return <NotFoundChallenge />
  }

  return <For each={challenges.sort((a, b) => b.difficulty - a.difficulty)} fallback={<NotFoundChallenge />}>
    {(challenge, index) =>
      <ChallengeCard key={index} challenge={challenge} />
    }
  </For>

}
