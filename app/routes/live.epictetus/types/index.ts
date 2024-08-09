
export type Post = {
  id: number
  title: string
  description: string
  tag: string
  date: string
  thumbnail: string
  author: Author
}

export type Author = {
  name: string
  role: string
  profilePic: string
}

export type Posts = Post[]
