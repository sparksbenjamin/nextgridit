"use client";

import dynamic from "next/dynamic";

const MapChart = dynamic(() => import("@/components/ui/MapChart"), {
  ssr: false,
  loading: () => (
    <div className="flex h-full min-h-[250px] items-center justify-center rounded-2xl border border-[var(--border)] bg-[var(--surface-strong)]">
      <div className="theme-soft font-mono text-xs uppercase tracking-widest animate-pulse">Loading map...</div>
    </div>
  ),
});

export { MapChart };
