import { Link } from "@remix-run/react";

export function Logo() {
  return (
    <Link to="." prefetch="intent" className="flex items-center gap-3">
      <div className="w-9 h-9 rounded-md text-center bg-[#485563] text-lg font-semibold uppercase grid place-content-center">
        <p className="font-source-sans-3">e</p>
      </div>
      <h3 className="text-lg font-normal">Epictetus</h3>
    </Link>
  )
}
