import { FormItem } from ".";

export function ContactForm() {
  return (
    <div className="bg-white/5 grid h-full p-10">
      <form className="flex flex-col gap-5">
        <div className="grid grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <FormItem name="Name" id="name" />
          </div>
          <div className="flex flex-col gap-2">
            <FormItem name="Email" id="email" type="email" />
          </div>
        </div>

        <div className="grid gap-2">
          <FormItem name="Subject" id="subject" />
        </div>

        <div className="grid gap-2">
          <label className="text-white/60">Messages</label>
          <textarea className="bg-white/5 border-2 border-white/10 min-h-[10em] focus:outline-none p-3"></textarea>
        </div>

        <button className="font-semibold text-base bg-collosal-primary py-3">Send Message</button>
      </form>
    </div>
  )
}
