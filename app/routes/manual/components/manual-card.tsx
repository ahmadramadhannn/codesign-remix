import { Card } from "~/components";
import { MotivationInfo, TechnologiesInfo, ContributionInfo } from "."


export function ManualCard() {

  return (
    <Card>
      <div className="p-10 lg:p-20 bg-home-brand grid gap-5">

        <h2 className="font-fredoka text-2xl lg:text-4xl text-black font-bold">Manual</h2>
        <div className="grid gap-7">

          <MotivationInfo />
          <TechnologiesInfo />
          <ContributionInfo />


        </div>
      </div>
    </Card>
  )
}
