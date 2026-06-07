"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import {
  IconBrandWindows,
  IconCertificate,
  IconCpu2,
  IconHeartbeat,
  IconLockOpen,
  IconNetwork,
  IconReplace,
  IconRouter,
  IconServerCog,
  IconShieldCheck,
  IconVideo,
} from "@tabler/icons-react"

const detailedServices = [
  {
    id: "msp-transition",
    title: "MSP Transition & Vendor Independence",
    description: "Fire your MSP and take back control of your IT. We manage the full transition — from auditing what they manage to verifying they no longer have access.",
    bullets: ["MSP dependency audit and documentation", "Transition coordination and cutover", "Post-transition verification and credential reset"],
  },
  {
    id: "vendor-lockout-recovery",
    title: "Vendor Lockout Recovery",
    description: "When your IT provider walks away with your credentials, we break back in and hand you the keys. Every engagement starts with proper authorization documentation.",
    bullets: ["Authorized system access recovery", "Legal documentation and signoff", "New credential sets and security controls"],
  },
  {
    id: "hipaa-security-assessment",
    title: "HIPAA Security Assessment",
    description: "Real security assessments for medical practices — findings prioritized by actual risk, not theoretical severity. Based on experience assessing 100+ medical offices and daily Medicaid compliance work.",
    bullets: ["HIPAA Security Rule mapping", "Risk-based remediation prioritization", "Audit-ready documentation"],
  },
  {
    id: "vulnerability-assessment",
    title: "Vulnerability Assessment & Remediation Planning",
    description: "Enterprise-grade vulnerability assessment using the same tools and process used in compliance environments — sized and priced for your business.",
    bullets: ["Tenable.sc scanning and assessment", "Risk-based prioritization", "Optional remediation support"],
  },
  {
    id: "infrastructure-hardening",
    title: "Infrastructure Hardening & Security Cleanup",
    description: "Close the gaps in identity, mail, network edges, and inherited infrastructure. A deliberate effort to reduce your attack surface and operational confusion.",
    bullets: ["Identity and mail hardening", "Perimeter review and cleanup", "Documentation and ownership mapping"],
  },
  {
    id: "microsoft-365",
    title: "Microsoft 365 & Cloud Services",
    description: "Tenant cleanup, MFA rollout, identity hardening, and migration support. 4,000+ Microsoft 365 accounts migrated with zero data loss.",
    bullets: ["Tenant review and remediation", "Identity and access controls", "Cloud migration planning"],
  },
  {
    id: "network-wifi",
    title: "Network Infrastructure & Wi-Fi Deployment",
    description: "Reliable network deployment, segmentation, and Wi-Fi for businesses that need connectivity that actually works. Past projects include full coverage under budget and multi-site WAN upgrades with zero downtime.",
    bullets: ["Ubiquiti UniFi deployments", "Guest and staff segmentation", "Multi-building connectivity planning"],
  },
  {
    id: "security-audits-pentesting",
    title: "Penetration Testing & Security Audits",
    description: "Black box and trusted-access testing with real-world risk review. Active bug bounty researcher on Microsoft and HackerOne platforms keeps methodology current.",
    bullets: ["Black box pentests", "Trusted-access assessments", "Remediation validation"],
  },
  {
    id: "camera-systems",
    title: "Camera Systems & Surveillance Infrastructure",
    description: "Local-first camera and sensor infrastructure. You own your footage, your retention policies, and your system. No mandatory cloud dependency.",
    bullets: ["Camera planning and installation", "Local NVR design and deployment", "Network-integrated design"],
  },
  {
    id: "private-ai",
    title: "Private AI Consulting",
    description: "Guidance on deploying local AI that keeps your data inside your environment. Consulting and planning — realistic assessment of what local AI can and cannot do for you today.",
    bullets: ["AI readiness assessment", "Hardware and model recommendations", "Deployment roadmap"],
  },
]

const icons: Record<string, React.ReactNode> = {
  "msp-transition": <IconReplace className="w-10 h-10 text-[#39ff14]" />,
  "vendor-lockout-recovery": <IconLockOpen className="w-10 h-10 text-[#ff9f1c]" />,
  "hipaa-security-assessment": <IconHeartbeat className="w-10 h-10 text-[#b026ff]" />,
  "vulnerability-assessment": <IconCertificate className="w-10 h-10 text-[#ff9f1c]" />,
  "infrastructure-hardening": <IconServerCog className="w-10 h-10 text-white" />,
  "microsoft-365": <IconBrandWindows className="w-10 h-10 text-[#b026ff]" />,
  "network-wifi": <IconRouter className="w-10 h-10 text-[#00f0ff]" />,
  "security-audits-pentesting": <IconShieldCheck className="w-10 h-10 text-[#39ff14]" />,
  "camera-systems": <IconVideo className="w-10 h-10 text-[#94a3b8]" />,
  "private-ai": <IconCpu2 className="w-10 h-10 text-[#39ff14]" />,
}

