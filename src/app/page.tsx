"use client";

import { Simple } from "@/components/Simple";

export default function Home() {
  return (
    <div className="flex h-screen w-screen">
      <main className="flex h-full w-full flex-col gap-2">
          <Simple 
            title="Alternem"
            subtitle="Inc"
            tagLine="Be Chill, Be Creative and Have fun"
            className="bg-black text-neutral-600"
            />
            <a href="http://www.createvideo.cloud" className="w-full mt-6 bg-black text-neutral-600"> Make gifts with CreateVideo.cloud by Alternem </a>
      </main>
    </div>
  );
}
