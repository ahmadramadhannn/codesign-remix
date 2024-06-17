type ButtonFilterItemProps = {
  onMouseDown: () => void
  categoryName: string;
  categorySelected: string;
}

export function ButtonFilterItem({ onMouseDown, categoryName, categorySelected }: ButtonFilterItemProps) {
  return (
    <button onMouseDown={onMouseDown} className={`bg-home-brand ${categorySelected === categoryName ? 'border-4 border-black' : ''} text-center text-black font-patrick-hand font-bold py-2 px-5`}>{categoryName}</button>
  )
}
