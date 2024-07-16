export function Section({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid gap-3 text-white/60">
      {children}
    </div>
  )
}
