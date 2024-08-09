import { NavItem } from "."

export function Nav() {
  return (
    <nav>
      <ul className="lg:flex gap-10">
        <NavItem name="UI Design" />
        <NavItem name="Front-end" />
        <NavItem name="Back-end" />
        <NavItem name="Lainnya" />
      </ul>
    </nav>
  )
}
