export type Challenge = {
  id: number;
  name: string;
  slug: string;
  description: string;
  difficulty: number;
  category: string;
  designer: string;
  figmaId: string;
  figmaUrl: string;
}

export type Challenges = Challenge[]

export enum Difficulty {
  Intermediate = 1,
  Advanced = 2,
  Expert = 3,
  Master = 4
}
