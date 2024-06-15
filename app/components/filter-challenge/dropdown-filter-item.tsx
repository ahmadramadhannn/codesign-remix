type DropdownFilterItemProps = {
  difficulty: string;
  onMouseDown: () => void;
  selectedDifficulty: string;
}

export function DropdownFilterItem({ difficulty, selectedDifficulty, onMouseDown }: DropdownFilterItemProps) {
  return (
    <div onMouseDown={onMouseDown} className={`${selectedDifficulty == difficulty ? 'bg-home-brand/50' : 'bg-white'} w-full h-full py-2 px-3 z-[999]`}>
      <p className="text-lg text-black/50">{difficulty}</p>
    </div>
  )
}
