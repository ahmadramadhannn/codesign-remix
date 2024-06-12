import { ChallengeIcon, ManualIcon, NavItem, TwitterIcon } from "."

export function Nav() {
  return (
    <nav className="grid lg:place-content-end absolute lg:static bottom-0 right-0 w-full border-t-4 border-black lg:border-none p-4 xl:p-0">
      <ul className="grid grid-cols-3 lg:flex lg:items-center sm:gap-9 xl:gap-12">
        <NavItem icon={<ChallengeIcon />} path="/" name="Challenges" />
        <NavItem icon={<ManualIcon />} path="/manual" name="Manual" />
        <NavItem icon={<TwitterIcon />} path="https://twitter.com/mhdnauvalazhar" name="@mhdnauvalazhar" />
      </ul>
    </nav>
  )
}
