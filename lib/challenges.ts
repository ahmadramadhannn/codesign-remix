import { Category, Challenges, Difficulty } from "types"


const createSlug = (name: string): string => {
  const slug = name.toLowerCase().split(" ").join("-").replace("'", "")

  return slug
}
const figmaCommunityUrl = "https://www.figma.com/community"

export const challenges: Challenges = [
  {
    id: 1,
    name: "The Malaka",
    slug: createSlug("The Malaka"),
    description: "The Malaka is a landing page for a book product. The design features a large hero section with a catchy headline and a 3D illustration of the book. The page also includes several sections such as a preface from the designer, sample screenshots, testimonials, pricing information, and information about the designer. The page is designed to be visually appealing and user-friendly, making it easy for visitors to learn more about the book and purchase a copy.",
    difficulty: Difficulty.Expert,
    category: Category.Page,
    designer: "nauval",
    figmaId: "1064953526065340295",
    figmaUrl: `${figmaCommunityUrl}/file/1064953526065340295`
  },
  {
    id: 2,
    name: "Chat n' rechat",
    slug: createSlug("Chat n' rechat"),
    description: "Chat n' Rechat is a landing page for a mobile chatting app, featuring a clean and modern design with a hero component showcasing the app illustration. The page includes several sections, including a list of key features, a call-to-action for users to download the app, and a frequently asked questions section.",
    difficulty: Difficulty.Expert,
    category: Category.Page,
    designer: "nauval",
    figmaId: "1061306005803309728",
    figmaUrl: `${figmaCommunityUrl}/file/1061306005803309728`
  },
  {
    id: 3,
    name: "Authed",
    slug: createSlug("Authed"),
    description: "Authed is a modern and sleek authentication page designed for an online course website. The page features a two-column layout, with a form on the left side and an illustration and headline with a satirical style on the right. The form allows users to easily sign in or create an account, ensuring a smooth and seamless process for accessing course content. The page is designed to be user-friendly and intuitive, making it easy for users to navigate and find what they need. The illustration and headline on the right add a touch of personality to the page, making it stand out from traditional authentication pages.",
    difficulty: Difficulty.Advanced,
    category: Category.Page,
    designer: "nauval",
    figmaId: "1061307506373261985",
    figmaUrl: "https://www.figma.com/community/file/1061307506373261985"
  },
  {
    id: 4,
    name: "Collosal",
    slug: createSlug("Collosal"),
    description: "Collosal is a visually stunning landing page designed for a software house company. With several pages including a home page, services page, about page, and even a blog page, this design is perfect for showcasing the capabilities of the company. The theme is dark with a blurry background and gradient, giving it a glassmorphism effect that is sure to impress. The various pages allow you to highlight the company's services, team, and culture, making it easy for potential clients to get a feel for what you have to offer. With a responsive design that adapts to different screen sizes and devices, Collosal ensures an optimal user experience for all visitors.",
    difficulty: Difficulty.Master,
    category: Category.Page,
    designer: "nauval",
    figmaId: "1061303456713302684",
    figmaUrl: "https://www.figma.com/community/file/1061303456713302684"
  },
  {
    id: 5,
    name: "Nowted App",
    slug: createSlug("Nowted App"),
    description: "Nowted is a visually striking and highly functional note-taking app with a variety of features and tools to help users organize, edit, and access their notes. The app has a clean and modern design, with a three-column layout that allows users to easily navigate and access their notes. The first column is a sidebar that contains a list of folders, recent opened files, a search function, and other features. The second column is a list of the files in the opened folder, and the third column is a WYSIWYG (What You See Is What You Get) editor that allows users to edit and format their notes. It is a key part of the user's overall note-taking experience, and can be used to organize and access notes in a variety of ways.",
    difficulty: Difficulty.Advanced,
    category: Category.App,
    designer: "nauval",
    figmaId: "1188856976000269208",
    figmaUrl: "https://www.figma.com/community/file/1188856976000269208"
  }
]

export const getChallenge = (slug: string) => challenges.find((challenge) => challenge.slug == slug)

export const categoryToString = (value: number): string => {
  return Category[value].toLowerCase() as keyof typeof Category
}

export const difficultyToString = (value: number): string => {
  return Difficulty[value].toLowerCase() as keyof typeof Difficulty
}
