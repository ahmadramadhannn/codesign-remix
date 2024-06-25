import { ProjectDetailLabel, ProjectDetailValue } from "."

export function ProjectDetailInfo({ label, value }: { label: string, value: string }) {
  return (
    <div className="grid gap-3">
      <ProjectDetailLabel label={label} />
      <ProjectDetailValue value={value} />
    </div>
  )
}
