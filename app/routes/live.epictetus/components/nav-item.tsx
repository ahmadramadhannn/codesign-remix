type NavItemProps = {
  children?: React.ReactNode
  name: string
}

export function NavItem({ name, children }: NavItemProps) {
  return (
    <li className="relative">
      <button name="item" className="text-base font-normal">{name}</button>
      {children}
    </li>
  )
}
