type UIDesignCardProps = {
  icon: string
  title: string
  content: string
}

export function UIDesignCard({ icon, title, content }: UIDesignCardProps) {
  return (
    <div className="rounded-md bg-white/5 h-[141px] grid gap-4 p-5">
      <div className="flex items-center gap-4">
        <img src={`/collosal/${icon}.svg`} />
        <p className="font-semibold text-base">{title}</p>
      </div>
      <p className="text-white/60 text-sm">{content}</p>
    </div>
  )
}
