import { Card } from "~/components"
import { Link } from "@remix-run/react"


export function ChallengeNotFound({ slug }: { slug: string }) {
  return (
    <Card>
      <div className="bg-gray-400 flex flex-col gap-5 p-10 md:p-20 font-fredoka text-xl lg:text-2xl">
        <p className="font-semibold"> Challenge with slug {slug} is not found</p>
        <Link to="/" className="py-2 px-5 bg-blue-600 text-white font-medium rounded-md w-max">Back to homepage</Link>
      </div>
    </Card>
  )
}
