
export function More() {
  return (
    <>
      <p className="font-semibold text-sm pl-8">More</p>
      <div className="flex items-center gap-4 p-2 pl-8 hover:bg-white/5">
        <img src="/nowted-app/icons/favorite-icon.svg" />
        <p className="text-base mt-1">Favorites</p>
      </div>
      <div className="flex items-center gap-4 p-2 pl-8 hover:bg-white/5">
        <img src="/nowted-app/icons/trash-icon.svg" />
        <p className="text-base mt-1">Trash</p>
      </div>
      <div className="flex items-center gap-4 p-2 pl-8 hover:bg-white/5">
        <img src="/nowted-app/icons/archieve-icon.svg" />
        <p className="text-base mt-1">Archived Notes</p>
      </div>
    </>
  )
}
