import { Navbar } from "./components"
import { Outlet } from "@remix-run/react"

export default function Page() {
  return (
    <div className="relative overflow-hidden min-h-svh w-full bg-collosal-dark p-10 font-noto-sans text-white">
      <div className="lg:w-[78em] mx-auto grid">


        <Navbar />

        <Outlet />
      </div>

    </div>
  )
}
