import { LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getChallenge } from "lib/challenges";
import { ChallengeNotFound, DescriptionCard, DownloadIcon, FigmaEmbedCard } from "./components";
import { Card, CategoryIcon, DifficultyIcon } from "~/components";


// TODO: 
export const loader = ({ params }: LoaderFunctionArgs) => {
  const slug = params.slug ?? ""

  const challenge = getChallenge(slug)

  return { challenge, slug }
}


export default function Page() {
  const { challenge, slug } = useLoaderData<typeof loader>();



  if (!challenge) {
    return (
      <ChallengeNotFound slug={slug} />
    )
  }

  return (
    <div className="grid gap-5">
      <FigmaEmbedCard figmaId={challenge.figmaId} />
      <div className="grid w-full lg:grid-cols-3 gap-5">
        <div className="lg:col-span-2">
          <DescriptionCard name={challenge.name} description={challenge.description} />
        </div>
        <div className="flex flex-col gap-10">

          <Card>
            <div className="font-patrick-hand p-10 bg-home-brand flex flex-col gap-5 justify-center place-items-center">
              <a href={challenge.figmaUrl} target="_blank" className="bg-[#2ae876] flex place-items-center place-content-center gap-4 w-full py-4 border-2 border-black">
                <DownloadIcon />
                <p className="text-2xl text-black">Download Design</p>
              </a>

              <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" className="text-lg font-patrick-hand">Read The License</a>
            </div>
          </Card>
          <Card>
            <div className="p-10 bg-[#00fabe] grid gap-5">
              <div className="flex gap-4 font-patrick-hand">
                <DifficultyIcon />
                <div>
                  <p className="text-base text-black/60 uppercase">difficulty</p>
                  <p className="text-2xl font-semibold">{challenge.difficulty}</p>
                </div>
              </div>
              <div className="flex gap-4 font-patrick-hand">
                <CategoryIcon />
                <div>
                  <p className="text-base text-black/60 uppercase">category</p>
                  <p className="text-2xl font-semibold">{challenge.category}</p>
                </div>
              </div>
            </div>
          </Card>
          <Card>
            <div className="p-10 bg-[#ff508f] grid gap-5 font-patrick-hand">
              <p className="text-2xl font-semibold text-black">UI designer</p>
              <div className="flex gap-4">
                <div className="w-14 h-14 rounded-full border-4 border-black"></div>
                <div>
                  <p className="text-xl font-semibold text-black">Nauval</p>
                  <a href="" target="_blank" className="text-base hover:underline">Visit Profile</a>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
