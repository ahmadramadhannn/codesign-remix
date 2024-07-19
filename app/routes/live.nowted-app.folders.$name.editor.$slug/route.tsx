import { LoaderFunctionArgs, json } from "@remix-run/node"
import { useLoaderData } from "@remix-run/react"
import { useState } from "react"
import { Options } from "./components"

export const loader = ({ params }: LoaderFunctionArgs) => {
  return json({ slug: params.slug, name: params.name })
}

// TODO: separations of concerns, reusability.
export default function Page() {
  const { slug, name } = useLoaderData<typeof loader>()
  const [body, setBody] = useState<string>("")
  const [isOptionsOpen, setIsOptionsOpen] = useState<boolean>(false)
  const [selectedText, setSelectedText] = useState<string>("")

  return (
    <div className="p-10 flex flex-col h-full gap-10 relative">
      <div className="flex justify-between relative">
        <h1 className="text-3xl font-semibold">{slug}</h1>
        <button onMouseDown={() => setIsOptionsOpen(!isOptionsOpen)}>
          <img src="/nowted-app/icons/option-icon.svg" alt="options icon" />
        </button>
        {
          isOptionsOpen ? <Options /> : <> </>
        }
      </div>
      <div className="flex flex-col gap-8">
        <div className="w-full border-b border-white/10 pb-5">
          <div className="flex gap-14 items-center w-52">
            <div className="flex gap-3 items-center">
              <img src="/nowted-app/icons/calendar-icon.svg" />
              <p className="text-sm text-white/60 font-semibold">Date</p>
            </div>
            <p className="text-sm font-semibold underline">{new Date().toLocaleDateString()}</p>
          </div>
        </div>
        <div className="w-full border-b border-white/10 pb-5">
          <div className="flex gap-10 items-center w-52">
            <div className="flex gap-6 items-center">
              <img src="/nowted-app/icons/folder-icon.svg" />
              <p className="text-sm text-white/60 font-semibold">Folder</p>
            </div>
            <p className="text-sm font-semibold underline">{name}</p>
          </div>
        </div>
        <div className="mb-10">
          <div className="grid text-sm [&>textarea]:text-inherit after:text-inherit [&>textarea]:resize-none [&>textarea]:overflow-hidden [&>textarea]:[grid-area:1/1/2/2] after:[grid-area:1/1/2/2] after:whitespace-pre-wrap after:invisible after:content-[attr(data-cloned-val)_'_'] after:border">
            <textarea
              onChange={(event) => {
                event.target.parentNode.dataset.clonedVal = event.target.value
                setBody(event.target.value)
              }
              }
              className="w-full text-slate-600 bg-inherit text-base appearance-none rounded-lg px-3.5 py-2.5 outline-none" name="message" id="message" placeholder="Your note..." rows={3} required></textarea>
          </div>
        </div>
        <button className="py-3 bg-white/10 rounded-lg absolute bottom-1 mb-4 w-11/12 mx-auto -left-[50%] -right-[50%]">Save</button>
      </div>
    </div>
  )
}
