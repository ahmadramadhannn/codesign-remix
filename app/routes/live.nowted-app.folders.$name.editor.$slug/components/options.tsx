import { OptionItem } from "."

export function Options() {
  return (
    <div className="bg-[#333] grid gap-5 absolute right-0 top-12 rounded-md p-5">
      <OptionItem icon="favorite-icon" content="Add to favorites" />
      <OptionItem icon="archieve-icon" content="Archived" />
      <div className="w-full -translate-y-1 h-1 border border-white/5"></div>
      <OptionItem icon="trash-icon" content="Delete" />
    </div>
  )
}
