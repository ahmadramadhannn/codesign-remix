import { PartnerLogo } from ".";

export function Partner() {
  return (
    <div className="border-t border-b border-white/10 flex place-content-center gap-12 items-center mt-3 p-10">
      <PartnerLogo name="github" />
      <PartnerLogo name="forbes" />
      <PartnerLogo name="google" />
      <PartnerLogo name="microsoft" />
      <PartnerLogo name="facebook" />
    </div>
  )
}
