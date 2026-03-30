import Link from "next/link"
import { IconMail, IconMapPin, IconShieldLock } from "@tabler/icons-react"

export function Footer() {
  return (
    <footer className="relative z-10 overflow-hidden border-t border-[var(--border)] bg-[var(--background-elevated)]/70">
      <div className="theme-rule absolute left-0 top-0 h-[1px] w-full opacity-70" />

      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 border-l-2 border-[var(--accent-alt)] pl-4 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="theme-heading font-mono text-2xl font-bold tracking-wider">
                NEXT<span className="theme-accent-alt">GRID</span><span className="theme-soft ml-1 text-sm">IT</span>
              </span>
            </div>
            <p className="theme-copy mb-6 text-sm">
              Network infrastructure, security, and IT support for organizations across Upstate South Carolina.
            </p>
            <div className="flex space-x-4">
              <Link href="mailto:contact@nextgridit.com" className="theme-copy hover:text-[var(--accent)]">
                <span className="sr-only">Email</span>
                <IconMail className="h-5 w-5" />
              </Link>
              <Link href="/contact" className="theme-copy hover:text-[var(--accent-alt)]">
                <span className="sr-only">Contact</span>
                <IconShieldLock className="h-5 w-5" />
              </Link>
              <Link href="/contact" className="theme-copy hover:text-[var(--accent-strong)]">
                <span className="sr-only">Location</span>
                <IconMapPin className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="theme-heading mb-4 font-mono text-sm font-semibold uppercase tracking-wider opacity-80">Solutions</h3>
            <ul className="space-y-3">
              {[
                { label: "IT Support", href: "/services/it-support/" },
                { label: "Cloud Services", href: "/services/microsoft-365/" },
                { label: "Network & Wi-Fi", href: "/services/network-wifi/" },
                { label: "Camera Systems", href: "/services/camera-systems/" },
              ].map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="theme-copy relative flex items-center text-sm transition-all duration-200 before:absolute before:-ml-3 before:text-[var(--accent-strong)] before:opacity-0 before:content-['>'] hover:pl-2 hover:text-[var(--accent)] hover:before:opacity-100">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="theme-heading mb-4 font-mono text-sm font-semibold uppercase tracking-wider opacity-80">Company</h3>
            <ul className="space-y-3">
              {[
                { label: "About Us", href: "/about" },
                { label: "Compliance & Frameworks", href: "/compliance" },
                { label: "Case Studies", href: "/case-studies" },
                { label: "Company Facts", href: "/company-facts" },
                { label: "Process", href: "/process" },
                { label: "Contact", href: "/contact" },
                { label: "Privacy Policy", href: "/privacy" },
              ].map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="theme-copy text-sm transition-all duration-200 hover:pl-2 hover:text-[var(--accent)]">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="theme-heading mb-4 font-mono text-sm font-semibold uppercase tracking-wider opacity-80">Resources</h3>
            <div className="theme-terminal relative overflow-hidden rounded-2xl p-4 font-mono text-xs group">
              <div className="absolute left-0 top-0 h-[1px] w-full bg-[var(--accent-soft)]"></div>
              <p className="mb-2 opacity-80">&gt; canonical facts: /company-facts</p>
              <p className="mb-2 opacity-80">&gt; AI ingestion: /llms.txt</p>
              <p className="mb-4 opacity-80">&gt; status: crawl-ready</p>
              <Link
                href="/faq"
                className="button-secondary inline-block mt-2 w-full rounded-full px-4 py-2 text-center tracking-wider"
              >
                VIEW FAQ
              </Link>
              <p className="theme-terminal-muted mt-3 text-[11px]">Local-first systems. Practical execution. Clean handoff.</p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-[var(--border)] pt-8 md:flex-row">
          <p className="theme-soft text-center font-mono text-sm md:text-left">
            &copy; {new Date().getFullYear()} NextgridIT Systems. All rights reserved. <span className="theme-accent-strong">SECURE: true</span>
          </p>
          <div className="theme-soft flex gap-4 font-mono text-xs">
            <span>SYS_STATUS: <span className="theme-accent">ONLINE</span></span>
            <span>UPTIME: <span className="theme-accent-strong">99.9%</span></span>
          </div>
        </div>
      </div>
    </footer>
  )
}
