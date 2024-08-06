import { BaseLayout } from "~/components";
import { Button, PageDescription, PageTitle, SectionBadge } from "../live.collosal/components";
import { QuoteForm } from "./components";

export default function Page() {
  return (
    <BaseLayout>
      <div className="grid grid-cols-2 items-center gap-32">


        <div className="grid gap-8">
          <SectionBadge content="send quote" />
          <PageTitle title="Tell us about your problem and how we can help" />
          <PageDescription description="We are happy to help you, tell us what is the problem with your company, and we are ready to answer these problems. It usually takes a few minutes for us to respond." />

          <div className="w-max">

            <Button content="Ask Usk" type="secondary" />
          </div>
        </div>

        <QuoteForm />
      </div>
    </BaseLayout>
  )
}
