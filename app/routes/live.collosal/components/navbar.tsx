import { Link } from "@remix-run/react"
import { Nav, StackedBox } from "."

export function Navbar() {
  return (
    <header className="grid items-center lg:grid-cols-4 gap-10 w-11/12 mx-auto">
      <Link to="/" className="w-max flex gap-6">
        <StackedBox />

        <h2 className="font-dm-sans font-bold text-2xl">Collosal.</h2>
      </Link>


      <Nav />

      <div className="grid place-content-end">

        <button className="w-[112px] font-medium text-sm text-center py-2 bg-white/10 rounded">Contact</button>
      </div>
    </header>
  )
}
