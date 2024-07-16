import { Category, Challenges, Difficulty } from "types";
import { getProperty } from "."

export function filterChallenges<C extends keyof typeof Category, D extends keyof typeof Difficulty>(category: C, difficulty: D, challenges: Challenges) {
  const selectedDifficulty = getProperty(Difficulty, difficulty)
  const selectedCategory = getProperty(Category, category)

  return challenges.filter((challenge) => (category.includes("all") || challenge.category == selectedCategory) && (difficulty.includes("all") || challenge.difficulty == selectedDifficulty))

}
