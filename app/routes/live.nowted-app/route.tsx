import { Outlet, useLocation } from "@remix-run/react"
import { EmptyFolder, Sidebar } from "./components"

export default function Page() {
  const location = useLocation()
  const folderRoute = location.pathname.includes("folders")
  return (
    <div className="bg-nowtedapp-primary min-h-svh text-white font-source-sans-3">
      <div className="flex gap-7">
        <Sidebar />

        <div id="main-content" className="w-[75%]">
          {!folderRoute && <EmptyFolder />}
          <Outlet />
        </div>

      </div>

    </div >
  )
}
