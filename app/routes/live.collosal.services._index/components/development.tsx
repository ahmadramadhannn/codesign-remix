import { SectionBadge, SectionTitle } from "~/routes/live.collosal/components";
import { DevelopmentIllustration, DevelopmentTypeCard } from ".";
import { Link } from "@remix-run/react";

export function Development() {
  return (
    <div className="grid grid-cols-2 items-center gap-24">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-3">
          <SectionBadge content="development" />
          <SectionTitle title="Create solutions to repetitive problems, design applications and access anywhere!" />
        </div>
        <p className="font-medium text-base text-white/40">Just tell us your repetitive problem or the primitive method used today, and we will create a digital solution.</p>
        <DevelopmentTypeCard icon="smartphone" type="Mobile" />
        <DevelopmentTypeCard icon="monitor" type="Desktop" />
        <DevelopmentTypeCard icon="globe" type="Web" />
        <Link
          to="./development"
          prefetch="intent"
          className="flex gap-4 items-center place-content-end"
        >
          <p className="font-semibold text-base">Service Detail</p>
          <img alt="" src="/collosal/arrow-right.svg" />
        </Link>
      </div>
      <div>
        <DevelopmentIllustration />
      </div>
    </div>
  )
}
