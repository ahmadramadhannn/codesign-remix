import { Outlet } from "@remix-run/react";
import { BaseLayout } from "~/components";

export default function Page() {
  return (
    <BaseLayout>
      <Outlet />
    </BaseLayout>
  )
}
