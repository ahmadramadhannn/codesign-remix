export function FaqItem({ title, description }: { title: string, description: string }) {
  return (
    <div className="grid gap-3">
      <p id="title" className="font-bold text-xl">{title}</p>
      <p id="description" className="text-white/60 font-medium text-base">{description}</p>
    </div>
  )
}
