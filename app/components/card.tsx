type CardProps = {
  children: React.ReactNode
}


export function Card({ children }: CardProps) {
  return (
    <article className="w-full border-4 border-black relative">

      {children}
      <div className="-z-[99] bg-black left-4 w-full h-full absolute top-4"></div>
    </article>
  )
}
