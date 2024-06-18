import { Card } from "~/components";

export function FigmaEmbedCard({ embedUrl }: { embedUrl: string }) {
  return (
    <Card>
      <div className="bg-white relative">

        <iframe src={embedUrl} className="w-full h-[14em] md:h-[24em] lg:h-[30em]" allowFullScreen></iframe>
      </div>
    </Card>
  )
}
