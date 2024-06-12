import { NavLink } from "@remix-run/react";

type NavItemProps = {
  icon: React.ReactNode;
  path: string;
  name: string;
}

export function NavItem({ icon, path, name }: NavItemProps) {
  const active = ({ isActive }: { isActive: boolean }) => {
    return `font-patrick-hand grid place-items-center hover:text-[#02fd2a] gap-2 ${isActive ? 'text-[#02fd2a]' : 'text-[#ffd466]'}`
  }
  return (
    <li className="group">
      <NavLink to={path} className={active} >
        {icon}
        <p className="text-lg lg:text-2xl">{name}</p>
      </NavLink>
    </li>
  )
}
