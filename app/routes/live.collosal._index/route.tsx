import { Features, Hero, Testimonial } from "./components";

export default function Page() {
  return (
    <div className="w-full">
      <div className="w-11/12 mx-auto grid gap-12">

        <Hero />
        <Features />
        <Testimonial />
      </div>
    </div>
  )
}
