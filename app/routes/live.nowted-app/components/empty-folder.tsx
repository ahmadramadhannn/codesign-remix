export function EmptyFolder() {
  return (
    <div className="grid place-content-center h-full">
      <div className="text-center mx-auto w-9/12 flex flex-col gap-4">
        <h2 className="font-semibold text-3xl">Select a folders to view</h2>
        <p className="text-white/60 text-base">
          Choose a folder from the list on the left to view its contents, or create a folder to add to your collection.
        </p>
      </div>
    </div>
  )
}
