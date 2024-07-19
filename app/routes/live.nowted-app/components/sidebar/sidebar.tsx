import { useState } from "react"
import { Section, Folders, More } from "."
import { Folder } from "../../types";
import { Link } from "@remix-run/react";

export function Sidebar() {
  const [folderSelection, setFolderSection] = useState<string>("Work");
  // TODO:
  const folders: Folder[] = [
    { id: 1, name: "Personal" },
    { id: 2, name: "Work" },
    { id: 3, name: 'Travel' },
    { id: 4, name: "Abc Def" }
  ]
  return (
    <div id="sidebar" className="w-[25%] flex flex-col gap-8">
      <div className="flex justify-between items-center pl-8 pt-10">
        <Link prefetch="intent" to="./" className="flex gap-3">
          <h2 className="font-kaushan-script text-3xl">Nowted</h2>
          <img alt="small pen icon" src="/nowted-app/icons/pen.svg" className="-translate-y-3" />
        </Link>
        <img alt="search icon white color" src="/nowted-app/icons/search-icon.svg" />
      </div>

      <div className="pl-8">
        <button className="bg-white/5 rounded-md p-2.5 w-full grid items-center place-content-center">
          <div className="flex items-center gap-3">
            <img src="/nowted-app/icons/plus.svg" />
            <p className="font-semibold text-base">New Note</p>
          </div>
        </button>
      </div>


      <div className="relative hidden">
        <img className="absolute bottom-3 left-2" src="/nowted-app/icons/search-icon-dark.svg" />
        <input className="font-semibold text-white/60 text-base p-2.5 pl-9 bg-white/5 rounded-md focus:outline-none placeholder:text-white/60" placeholder="Search note" />
      </div>

      <Section>
        <p className="font-semibold text-sm pl-8">Recents</p>
        <div className="hover:bg-nowtedapp-secondary hover:text-white hover:font-semibold">
          <div className="p-2 pl-8 flex items-center gap-4">
            <img alt="file icon" src="/nowted-app/icons/file-icon.svg" />
            <p className="text-base mt-1">hello world</p>
          </div>
        </div>
      </Section>

      <Section>
        <Folders
          onMouseDown={(folderSelection) => setFolderSection(folderSelection)}
          folders={folders}
          folderSelection={folderSelection}
        />
      </Section>

      <Section>

        <More />
      </Section>
    </div>
  )
}
