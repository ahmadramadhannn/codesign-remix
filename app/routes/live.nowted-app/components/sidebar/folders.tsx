import { Link } from "@remix-run/react"
import { Folder } from "../../types"
import { useState } from "react"

type FoldersProps = {
  folders: Folder[]
  folderSelection: string
  onMouseDown: (folderName: string) => void
}

export function Folders({ folders, folderSelection, onMouseDown }: FoldersProps) {
  return (
    <>
      <div className="flex justify-between items-center">
        <p className="font-semibold text-sm pl-8">Folders</p>
        <button>
          <img alt="" src="/nowted-app/icons/add-folder-icon.svg" />
        </button>
      </div>

      {
        folders.map((folder, index) => (
          <Link
            prefetch="intent"
            to={`./folders/${folder.name.replace(" ", "-").toLowerCase()}`}
            onMouseDown={() => onMouseDown(folder.name)}
            key={index}
            className={
              `cursor-pointer flex items-center gap-4 p-2 pl-8 hover:bg-white/5 ${folderSelection == folder.name ? "bg-white/5 font-semibold text-white" : ""}`}
          >
            <img alt="folder icon" src="/nowted-app/icons/folder-icon.svg" />
            <p className="text-base mt-1">{folder.name}</p>
          </Link>
        ))
      }

    </>
  )
}
