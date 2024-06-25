// TODO:
type BaseLayoutProps = {
  children: React.ReactNode
}

export function BaseLayout({ children }: BaseLayoutProps) {
  return (
    <div className="mx-auto w-11/12">
      {children}
    </div>
  )
}
