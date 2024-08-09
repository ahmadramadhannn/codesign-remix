
export function EmptyResult({ search }: { search: string }) {
  return (
    <div className="grid place-content-center text-center mt-20">

      <div className="flex flex-col gap-5 mt-20">
        <h1 className="text-6xl">No result 😥</h1>
        <p className="w-5/6 mx-auto text-xl">We couldn’t find any posts with the keyword `{search}`. Please try another keyword.</p>
      </div>
    </div>
  )
}
