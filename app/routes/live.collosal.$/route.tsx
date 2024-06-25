import { BaseLayout } from "~/components";
import { Button, PageTitle } from "../live.collosal/components";

export default function Page() {
  return (
    <BaseLayout>
      <div className="grid place-content-center place-items-center text-center gap-8">
        <p className="font-semibold text-base text-collosal-red uppercase">error</p>
        <div className="w-6/12 mx-auto">
          <PageTitle title="The page you are looking for in not on this website, please check again" />
        </div>
        <p className="text-base font-medium text-white/60 w-5/12 mx-auto">
          The system cannot find the page you are looking for, maybe you have the wrong path or the page has been deleted.
        </p>
        <Button type="secondary" content="Back to Home" link href=".." />
      </div>
    </BaseLayout>
  )
}
