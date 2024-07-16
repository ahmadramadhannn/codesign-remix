import { json, useLoaderData } from "@remix-run/react"
import { LoaderFunctionArgs } from "@remix-run/node"
import { Notes } from "./components"

export const loader = async ({ params }: LoaderFunctionArgs) => {

  const foldername =
    params.name?.toLowerCase()
      .replace("-", " ")


  return json({ foldername })
}

export default function Page() {
  const { foldername } = useLoaderData<typeof loader>()
  return (
    <div className="bg-[#1c1c1c] min-h-svh w-2/5 pt-10">
      <p className="pt-2 pl-6">hello</p>

      <Notes />
    </div>
  )
}
