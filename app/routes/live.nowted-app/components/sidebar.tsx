export function Sidebar() {
  return (
    <div id="sidebar" className="w-[25%] grid gap-8">
      <div className="flex justify-between items-center pl-8">
        <div className="flex gap-3">
          <h2 className="font-kaushan-script text-3xl">Nowted</h2>
          <img alt="small pen icon" src="/nowted-app/icons/pen.svg" className="-translate-y-3" />
        </div>
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
        <img className="absolute bottom-3 left-2" src="/nowted-app/search-icon-dark.svg" />
        <input className="font-semibold text-white/60 text-base p-2.5 pl-9 bg-white/5 rounded-md focus:outline-none placeholder:text-white/60" placeholder="Search note" />
      </div>

      <div className="grid gap-3 text-white/60">
        <p className="font-semibold text-sm pl-8">Recents</p>
        <div className="hover:bg-nowtedapp-secondary hover:text-white hover:font-semibold">
          <div className="p-2 pl-8 flex items-center gap-4">
            <img alt="file icon" src="/nowted-app/icons/file-icon.svg" />
            <p className="text-base mt-1">hello world</p>
          </div>
        </div>
      </div>

      <div className="grid gap-3 text-white/60">
        <div className="flex justify-between items-center">
          <p className="font-semibold text-sm pl-8">Folders</p>
          <button>
            <img alt="" src="/nowted-app/icons/add-folder-icon.svg" />
          </button>
        </div>
        <div className="flex items-center gap-4 p-2 pl-8 hover:bg-white/5">
          <img alt="folder icon" src="/nowted-app/icons/folder-icon.svg" />
          <p className="text-base mt-1">Work</p>
        </div>
      </div>

      <div className="grid gap-3 text-white/60">
        <p className="font-semibold text-sm pl-8">Home</p>
        <div className="flex items-center gap-4 p-2 pl-8 hover:bg-white/5">
          <img src="/nowted-app/icons/favorite-icon.svg" />
          <p className="text-base mt-1">Favorites</p>
        </div>
        <div className="flex items-center gap-4 p-2 pl-8 hover:bg-white/5">
          <img src="/nowted-app/icons/trash-icon.svg" />
          <p className="text-base mt-1">Trash</p>
        </div>
        <div className="flex items-center gap-4 p-2 pl-8 hover:bg-white/5">
          <img src="/nowted-app/icons/archieve-icon.svg" />
          <p className="text-base mt-1">Archived Notes</p>
        </div>
      </div>
    </div>
  )
}
