import { DevelopmentIllustration } from "~/routes/live.collosal.services._index/components"

// TODO: 
export function Overview() {
  const items = ["smartphone", "monitor", "globe"]
  return (
    <div className="grid grid-cols-2 items-center gap-4 w-11/12">
      <DevelopmentIllustration />

      <div className="flex flex-col gap-10">
        <p className="text-base text-white/60 font-medium">Just tell us your repetitive problem or the primitive method used today, and we will create a digital solution.</p>
        <p className="text-base text-white/60 font-medium">
          We can build you a website, a mobile app and a desktop app. All types of applications have a good security system, are easy to maintain, and are high speed.
        </p>

        <ul className="list-disc flex flex-col pl-4 gap-4 text-white font-medium">
          <li>Avoid potential bugs with unit testing</li>
          <li>Removing unused code will speed up the application</li>
          <li>The modern design pleases the users</li>
          <li>A good UX will not disappoint users</li>
        </ul>
      </div>
    </div>
  )
}
