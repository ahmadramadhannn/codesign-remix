import { useState } from "react";
import { Card } from "~/components";

export function FigmaEmbedCard({ figmaId }: { figmaId: string }) {
  const [loading, setLoading] = useState<boolean>(true);


  const embedUrl = `https://figma.com/embed?embed_host=localhost&amp;hub_file_id=${figmaId}&amp;community_viewer=true`
  return (
    <Card>
      <div className="bg-white">
        <div className="h-[14em] md:h-[24em] lg:h-[33em] relative">
          <div className={`${loading ? 'block' : 'hidden'} w-full absolute top-0 h-full bg-black grid items-center place-content-center font-patrick-hand`}>
            <p className="text-2xl lg:text-4xl text-home-brand">Loading Figma Preview</p>
          </div>

          <iframe onLoad={() => setLoading(false)} loading="lazy" src={embedUrl} className="w-full h-full" allowFullScreen></iframe>
        </div>
      </div>
    </Card>
  )
}
