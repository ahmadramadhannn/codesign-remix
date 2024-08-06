import { Features, Hero, HowWeWork, Partner, Team, Project, Services, Testimonials } from "./components";

export default function Page() {
  return (
    <div className="w-full">
      <div className="w-11/12 mx-auto grid gap-24 mb-24">
        <Hero />
        <Features />
        <Partner />
        <HowWeWork />
        <Team />
        <div className="h-[1px] w-full bg-white/10"></div>
        <Project />
      </div>
      <Services />
      <Testimonials />
    </div>
  )
}
