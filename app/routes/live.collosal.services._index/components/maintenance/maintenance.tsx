import { SectionBadge, SectionTitle } from "~/routes/live.collosal/components";
import { Feature } from ".";
import { Link } from "@remix-run/react";

export function Maintenance() {
  return (
    <div className="grid grid-cols-2 gap-10">
      <div>
        <img src="/collosal/maintenance-illustration.svg" alt="maintenance illustration" />
      </div>
      <div className="flex flex-col gap-7">
        <div className="grid gap-3">
          <SectionBadge content="maintenance" />
          <SectionTitle title="Think of your server as your own child, taking care of it every day" />
        </div>
        <p className="text-white/40 font-medium text-base">We will back up your servers every day, clean them every week, upgrade them when there is an update.</p>
        <div className="grid grid-cols-2 gap-6">
          <Feature icon="download" content="Back up every day" />
          <Feature icon="arrow-up" content="Upgrade" />
          <Feature icon="refresh-ccw" content="Cleaning every week" />
          <Feature icon="check-circle" content="Fixing error" />
        </div>
        <Link
          to="./development"
          prefetch="intent"
          className="flex gap-2 items-center place-content-end mt-4"
        >
          <p
            className="font-semibold text-base">
            Service Detail
          </p>
          <img src="/collosal/arrow-right.svg" />
        </Link>
      </div>
    </div>
  )
}
