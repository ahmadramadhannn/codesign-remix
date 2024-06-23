import { Testimonial } from "../live.collosal._index/components"
import { PageTitle, SectionBadge } from "../live.collosal/components"
import { Statistics, Team } from "./components"

export default function Page() {
  return (
    <div className="mx-auto w-11/12">
      <div className="grid grid-cols-3 w-11/12 mx-auto gap-32">
        <div className="relative w-max">
          <img alt="a nice picture of someone chill in their comy" src="/collosal/someone-in-char.png" />
          <img className="absolute -bottom-16 -right-8" alt="meeting picture" src="/collosal/meeting.png" />
        </div>
        <div className="col-span-2 flex flex-col gap-4 ml-10 place-content-center">
          <SectionBadge content="about" />
          <PageTitle title="We are creative, smart and hardworking people" />

          <p className="font-medium text-base text-white/60 w-11/12 leading-loose">Several creative people gather in the same place - that's Collosal. We collaborate to produce the best results, loved by clients and comfortable for users. Here we maintain togetherness even though with different backgrounds, all the people here are already experts in their respective fields.</p>
        </div>
      </div>

      <div className="mt-48 grid gap-14">
        <div className="w-full border border-white/10 mb-7"></div>
        <Statistics />
        <Testimonial />
        <Team />
      </div>
    </div>
  )
}
