export type Challenge = {
  id: number;
  name: string;
  slug: string;
  description: string;
  difficulty: number;
  category: number;
  designer: string;
  figmaUrl: string;
}

export type Challenges = Challenge[]

export enum Difficulty {
  Intermediate = 1,
  Advanced = 2,
  Expert = 3,
  Master = 4
}

export enum Category {
  Component = 1,
  Page = 2,
  App = 3
}
