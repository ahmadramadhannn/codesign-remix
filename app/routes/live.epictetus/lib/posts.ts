import { Author, Post, Posts } from "../types";

export const authors: Author[] = [
  { name: "Leslie Alexander", role: "UI Designer", profilePic: "author-1" },
  { name: "Jemmy Wilson", role: "Product Designer", profilePic: "author-2" },
  { name: "Esther Howard", role: "Entrepreneur", profilePic: "author-3" },
  { name: "Robert Fox", role: "Front-end Engineer", profilePic: "author-4" }
]

const getAuthor = (name: string) => {
  return authors.filter((author) => author.name.toLowerCase() == name.toLowerCase())[0]
}

export const posts: Posts = [
  {
    id: 1,
    title: "Understanding color theory: the color wheel and finding complementary colors",
    description: "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. ",
    tag: "ui design",
    date: "july 2, 2021",
    thumbnail: "post-1-thumb",
    author: getAuthor("leslie alexander")
  },
  {
    id: 2,
    title: "How to design a product that can grow itself 10x in year",
    description: "Auctor Porta. Augue vitae diam mauris faucibus blandit elit per, feugiat leo dui orci. Etiam vestibulum. Nostra netus per conubia dolor.",
    tag: "internet",
    date: "June 28, 2021",
    thumbnail: "post-2-thumb",
    author: getAuthor("jemmy wilson")
  },
  {
    id: 3,
    title: "The More Important the Work, the More Important the Rest",
    description: "Suitable Quality is determined by product users, clients or customers, not by society in general. For example, a low priced product may be viewed as having high.",
    tag: "9 to 5",
    date: "June 22, 2021",
    thumbnail: "post-3-thumb",
    author: getAuthor("esther howard")
  },
  {
    id: 4,
    title: "Email Love - Email Inspiration, Templates and Discovery",
    description: "Consider that for a moment: everything we see around us is assumed to have had a cause and is contingent upon something else.",
    tag: "inspirations",
    date: "June 18, 2021",
    thumbnail: "post-4-thumb",
    author: getAuthor("robert fox")
  },
  {
    id: 5,
    title: "The More Important the Work, the More Important the Rest",
    description: "Suitable Quality is determined by product users, clients or customers, not by society in general. For example, a low priced product may be viewed as having high.",
    tag: "9 to 5",
    date: "June 22, 2021",
    thumbnail: "post-5-thumb",
    author: getAuthor("esther howard")
  },
  {
    id: 6,
    title: "Email Love - Email Inspiration, Templates and Discovery",
    description: "Consider that for a moment: everything we see around us is assumed to have had a cause and is contingent upon something else.",
    tag: "inspirations",
    date: "June 19, 2021",
    thumbnail: "post-6-thumb",
    author: getAuthor("robert fox")
  },
  {
    id: 7,
    title: "How to design a product that can grow itself 10x in year",
    description: "Auctor Porta. Augue vitae diam mauris faucibus blandit elit per, feugiat leo dui orci. Etiam vestibulum. Nostra netus per conubia dolor.",
    tag: "internet",
    date: "June 28, 2021",
    thumbnail: "post-7-thumb",
    author: getAuthor("jemmy wilson")
  }
]

export const getPostById = (id: number): Post => {
  return posts.filter((post) => post.id == id)[0]
}

export const getPosts = (title: string): Posts => {
  return posts.filter((post) => post.title.toLowerCase().indexOf(title.toLowerCase()) > -1)
}
