import { ArticleCard } from "~/routes/live.epictetus/components";
import { Post } from "~/routes/live.epictetus/types";

export function Posts({ posts }: { posts: Post[] }) {
  return (
    <div className="flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-9">
      {posts.map((post, index) => (
        <div key={index} className="flex flex-col gap-8">
          <ArticleCard article={post} author={post.author} />
          {index != posts.length - 1 && <div className="sm:hidden h-[2px] bg-white/10"></div>}
        </div>
      ))}
    </div>
  )
}
