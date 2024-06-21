export function StackedBox() {
  return (
    <div className="relative w-6 h-6">
      <div className="w-full h-full border-t-2 border-l-2 border-white"></div>
      <div className="h-full w-2 border-b-2 border-white absolute bottom-0"></div>
      <div className="w-full h-2 border-l-2 border-white absolute -right-6 bottom-4"></div>
      <div className="w-full h-full border-2 border-white absolute -right-2 -bottom-2"></div>
    </div>
  )
}
