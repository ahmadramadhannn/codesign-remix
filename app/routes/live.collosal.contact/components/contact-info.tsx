type ContactInfoProps = {
  name: string;
  content: string;
  icon: string;
}

export function ContactInfo({ name, content, icon }: ContactInfoProps) {
  return (
    <div className="flex items-center gap-5">
      <div className="w-16 h-16 bg-white/5 grid items-center place-content-center">
        <img src={`/collosal/${icon}.svg`} alt="a white icon for contact info" />
      </div>

      <div className="grid gap-2">
        <p className="font-medium text-base text-white/60">{name}</p>
        <p className="font-bold text-xl">{content}</p>
      </div>
    </div>
  )
}
