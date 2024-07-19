import { Outlet, json, useLoaderData, useLocation } from "@remix-run/react"
import { LoaderFunctionArgs } from "@remix-run/node"
import { EmptyNote, Notes } from "./components"
import { useEffect, useState } from "react"

export const loader = async ({ params }: LoaderFunctionArgs) => {

  const foldername =
    params.name?.toLowerCase()
      .replace("-", " ")


  return json({ foldername })
}

export default function Page() {
  const { foldername } = useLoaderData<typeof loader>()

  const location = useLocation()

  const editor = location.pathname.includes("editor")

  return (
    <div className="flex">
      <div className="bg-[#1c1c1c] min-h-svh w-2/5 pt-10">
        <p className="pt-2 pl-6">hello</p>

        <Notes
        />
      </div>
      <div className="w-full">
        {!editor ? <EmptyNote /> : <> </>}
        <Outlet />
      </div>
    </div>

  )
}
