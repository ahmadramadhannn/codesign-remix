export function DiscussIllustration() {
  return (
    <div className="grid items-center gap-12 relative">
      <div className="relative">
        <div className="p-5 border border-white/10 bg-white/5 rounded-2xl w-[241px] h-[89px] flex flex-col gap-4">
          <div className="rounded-xl bg-white/5 w-[95%] h-4"></div>
          <div className="rounded-xl bg-white/5 w-14 h-4"></div>
        </div>
        <div className="absolute -left-7 -bottom-6">
          <img alt="" src="/collosal/unknown-person-1.png" />
        </div>
      </div>
      <div className="grid items-end place-content-end mr-10 relative">
        <div className="border border-white/10 w-60 h-[89px] border-white/10 rounded-2xl bg-white/5 p-5 flex flex-col gap-4">
          <div className="rounded-xl bg-white/5 w-[95%] h-4"></div>
          <div className="rounded-xl bg-white/5 w-24 h-4"></div>
        </div>
        <div className="absolute -right-7 -bottom-6">
          <img alt="" src="/collosal/unknown-person-2.png" />
        </div>
      </div>
      <div className="bg-white/5 absolute left-[50%] -translate-x-[50%] brightness-[.2] w-[270px] h-[270px] rounded-full"></div>
      <div className="bg-white/5 absolute brightness-[.2] left-[50%] -translate-x-[50%] w-[406px] h-[406px] rounded-full"></div>
      <div className="bg-white/5 absolute brightness-[.2] left-[50%] -translate-x-[50%] w-[184px] h-[184px] rounded-full"></div>
      <div className="bg-white/10 absolute brightness-[.2] w-12 h-2 rounded-xl bottom-0 -translate-x-[50%] left-[50%] translate-y-3"></div>
      <div className="bg-white/10 absolute brightness-[.2] w-12 h-2 rounded-xl bottom-24 -translate-x-[50%] left-[50%]"></div>

    </div>
  )
}
