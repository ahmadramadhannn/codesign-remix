import { Link } from "@remix-run/react";

export default function Page() {
  return (
    <div className="min-h-svh grid place-content-center">
      <h1 className="text-3xl">Sorry, page or route was not exist.</h1>
      <Link className="w-max" to=".." prefetch="intent">back to homepage</Link>
    </div>
  )
}
