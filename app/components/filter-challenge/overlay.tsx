type OverlayProps = {
  onMouseDown: () => void;
  isDropdownOpen: boolean;
}


export function Overlay({ onMouseDown, isDropdownOpen }: OverlayProps) {
  return (

    <div onMouseDown={onMouseDown} className={`absolute top-0 border border-red-500 left-0 w-full h-[100svh] scroll-y-hidden ${isDropdownOpen ? 'fixed' : 'hidden'} z-[99999]`}></div>
  )
}
