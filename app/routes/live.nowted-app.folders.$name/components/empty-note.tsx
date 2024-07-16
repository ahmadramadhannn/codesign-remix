
export function EmptyNote() {
  return (
    <div className="h-full flex flex-col place-content-center place-items-center text-center">
      <div className="grid gap-3 items-center w-10/12 mx-auto place-items-center">
        <img src="/nowted-app/icons/note-icon.svg" />
        <h2 className="text-white font-semibold text-[28px]">Select a note to view</h2>
        <p className="text-base text-white/60 leading-relaxed">Choose a note from the list on the left to view its contents, or create a new note to add to your collection.</p>

      </div>
    </div>
  )
}
