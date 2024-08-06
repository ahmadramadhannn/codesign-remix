
type PricingCardProps = {
  name: string
  price: number
  benefits: string[]
  color: string
}

export function PricingCard({ name, price, benefits, color }: PricingCardProps) {
  return (
    <article className={`p-10 rounded-md ${color == "purple" ? "bg-[#3f2379]" : color == "blue" ? "bg-[#233679]" : "bg-[#792366]"} w-[328px] h-[474px]`}>
      <div className="pt-5 flex flex-col gap-10">
        <div className="flex gap-14">
          <p id="pricing-name" className="font-bold text-base">{name}</p>
          <div className="flex flex-col gap-2">
            <p className="text-[12px] text-white/60">Starting From</p>
            <p id="price" className="text-4xl font-bold">{price}$</p>
          </div>
        </div>
        <div id="benefits" className="text-center flex flex-col gap-5 mt-8">
          {benefits.map((benefit, index) => (
            <p key={index} className="font-medium text-base">{benefit}</p>
          ))}
        </div>
        <button className="bg-white text-[#3f2379] text-center font-semibold text-base rounded-md p-2">Detail</button>
      </div>
    </article>
  )
}
