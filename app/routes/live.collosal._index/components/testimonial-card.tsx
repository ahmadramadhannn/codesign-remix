export function TestimonialCard() {
  return (
    <article className={`p-10 flex flex-col gap-8 text-center justify-center place-items-center rounded-md bg-white/5 min-h-[10em] hover:border hover:border-[#6016fc] hover:-translate-y-5`}>
      <div>
        <img src={`/collosal/henry-avatar.png`} />
      </div>
      <p id="name" className="text-lg font-bold">Courtney Henry</p>
      <p id="company" className="text-white/60 font-medium text-sm">Biffco Enterprises Ltd.</p>
      <p id="description" className="text-base font-medium text-white/60">"Very easy to use. I made back the purchase price in just 48 hours! It's great. It's is both attractive and highly adaptable."</p>
    </article>
  )
}
