import { Dot } from "."

export function DevelopmentIllustration() {
  const items = ["smartphone", "monitor", "globe"]
  return (
    <div className="w-[401px] h-[430px] grid gap-6">
      <div className="w-[399px] grid gap-5 h-[267px] bg-white/5 p-5 rounded-md">
        <div className="flex gap-3">
          <Dot color="red" />
          <Dot color="yellow" />
          <Dot color="green" />
        </div>
        <img src="/collosal/wireframer.svg" />
      </div>

      <div className="grid grid-cols-3 gap-6">
        {items.map((item, index) => (
          <div key={index} className="bg-white/5 rounded-md grid place-content-center py-4">
            <img src={`/collosal/${item}.svg`} />
          </div>
        ))}
      </div>
    </div>
  )
}
