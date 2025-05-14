"use client";

import { Simple } from "@/components/Simple";

export default function Home() {
  return (
    <div className="flex h-screen w-screen">
      <main className="flex h-full w-full">
          <Simple 
            title="Alternem"
            subtitle="Inc"
            tagLine="Be Chill, Be Creative and Have fun"
            className="bg-black text-neutral-600"
            />
      </main>
    </div>
  );
}
