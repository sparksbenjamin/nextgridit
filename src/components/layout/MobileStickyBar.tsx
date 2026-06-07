"use client"

import Link from "next/link"
import { IconPhone } from "@tabler/icons-react"

export function MobileStickyBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-[var(--border)] bg-[var(--background-elevated)]/95 backdrop-blur-xl md:hidden safe-area-bottom">
      <div className="grid grid-cols-2 gap-0">
        <a
          href="tel:8647800202"
          className="flex items-center justify-center gap-2 px-4 py-3 font-mono text-sm font-bold uppercase tracking-wider theme-copy hover:bg-[var(--accent-soft)] transition-colors"
        >
          <IconPhone className="h-4 w-4" />
          <span>Call Now</span>
        </a>
        <Link
          href="/contact"
          className="flex items-center justify-center gap-2 px-4 py-3 font-mono text-sm font-bold uppercase tracking-wider bg-[var(--accent)] text-[var(--background)] hover:opacity-90 transition-opacity"
        >
          Free Assessment
        </Link>
      </div>
    </div>
  )
}
