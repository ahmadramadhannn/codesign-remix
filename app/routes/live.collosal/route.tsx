import { Hero, Navbar } from "./components"

export default function Page() {
  return (
    <div className="min-h-svh w-full bg-collosal-dark p-10 font-noto-sans text-white">
      <div className="lg:w-[68em] mx-auto grid">
        <Navbar />
        <Hero />
      </div>
    </div>
  )
}
