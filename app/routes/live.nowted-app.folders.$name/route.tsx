import { Outlet, json, useLoaderData, useLocation } from "@remix-run/react"
import { LoaderFunctionArgs } from "@remix-run/node"
import { EmptyNote, Notes } from "./components"
import { useEffect, useState } from "react"

export const loader = async ({ params }: LoaderFunctionArgs) => {

  const foldername =
    params.name?.toLowerCase()
      .replace("-", " ")


  return json({ foldername, isClicked: true })
}

export default function Page() {
  const { foldername, isClicked } = useLoaderData<typeof loader>()
  const [folderClicked, setFolderClicked] = useState<boolean>(false);

  const location = useLocation()

  const noteLocation = location.pathname.includes("note")

  return (
    <div className="flex">
      <div className="bg-[#1c1c1c] min-h-svh w-2/5 pt-10">
        <p className="pt-2 pl-6">hello</p>

        <Notes
        />
      </div>
      <div className="w-full">
        {!noteLocation ? <EmptyNote /> : <> </>}
        <Outlet />
      </div>
    </div>

  )
}
