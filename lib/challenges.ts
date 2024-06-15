import { Challenges, Difficulty } from "types";



export const challenges: Challenges = [
  { id: 1, title: "The Malaka", description: "The Malaka is a landing page for a book product. The design features a large hero section with a catchy headline and a 3D illustration of the book. The page also includes several sections such as a preface from the designer, sample screenshots, testimonials, pricing information, and information about the designer. The page is designed to be visually appealing and user-friendly, making it easy for visitors to learn more about the book and purchase a copy.", difficulty: Difficulty.Expert, category: "page", designer: "nauval" },
  { id: 2, title: "Chat n' rechat", description: "Chat n' Rechat is a landing page for a mobile chatting app, featuring a clean and modern design with a hero component showcasing the app illustration. The page includes several sections, including a list of key features, a call-to-action for users to download the app, and a frequently asked questions section.", difficulty: Difficulty.Expert, category: "page", designer: "nauval" },
  { id: 3, title: "Authed", description: "Authed is a modern and sleek authentication page designed for an online course website. The page features a two-column layout, with a form on the left side and an illustration and headline with a satirical style on the right. The form allows users to easily sign in or create an account, ensuring a smooth and seamless process for accessing course content. The page is designed to be user-friendly and intuitive, making it easy for users to navigate and find what they need. The illustration and headline on the right add a touch of personality to the page, making it stand out from traditional authentication pages.", difficulty: Difficulty.Advanced, category: "page", designer: "nauval" }
]

export const filterChallenges = (category: string, difficulty: string): Challenges => {


  let selectedDifficulty: Difficulty;

  switch (difficulty) {
    case 'intermediate': {
      selectedDifficulty = Difficulty.Intermediate
      break
    }
    case 'advanced': {
      selectedDifficulty = Difficulty.Advanced
      break
    }
    case 'expert': {
      selectedDifficulty = Difficulty.Expert
      break
    }
    case 'master': {
      selectedDifficulty = Difficulty.Master
    }
  }



  return challenges.filter((challenge) => (category.includes("all") || challenge.category.toLowerCase() == category.toLowerCase()) && (difficulty.includes("all") || challenge.difficulty == selectedDifficulty))
}
