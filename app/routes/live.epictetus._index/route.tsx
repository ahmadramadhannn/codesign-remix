import { EmptyResult, Posts } from "./components";
import { getPosts, posts } from "../live.epictetus/lib/posts";
import { useLoaderData, useSearchParams } from "@remix-run/react";

export default function Page() {
  const [searchParams] = useSearchParams()
  const search = searchParams.get("search") ?? ""
  const filteredPosts = search ? getPosts(search) : posts

  return (
    <>
      {search && <h2 className="text-4xl text-center mb-16">Search: {search}</h2>}
      {!filteredPosts.length ? <EmptyResult search={search} /> : <Posts posts={filteredPosts} />}
    </>
  )
}
