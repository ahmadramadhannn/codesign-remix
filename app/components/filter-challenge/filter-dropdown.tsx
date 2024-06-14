import { DropdownFilterItem } from "."

export function FilterDropdown({ isDropdownOpen }: { isDropdownOpen: boolean }) {
  return (
    <div className={`absolute ${isDropdownOpen ? 'block' : 'hidden'} w-[104%] md:w-[13.5rem] min-h-10 border-4 border-black bg-white -left-1 -bottom-16 w-full z-99`}>
      <DropdownFilterItem />
    </div>
  )
}
