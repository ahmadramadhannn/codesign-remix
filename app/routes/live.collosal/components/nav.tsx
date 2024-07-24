import { NavItem } from "."

export function Nav() {
  return (
    <nav className="lg:col-span-2 grid place-content-center">
      <ul className="flex items-center gap-10">
        <NavItem name="Services" />
        <NavItem name="How We Work" />
        <NavItem name="Projects" />
        <NavItem name="About" />
      </ul>
    </nav>
  )
}
