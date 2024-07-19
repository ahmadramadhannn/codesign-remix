import { Link } from "@remix-run/react"

export function Note() {
  const date = new Date()
  return (
    <Link
      to="./editor/adada"
      prefetch="intent"
      id="note"
      className="bg-white/5 p-6 grid gap-2"
    >
      <p className="text-lg font-semibold text-white">My Goals for the Next Year</p>
      <div className="flex gap-5">
        <p className="text-base text-white/40">{date.toLocaleDateString()}</p>
        <p className="truncate text-base text-white/60 ... w-52">Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.</p>
      </div>
    </Link>
  )
}
