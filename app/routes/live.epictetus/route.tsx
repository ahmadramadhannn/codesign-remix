import { Outlet } from "@remix-run/react";
import { Header, Footer } from "./components";

export default function Page() {
  return (
    <div className="min-h-svh w-full bg-gradient-to-r from-[#374151] to-[#111827] text-white font-patrick-hand">
      <div className="p-11 w-full xl:w-[80em] mx-auto">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </div>
  )
}


