import { InfoCard } from "."


export function StatisticInfo() {
  return (
    <div className="w-full p-20 bg-white/5 grid grid-cols-3 items-center place-items-center gap-16">
      <InfoCard icon="flag" name="countries" value="8" />
      <InfoCard icon="user" name="clients" value="193" />
      <InfoCard icon="dollar-sign" name="earning" value="$100k" />
    </div>
  )
}
