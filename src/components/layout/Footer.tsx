import Link from "next/link"
import { IconMail, IconMapPin, IconPhone } from "@tabler/icons-react"
import { siteConfig } from "@/lib/site-data"

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
              Helping Upstate South Carolina businesses take back control of their IT —
              from MSP transitions and vendor lockout recovery to HIPAA security
              assessments and infrastructure hardening.
            </p>
            <div className="mb-6 flex flex-wrap gap-2">
              <span className="theme-chip px-3 py-1 font-mono text-[11px] uppercase tracking-[0.2em]">
                20+ years experience
              </span>
              <span className="theme-chip px-3 py-1 font-mono text-[11px] uppercase tracking-[0.2em]">
                HIPAA / NIST / MARS-E
              </span>
              <span className="theme-chip px-3 py-1 font-mono text-[11px] uppercase tracking-[0.2em]">
                Bug bounty researcher
              </span>
            </div>
            <div className="flex space-x-4">
              <a href="mailto:contact@nextgridit.com" className="theme-copy hover:text-[var(--accent)]">
                <span className="sr-only">Email</span>
                <IconMail className="h-5 w-5" />
              </a>
              <a href={`tel:${siteConfig.phone.replace(/[^\d+]/g, "")}`} className="theme-copy hover:text-[var(--accent-alt)]">
                <span className="sr-only">Phone</span>
                <IconPhone className="h-5 w-5" />
              </a>
              <Link href="/contact" className="theme-copy hover:text-[var(--accent-strong)]">
                <span className="sr-only">Location</span>
                <IconMapPin className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="theme-heading mb-4 font-mono text-sm font-semibold uppercase tracking-wider opacity-80">Services</h3>
            <ul className="space-y-3">
              {[
                { label: "MSP Transition", href: "/services/msp-transition/" },
                { label: "Vendor Lockout Recovery", href: "/services/vendor-lockout-recovery/" },
                { label: "HIPAA Assessment", href: "/services/hipaa-security-assessment/" },
                { label: "Vulnerability Assessment", href: "/services/vulnerability-assessment/" },
                { label: "Infrastructure Hardening", href: "/services/infrastructure-hardening/" },
                { label: "Microsoft 365", href: "/services/microsoft-365/" },
                { label: "Network & Wi-Fi", href: "/services/network-wifi/" },
                { label: "Penetration Testing", href: "/services/security-audits-pentesting/" },
                { label: "Camera Systems", href: "/services/camera-systems/" },
                { label: "Private AI Consulting", href: "/services/private-ai/" },
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
                { label: "NextGrid Labs", href: "/labs" },
                { label: "Guides", href: "/guides" },
                { label: "Project Fit", href: "/project-fit" },
                { label: "Local-First Systems", href: "/local-first" },
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
              <p className="mb-2 opacity-80">&gt; msp transition: /services/msp-transition</p>
              <p className="mb-2 opacity-80">&gt; vendor lockout: /services/vendor-lockout-recovery</p>
              <p className="mb-2 opacity-80">&gt; hipaa assessment: /services/hipaa-security-assessment</p>
              <p className="mb-2 opacity-80">&gt; field guides: /guides</p>
              <p className="mb-4 opacity-80">&gt; project questions: /faq</p>
              <div className="grid gap-2">
                <Link
                  href="/labs"
                  className="button-secondary inline-block w-full rounded-full px-4 py-2 text-center tracking-wider"
                >
                  VIEW LABS
                </Link>
                <Link
                  href="/guides"
                  className="button-secondary inline-block w-full rounded-full px-4 py-2 text-center tracking-wider"
                >
                  VIEW GUIDES
                </Link>
                <Link
                  href="/faq"
                  className="button-secondary inline-block w-full rounded-full px-4 py-2 text-center tracking-wider"
                >
                  VIEW FAQ
                </Link>
              </div>
              <p className="theme-terminal-muted mt-3 text-[11px]">Upstate SC. Project-led. Your IT, under your control.</p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-[var(--border)] pt-8 md:flex-row">
          <p className="theme-soft text-center font-mono text-sm md:text-left">
            &copy; {new Date().getFullYear()} NextGridIT Systems LLC. Based in Seneca, SC. Helping Upstate South Carolina businesses take back control of their IT.
          </p>
          <div className="theme-soft flex gap-4 font-mono text-xs">
            <span>Email: <span className="theme-accent">contact@nextgridit.com</span></span>
            <span>Phone: <span className="theme-accent-strong">864-780-0202</span></span>
          </div>
        </div>
      </div>
    </footer>
  )
}