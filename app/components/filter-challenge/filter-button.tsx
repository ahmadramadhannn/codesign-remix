import { ButtonFilterItem } from "."
import { useSearchParams } from "@remix-run/react"

export function FilterButton() {
  const [searchParams, setSearchParams] = useSearchParams();

  const category = searchParams.get("category") ?? "all categories"
  const difficulty = searchParams.get("difficulty") ?? "all"

  const categories = ["all categories", "App", "Component", "Page"]
  return (
    <div className="flex flex-wrap sm:grid sm:grid-cols-2 md:flex gap-5">
      {categories.map((item) => (
        <ButtonFilterItem categorySelected={category} key={item} categoryName={item} onMouseDown={() => setSearchParams({
          difficulty: difficulty,
          category: item
        })} />
      ))}
    </div>
  )
}
