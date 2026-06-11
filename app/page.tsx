"use client";

import dynamic from "next/dynamic";

const HomeContent = dynamic(() => import("./home-content").then((mod) => ({ default: mod.HomeContent })), {
  loading: () => <div className="w-full h-screen bg-white dark:bg-[#0f1117]" />,
  ssr: false,
});

export default function Home() {
  return <HomeContent />;
}
