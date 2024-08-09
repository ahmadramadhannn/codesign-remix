import { useLocation, useSearchParams } from "@remix-run/react"
import { Logo, Nav } from "."

export function Header() {
  const [_, setSearchParams] = useSearchParams()
  const location = useLocation()
  return (
    <header className="grid grid-cols-3 lg:grid-cols-4 gap-10 mb-8 lg:mb-14">
      <div className="col-span-3 lg:col-span-3 flex justify-between items-center md:gap-24 xl:gap-32">
        <div className="order-2 md:order-1">
          <Logo />
        </div>
        <div className="hidden order-1 md:order-2 lg:block">
          <Nav />
        </div>
        <img src="/epictetus/menu.svg" className="lg:hidden" />
        <img src="/epictetus/search.svg" className="lg:hidden order-3" />
      </div>
      <div className="hidden lg:block relative">
        <input disabled={location.pathname !== "/live/epictetus"} onChange={(e) => setSearchParams({ search: e.currentTarget.value })} type="text" className="rounded-full p-2 outline-none bg-[#1f2937]/60 text-white text-base w-5/6 pl-8 disabled:opacity-50 disabled:cursor-not-allowed" placeholder="Search by title" />
        <img src="/epictetus/search-icon.svg" className="absolute top-3.5 left-2" />
      </div>
    </header>
  )
}
