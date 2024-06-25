import { Project } from "../types";

export const projects: Project[] = [
  {
    id: 1,
    title: "The Mobile App Landing Page",
    description: "A landing page for mobile app",
    appType: "mobile",
    category: "Development",
    client: "Acme. Inc",
    technology: "Kotlin"
  },
  {
    id: 2,
    title: "The Desktop App Landing Page",
    description: 'A landing page for desktop app',
    appType: "desktop",
    category: "Development",
    client: "Rockstar",
    technology: "Dotnet MAUI"
  },
  {
    id: 3,
    title: "The Desktop App Landing Page",
    description: "A landing page for desktop app",
    appType: "desktop",
    category: "Development",
    client: "EA",
    technology: "Avalonia"
  },
  {
    id: 4,
    title: "The Mobile App Landing Page",
    description: "A landing page for mobile app",
    appType: "mobile",
    category: "Development",
    client: "Bytebyte",
    technology: "Flutter"
  }
]

// TODO: handling different cases
export const getProject = (id: number) => projects.find((project) => project.id === id)
