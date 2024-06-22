export function Hero() {
  return (
    <div className="grid text-center place-items-center mt-16 gap-6">
      <h3 className="font-semibold text-base text-collosal-green uppercase">client development driven</h3>
      <h2 className="font-bold text-4xl leading-relaxed w-[55%]">We Design. We Develop. We Ship. In The Same Day.</h2>
      <p className="font-medium text-base text-white/60 w-[47%]">We are committed to not making clients wait. We will deliver the work as quickly as possible. Even on the same day. Even so, we do not reduce the quality of our work.</p>
      <div className="flex gap-5">
        <button className="py-2 w-[12.5em] bg-collosal-primary text-white text-center font-semibold text-base">
          Send Quote
        </button>
        <button className="py-2 w-[12.5em] bg-white/10 text-center font-semibold text-base">Learn More</button>
      </div>
    </div>
  )
}
