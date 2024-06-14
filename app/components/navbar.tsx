import { Nav } from "."

export function Navbar() {
  return (
    <header className="grid lg:grid-cols-2 gap-8 w-full items-center h-full">
      <div className="grid gap-2">
        <h1 className="font-fredoka text-[30px] lg:text-5xl italic font-bold uppercase text-home-brand">code the design</h1>
        <p className="w-full lg:w-8/12 xl:w-6/12 font-patrick-hand font-medium text-home-brand text-xl lg:text-2xl">Level up your coding skills with hands-on design challenges.</p>
        <a href="https://github.com" target="_blank" className="underline text-home-brand mt-2 font-patrick-hand text-xl w-max">Source on Github</a>
      </div>
      <Nav />
    </header>
  )
}
