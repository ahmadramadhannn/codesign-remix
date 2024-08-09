import { Link } from "@remix-run/react"
import { AuthorArticle } from "."
import { Author, Post } from "../types"

export function ArticleCard({ article, author }: { article: Post, author: Author }) {
  return (
    <div className="flex flex-col gap-4 relative md:h-[506px]">
      <Link prefetch="intent" to={`./post/${article.id}`} className="flex flex-col gap-4">
        <img src={`/epictetus/${article.thumbnail}.png`} className="h-52 lg:h-[213px] bg-cover rounded-lg" />
        <div className="flex items-center gap-3 text-sm">
          <p id="tag" className="uppercase brightness-50">{article.tag}</p>
          <div className="w-1 h-1 rounded-full bg-white/60"></div>
          <p className="brightness-50">{article.date}</p>
        </div>
        <h2 id="title" className="text-xl md:text-2xl line-clamp-2 overflow-hidden">{article.title}</h2>
        <p id="description" className="text-base text-white/60 lg:pb-10 line-clamp-2 overflow-hidden">{article.description}</p>
      </Link>
      <div className="md:absolute md:bottom-0">
        <AuthorArticle author={author} />
      </div>
    </div>
  )
}
