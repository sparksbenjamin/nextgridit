"use client";

import dynamic from "next/dynamic";

const MarkdownContent = dynamic(
  () => import("@/components/content/MarkdownContent").then((mod) => ({ default: mod.MarkdownContent })),
  {
    loading: () => (
      <div className="flex min-h-[200px] items-center justify-center">
        <div className="theme-soft font-mono text-xs uppercase tracking-widest animate-pulse">Loading content...</div>
      </div>
    ),
  },
);

export { MarkdownContent };
