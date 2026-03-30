"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { IconMenu2, IconX } from "@tabler/icons-react"
import { ThemeToggle } from "@/components/theme/ThemeToggle"

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)
  const pathname = usePathname()
  const mobileMenuId = "mobile-navigation"

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/service-areas", label: "Service Areas" },
    { href: "/industries", label: "Industries" },
    { href: "/compliance", label: "Compliance" },
    { href: "/guides", label: "Guides" },
    { href: "/faq", label: "FAQ" },
    { href: "/contact", label: "Contact" },
  ]

  function unlockHackerTheme(event: React.MouseEvent<HTMLDivElement>) {
    if (event.altKey && event.shiftKey) {
      window.localStorage.setItem("nextgridit-hacker-unlocked", "true")
      window.dispatchEvent(new Event("nextgridit:hacker-unlocked"))
    }
  }

  return (
    <header className="fixed top-0 z-50 w-full border-b border-[var(--border)] bg-[var(--background-elevated)]/90 backdrop-blur-xl transition-all duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-2 group">
              <div
                onClick={unlockHackerTheme}
                className="brand-mark flex h-10 w-10 items-center justify-center rounded-xl duration-300"
                title="NextGridIT"
              >
                <span className="font-mono text-xl font-bold leading-none">NX</span>
              </div>
              <span className="font-mono text-xl font-bold tracking-wider theme-heading">
                NEXT<span className="theme-accent-strong">GRID</span><span className="ml-1 text-sm theme-soft">IT</span>
              </span>
            </Link>
          </div>

          <nav aria-label="Primary" className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname === link.href || pathname.startsWith(`${link.href}/`)
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative group font-mono text-sm uppercase tracking-wide transition-colors duration-200",
                    isActive ? "theme-accent-strong" : "theme-copy hover:text-[var(--accent)]"
                  )}
                >
                  {link.label}
                  <span className={cn(
                    "absolute -bottom-1.5 left-0 h-[2px] w-full origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100",
                    isActive ? "scale-x-100 bg-[var(--accent-strong)]" : "bg-[var(--accent)]"
                  )} />
                </Link>
              )
            })}
          </nav>

          <div className="flex items-center gap-2 md:gap-4">
            <ThemeToggle className="scale-90 origin-right sm:scale-100" />
            <div className="hidden md:block">
            <Link
              href="/contact"
              className="button-primary relative overflow-hidden rounded-full px-6 py-2.5 font-mono text-sm font-bold uppercase tracking-[0.2em]"
            >
              <span className="relative z-10">START BY EMAIL</span>
            </Link>
            </div>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-controls={mobileMenuId}
              aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
              className="rounded-md p-2 theme-copy hover:bg-[var(--accent-soft)] hover:text-[var(--foreground)]"
            >
              {isOpen ? <IconX className="w-6 h-6" /> : <IconMenu2 className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      <div
        id={mobileMenuId}
        className={cn(
          "absolute w-full origin-top overflow-hidden border-b border-[var(--border)] bg-[var(--background-elevated)]/95 transition-all duration-300 ease-in-out md:hidden",
          isOpen ? "max-h-96 opacity-100 py-4" : "max-h-0 opacity-0 py-0"
        )}
      >
        <nav aria-label="Mobile" className="px-4 space-y-4">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname === link.href || pathname.startsWith(`${link.href}/`)

            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "block font-mono text-xl uppercase tracking-wider",
                  isActive ? "theme-accent-strong" : "theme-copy"
                )}
              >
                {link.label}
              </Link>
            )
          })}
          <div className="border-t border-[var(--border)] pt-4">
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="button-primary inline-block w-full rounded-full px-6 py-3 text-center font-mono text-sm font-bold uppercase tracking-[0.2em]"
            >
              START BY EMAIL
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}
