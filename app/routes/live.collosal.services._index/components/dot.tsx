type DotProps = {
  color: "red" | "yellow" | "green"
}

export function Dot({ color }: DotProps) {
  const colorVariants = {
    red: "bg-[#fc165b]",
    yellow: "bg-[#fca016]",
    green: "bg-[#16fca9]"
  }
  return (
    <div className={`w-[8.30px] h-[8.30px] rounded-full ${colorVariants[color]}`}>
    </div>
  )
}
