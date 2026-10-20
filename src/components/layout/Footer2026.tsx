import Link from "next/link"
import { IconBrandGithub, IconBrandLinkedin, IconMail, IconPhone } from "@tabler/icons-react"
import { siteConfig } from "@/lib/site-data"

const serviceLinks = [
  ["MSP Transition", "/services/msp-transition/"],
  ["Vendor Lockout Recovery", "/services/vendor-lockout-recovery/"],
  ["HIPAA Assessment", "/services/hipaa-security-assessment/"],
  ["Infrastructure Hardening", "/services/infrastructure-hardening/"],
  ["Microsoft 365", "/services/microsoft-365/"],
  ["Network & Wi-Fi", "/services/network-wifi/"],
] as const

const companyLinks = [
  ["About", "/about/"],
  ["Case Studies", "/case-studies/"],
  ["Project Fit", "/project-fit/"],
  ["Service Areas", "/service-areas/"],
  ["Guides", "/guides/"],
  ["Technologies", "/technologies/"],
  ["Compliance", "/compliance/"],
  ["FAQ", "/faq/"],
  ["Our Process", "/process/"],
  ["Local-First Systems", "/local-first/"],
  ["Company Facts", "/company-facts/"],
  ["Contact", "/contact/"],
] as const

export function Footer2026() {
  const phoneHref = `tel:${siteConfig.phone.replace(/[^\d+]/g, "")}`

  return (
    <footer className="site-footer border-t border-[var(--border)] bg-[var(--background-elevated)]">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_0.8fr_0.8fr_1fr]">
          <div>
            <Link href="/" className="site-footer-logo">NEXT<span>GRID</span>IT</Link>
            <p className="theme-copy mt-5 max-w-sm text-sm leading-7">Helping Upstate South Carolina organizations take control of the systems they depend on—with practical infrastructure, stronger security, and clear ownership.</p>
            <div className="mt-6 flex flex-wrap gap-2"><span className="theme-chip px-3 py-1.5 text-xs">20+ years in IT</span><span className="theme-chip px-3 py-1.5 text-xs">HIPAA / NIST / MARS-E</span></div>
            <div className="mt-7 flex items-center gap-4">
              <a className="theme-copy hover:text-[var(--accent)]" href="mailto:contact@nextgridit.com" aria-label="Email NextGridIT"><IconMail className="h-5 w-5" /></a>
              <a className="theme-copy hover:text-[var(--accent)]" href={phoneHref} aria-label="Call NextGridIT"><IconPhone className="h-5 w-5" /></a>
              <a className="theme-copy hover:text-[var(--accent)]" href="https://www.linkedin.com/company/nextgridit" target="_blank" rel="noopener noreferrer" aria-label="NextGridIT on LinkedIn"><IconBrandLinkedin className="h-5 w-5" /></a>
              <a className="theme-copy hover:text-[var(--accent)]" href="https://github.com/nextgridit-team" target="_blank" rel="noopener noreferrer" aria-label="NextGridIT on GitHub"><IconBrandGithub className="h-5 w-5" /></a>
            </div>
          </div>
          <div><h2 className="site-footer-heading">Services</h2><nav className="site-footer-links">{serviceLinks.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}</nav></div>
          <div><h2 className="site-footer-heading">Explore</h2><nav className="site-footer-links">{companyLinks.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}</nav></div>
          <div className="site-footer-contact"><p className="site-footer-heading">Start a conversation</p><p className="theme-copy text-sm leading-6">Tell us what is not working, what you need to own, or what you are preparing for.</p><Link href="/contact/" className="button-primary mt-5 inline-flex rounded-full px-5 py-3 text-sm font-semibold">Contact NextGridIT</Link></div>
        </div>
        <div className="mt-14 flex flex-col justify-between gap-4 border-t border-[var(--border)] pt-6 text-sm md:flex-row"><p className="theme-soft">© {new Date().getFullYear()} NextGridIT Systems LLC · Based in Seneca, SC</p><div className="flex flex-wrap gap-5"><a className="theme-soft hover:text-[var(--accent)]" href="mailto:contact@nextgridit.com">contact@nextgridit.com</a><a className="theme-soft hover:text-[var(--accent)]" href={phoneHref}>{siteConfig.phoneDisplay}</a><Link className="theme-soft hover:text-[var(--accent)]" href="/privacy/">Privacy</Link></div></div>
      </div>
    </footer>
  )
}