export function ServicesPageClient() {
  return (
    <div className="container mx-auto px-4 py-24 min-h-[70vh]">
      <div className="mb-16">
        <h1 className="theme-heading mb-6 font-mono text-4xl font-bold uppercase tracking-wider md:text-5xl">
          Service <span className="bg-gradient-to-r from-[var(--accent)] to-[var(--accent-strong)] bg-clip-text text-transparent">Capabilities</span>
        </h1>
        <div className="theme-rule mb-6 h-1 w-24" />
        <p className="theme-copy max-w-3xl font-sans text-lg leading-relaxed">
          From MSP transitions and vendor lockout recovery to HIPAA security assessments
          and infrastructure hardening — NextGridIT helps Upstate South Carolina businesses
          take back control of their IT.
        </p>
      </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {detailedServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-panel group relative overflow-hidden border border-[var(--border)] p-8 scroll-mt-28 transition-colors duration-300 hover:border-[var(--border-strong)]"
          >
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[var(--accent-soft)] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            <div className="mb-6 inline-block rounded-xl border border-[var(--border)] bg-[var(--surface-strong)] p-4 shadow-inner">
              {icons[service.id]}
            </div>

            <h2 className="theme-heading mb-4 font-mono text-2xl font-bold transition-colors group-hover:text-[var(--accent-strong)]">{service.title}</h2>
            <p className="theme-copy font-sans leading-relaxed">{service.description}</p>

            <ul className="theme-copy mt-6 space-y-2 text-sm">
              {service.bullets.map((bullet) => (
                <li key={bullet} className="flex items-center gap-2 font-mono">
                  <span className="h-2 w-2 rounded-full bg-[var(--accent-strong)]" />
                  {bullet}
                </li>
              ))}
            </ul>

            <div className="theme-soft mt-8 flex items-center gap-2 border-t border-[var(--border)] pt-4 font-mono text-sm">
              <span className="h-2 w-2 rounded-full bg-[var(--accent-alt)] animate-pulse" />
              ENGAGEMENT: <span className="theme-accent">PROJECT-LED</span>
            </div>

            <Link
              href={`/services/${service.id}/`}
              className="theme-accent mt-6 inline-block font-mono text-sm uppercase tracking-[0.2em]"
            >
              View dedicated page
            </Link>
          </motion.div>
        ))}
      </div>

      <section className="mt-16 grid gap-8 lg:grid-cols-3">
        <div className="glass-panel border border-[var(--border)] p-8 lg:col-span-2">
          <div className="max-w-4xl space-y-4">
            <div className="theme-accent-strong flex items-center gap-3 font-mono text-sm uppercase tracking-[0.3em]">
              <IconCertificate className="w-5 h-5" />
              Compliance-aware support
            </div>
            <h2 className="theme-heading font-mono text-2xl font-bold md:text-3xl">
              Frameworks matter when they connect to real systems and real operations.
            </h2>
            <p className="theme-copy leading-relaxed">
              NextGridIT supports healthcare, public-sector, and business environments with
              technical guidance informed by HIPAA, PCI DSS, MARS-E, and NIST 800-53. This
              comes from direct daily experience in Medicaid compliance operations — not from
              reading a framework document once.
            </p>
          </div>
        </div>

        <div className="glass-panel border border-[var(--border)] p-8">
          <h2 className="theme-heading mb-4 font-mono text-2xl font-bold">
            Supporting pages
          </h2>
          <div className="space-y-4">
            <Link href="/industries/" className="block rounded-2xl border border-[var(--border)] bg-[var(--surface-strong)] px-4 py-3 text-sm theme-copy hover:border-[var(--border-strong)]">
              Industry pages
            </Link>
            <Link href="/service-areas/" className="block rounded-2xl border border-[var(--border)] bg-[var(--surface-strong)] px-4 py-3 text-sm theme-copy hover:border-[var(--border-strong)]">
              Service area pages
            </Link>
            <Link href="/labs/" className="block rounded-2xl border border-[var(--border)] bg-[var(--surface-strong)] px-4 py-3 text-sm theme-copy hover:border-[var(--border-strong)]">
              NextGrid Labs
            </Link>
            <Link href="/technologies/" className="block rounded-2xl border border-[var(--border)] bg-[var(--surface-strong)] px-4 py-3 text-sm theme-copy hover:border-[var(--border-strong)]">
              Technology coverage
            </Link>
            <Link href="/project-fit/" className="block rounded-2xl border border-[var(--border)] bg-[var(--surface-strong)] px-4 py-3 text-sm theme-copy hover:border-[var(--border-strong)]">
              Project fit guide
            </Link>
            <Link href="/faq/" className="block rounded-2xl border border-[var(--border)] bg-[var(--surface-strong)] px-4 py-3 text-sm theme-copy hover:border-[var(--border-strong)]">
              Frequently asked questions
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}