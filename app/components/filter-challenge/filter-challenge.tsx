import { useState } from "react"
import { FilterDropdown, FilterButton } from "."


export function FilterChallenge() {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen)

  return (
    <div className="grid gap-9 md:w-9/12 lg:w-5/12">
      <div className="grid md:flex items-center gap-4">
        <div className="flex items-center gap-4">

          <h3 className="font-patrick-hand w-max text-home-brand text-2xl">Difficulty</h3>
          <div onMouseDown={toggleDropdown} className="border-4 w-8/12 md:w-[12em] border-black py-2 px-3 bg-white text-lg font-patrick-hand text-black/80 relative select-none">
            <p className="text-start">All</p>
            <div className={`absolute right-4 border-r-2 border-b-2 ${isDropdownOpen ? 'rotate-[225deg] bottom-4' : 'rotate-45 bottom-5'} border-black w-2.5 h-2.5`}></div>
            <FilterDropdown isDropdownOpen={isDropdownOpen} />
          </div>
        </div>
        <h3 className="font-patrick-hand text-home-brand text-2xl">/51 challenges </h3>
      </div>
      <FilterButton />
      <div onMouseDown={toggleDropdown} className={`absolute top-0 left-0 w-full h-full ${isDropdownOpen ? 'block' : 'hidden'} `}></div>
    </div>
  )
}
