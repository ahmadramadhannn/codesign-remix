import { ButtonFilterItem } from "."
import { useSearchParams } from "@remix-run/react"

export function FilterButton() {
  const [searchParams, setSearchParams] = useSearchParams();

  const category = searchParams.get("category") ?? "all categories"
  const difficulty = searchParams.get("difficulty") ?? "all"

  const categories = ["all categories", "app", "component", "page"]
  return (
    <div className="grid grid-cols-2 md:flex gap-5">
      {categories.map((item) => (
        <ButtonFilterItem categorySelected={category} key={item} categoryName={item} onMouseDown={() => setSearchParams({
          difficulty: difficulty,
          category: item
        })} />
      ))}
    </div>
  )
}
