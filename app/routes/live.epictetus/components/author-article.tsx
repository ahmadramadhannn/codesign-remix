import { Author } from "../types"

export function AuthorArticle({ author }: { author: Author }) {
  return (
    <div className="flex gap-3 items-center">
      <img id="profile" alt="profile pic of author" src={`/epictetus/${author.profilePic}.png`} className="h-14" />
      <div className="flex flex-col gap-.5">
        <p id="name" className="text-base">{author.name}</p>
        <p id="role" className="brightness-50 text-sm">{author.role}</p>
      </div>
    </div>
  )
}
