import { NavLink } from "@remix-run/react";

export function NavItem({ name }: { name: string }) {
  return (
    <li className="text-base text-white/80">
      <NavLink prefetch="intent" to={`./${name.split(" ").join("-").toLowerCase()}`} className={({ isActive }) => isActive ? 'text-white font-bold' : 'text-white/80'}>
        <span className="text-base hover:text-white">{name}</span>

      </NavLink>
    </li>
  )
}
