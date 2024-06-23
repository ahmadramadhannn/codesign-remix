import { Navbar } from "./components"
import { Outlet, isRouteErrorResponse, useRouteError } from "@remix-run/react"

export default function Page() {
  const error = useRouteError()

  if (isRouteErrorResponse(error)) {
    return (
      <p>test</p>
    )
  }
  return (
    <div className="relative overflow-hidden min-h-svh w-full bg-collosal-dark p-10 font-noto-sans text-white">
      <div className="lg:w-[75em] mx-auto grid">


        <Navbar />
        <div className="mt-16">

          <Outlet />
        </div>
      </div>

    </div>
  )
}
