export type Challenge = {
  id: number;
  title: string;
  description: string;
  difficulty: number;
  category: string;
  designer: string;
}

export type Challenges = Challenge[]

export enum Difficulty {
  Intermediate = 1,
  Advanced = 2,
  Expert = 3,
  Master = 4
}
