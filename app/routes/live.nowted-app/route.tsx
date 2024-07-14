import { Sidebar } from "./components"

export default function Page() {
  return (
    <div className="bg-nowtedapp-primary min-h-svh text-white font-source-sans-3">
      <div className="flex pt-10">
        <Sidebar />

        <div id="main-content" className="w-[75%]"> </div>

      </div>
    </div >
  )
}
