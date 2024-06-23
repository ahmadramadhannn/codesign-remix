import { StatisticInfo } from "."

export function Statistics() {
  return (
    <div className="grid place-items-center gap-14">
      <div className="grid place-items-center gap-5 text-center">
        <p className="uppercase text-collosal-green text-base">statistics</p>
        <h2 className="font-bold text-3xl font-bold leading-relaxed w-5/12">In 3 years we reached 8 countries, 193 clients and earning $100k USD</h2>
      </div>

      <StatisticInfo />
    </div>
  )
}
