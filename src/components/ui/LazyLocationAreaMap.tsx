"use client";

import dynamic from "next/dynamic";

const LocationAreaMap = dynamic(
  () => import("@/components/ui/LocationAreaMap").then((mod) => ({ default: mod.LocationAreaMap })),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-full min-h-[320px] items-center justify-center rounded-3xl border border-[var(--border)] bg-[var(--surface-strong)]">
        <div className="theme-soft font-mono text-xs uppercase tracking-widest animate-pulse">Loading map...</div>
      </div>
    ),
  },
);

export { LocationAreaMap };
