import { ButtonFilterItem } from "."

export function FilterButton() {
  return (
    <div className="grid grid-cols-2 md:flex gap-5">
      <ButtonFilterItem />
      <ButtonFilterItem />
      <ButtonFilterItem />
    </div>
  )
}
