import { ContactForm, ContactInfo } from "./components";

export default function Page() {
  return (
    <div className="w-11/12 grid grid-cols-2 gap-32 items-center h-[508px] mx-auto">
      <div className="grid gap-7 max-h-max">
        <p className="text-base uppercase text-collosal-green font-semibold">contact</p>
        <h2 className="font-bold text-4xl leading-relaxed">We love receiving messages from you, we are waiting for it.</h2>
        <div className="grid gap-7">

          <ContactInfo icon="phone-call" name="Phone" content="+62 1234 8921" />
          <ContactInfo icon="mail" name="Email" content="support@collosal.id" />
        </div>
      </div>

      <ContactForm />
    </div>
  )
}
