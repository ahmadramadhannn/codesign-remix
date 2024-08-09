import { LoaderFunctionArgs } from "@remix-run/node"
import { Link, isRouteErrorResponse, useLoaderData, useRouteError } from "@remix-run/react"
import { AuthorArticle } from "../live.epictetus/components"
import { getPostById } from "../live.epictetus/lib/posts"


// TODO: better error handlings and etc.
export const loader = ({ params }: LoaderFunctionArgs) => {
  const id = params.id

  if (!id) throw new Error("something went wrong")

  const post = getPostById(Number(id))

  if (!post) throw new Response("Not Found", { status: 404 })

  return { post }
}

export default function Page() {
  const { post } = useLoaderData<typeof loader>()

  return (
    <div className="flex flex-col gap-6 lg:w-[896px] mx-auto">
      <div className="flex justify-center place-items-center flex-col gap-5">
        <div className="flex gap-4 items-center">
          <p id="tag" className="brightness-50 uppercase text-sm">{post.tag}</p>
          <div className="w-1 h-1 bg-white/60 rounded-full"></div>
          <p id="date" className="brightness-50 text-sm">{post.date}</p>
        </div>
        <h2 id="title" className="text-2xl text-center w-11/12 lg:w-4/6 mx-auto">{post.title}</h2>
        <AuthorArticle author={post.author} />
      </div>
      <img src={`/epictetus/${post.thumbnail}.png`} />
      <div id="body" className="text-lg lg:text-xl flex flex-col gap-5 leading-relaxed lg:w-5/6 mx-auto lg:mt-5">
        <p>Male sixth sea it a. Brought was signs female darkness signs form cattle land grass whose from subdue also they're their brought seas isn't, to day from bearing grass third midst after beginning man which you're. Dry, gathering beginning given made them evening.</p>
        <p>Lights dry. Thing, likeness, forth shall replenish upon abundantly our green. Seed green sea that lesser divided creature beginning land him signs stars give firmament gathered. Wherein there their morning a he grass. Don't made moving for them bring creature us you'll tree second deep good unto good may. Us yielding.</p>
        <p>Have. Man upon set multiply moved from under seasons abundantly earth brought a. They're open moved years saw isn't morning darkness. Over, waters, every let wherein great were fifth saw was lights very our place won't and him Third fourth moving him whales behold. Beast second stars lights great was don't green give subdue his. Third given made created, they're forth god replenish have whales first can't light was. Herb you'll them beast kind divided. Were beginning fly air multiply god Yielding sea don't were forth.</p>
      </div>
    </div>
  )
}

export function ErrorBoundary() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    switch (error.status) {
      case 404:
        return (
          <div className="grid min-h-svh place-content-center gap-4">
            <h1 className="text-3xl">Sorry, post was not exist.</h1>
            <Link className="w-max" to=".." prefetch="intent">back to homepage</Link>
          </div>
        )
      default:
        break;
    }
    return (
      <div>
        <h1>
          {error.status} {error.statusText}
        </h1>
        <p>{error.data}</p>
      </div>
    );
  } else if (error instanceof Error) {
    return (
      <div>
        <h1>Error</h1>
        <p>{error.message}</p>
        <p>The stack trace is:</p>
        <pre>{error.stack}</pre>
      </div>
    );
  } else {
    return <h1>Unknown Error</h1>;
  }
}
