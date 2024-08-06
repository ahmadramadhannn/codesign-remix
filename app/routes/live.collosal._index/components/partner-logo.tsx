

export function PartnerLogo({ name }: { name: string }) {
  return (
    <img className="w-max" alt="logo of loyal customers" src={`/collosal/${name}-logo.png`} />
  )
}
