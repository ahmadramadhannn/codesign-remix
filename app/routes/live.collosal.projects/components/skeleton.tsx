import { MobileSkeleton, DesktopSkeleton } from "."

type SkeletonProps = {
  appType: "mobile" | "desktop"
}

export function Skeleton({ appType }: SkeletonProps) {
  return (
    <div className="relative border border-white/10 bg-collosal-card-dark h-[441px] flex flex-col gap-5 place-items-center">
      {appType === "mobile" ? <MobileSkeleton /> : <DesktopSkeleton />}
    </div>
  )
}
