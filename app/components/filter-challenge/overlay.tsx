type OverlayProps = {
  onMouseDown: () => void;
  isDropdownOpen: boolean;
}


export function Overlay({ onMouseDown, isDropdownOpen }: OverlayProps) {
  return (

    <div onMouseDown={onMouseDown} className={`absolute top-0 left-0 w-full h-full ${isDropdownOpen ? 'block' : 'hidden'} z-[99999]`}></div>
  )
}
