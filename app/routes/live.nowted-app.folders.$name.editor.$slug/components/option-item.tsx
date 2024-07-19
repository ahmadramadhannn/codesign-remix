type OptionItemProps = {
  icon: string;
  content: string;
}

export function OptionItem({ icon, content }: OptionItemProps) {
  return (
    <div className="flex items-center gap-5">
      <img src={`/nowted-app/icons/${icon}.svg`} />
      <p className="text-base">{content}</p>
    </div>
  )
}
