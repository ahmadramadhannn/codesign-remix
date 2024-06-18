import { DropdownFilterItem } from "."
import { useSearchParams } from "@remix-run/react"

export function FilterDropdown({ isDropdownOpen }: { isDropdownOpen: boolean }) {
  const [searchParams, setSearchParams] = useSearchParams()

  const difficulty = searchParams.get("difficulty") ?? "all"
  const category = searchParams.get("category") ?? "all categories"


  const difficulties = ["all", "intermediate", "advanced", "expert", "master"]
  return (
    <div className={`absolute ${isDropdownOpen ? 'block' : 'hidden'} w-[104%] md:w-[13.5rem] min-h-10 border-4 border-black bg-white -left-1 top-14 w-full z-[999999]`}>
      {difficulties.map((item) => (
        <DropdownFilterItem selectedDifficulty={difficulty} onMouseDown={() => setSearchParams({
          difficulty: item,
          category: category
        })} difficulty={item} key={item} />
      ))}

    </div>
  )
}
