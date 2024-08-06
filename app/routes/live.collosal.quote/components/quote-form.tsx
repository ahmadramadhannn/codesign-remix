import { Button, FormItem } from "~/routes/live.collosal/components"

export function QuoteForm() {

  return (
    <div className="bg-white/5 p-8">
      <form className="flex flex-col gap-5">
        <div className="flex gap-5">
          <div className="flex flex-col gap-2">
            <FormItem label="Name" id="name" type="text" />
          </div>

          <div className="flex flex-col gap-2">
            <FormItem label="Email" id="email" type="email" />
          </div>
        </div>

        <div className="flex gap-5">
          <div className="flex flex-col gap-2">
            <FormItem label="Company" id="company" type="text" />
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-2">
              <p className="text-white/60 text-sm">Company Size</p>
              <div className="relative">
                <div className="bg-inherit border-2 border-white/10 h-[44.4px] w-[12.6em]"></div>

                <div className="absolute w-4 h-4 rotate-45 border-b border-r border-white/40 bottom-5 right-4"></div>
              </div>

            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm text-white/60" htmlFor="problem">Tell Us Your Problem</label>
          <textarea id="problem" className="bg-inherit border border-white/10 focus:outline-none p-2 min-h-[10em]" />
        </div>

        <Button content="Send Quote" type="primary" />
      </form>
    </div>
  )
}
