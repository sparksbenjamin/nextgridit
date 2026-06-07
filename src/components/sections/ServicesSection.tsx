"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import {
  IconCertificate,
  IconChevronRight,
  IconCloudLock,
  IconCpu2,
  IconHeartbeat,
  IconLockOpen,
  IconNetwork,
  IconReplace,
  IconServerCog,
  IconShieldCheck,
  IconVideo,
} from "@tabler/icons-react"

const services = [
  {
    slug: "msp-transition",
    title: "MSP Transition & Vendor Independence",
    description:
      "Fire your MSP and take back control of your IT. We manage the full transition — from auditing what they manage to verifying they no longer have access.",
    icon: <IconReplace className="h-8 w-8 text-[#39ff14]" />,
    features: ["MSP dependency audit", "Transition coordination", "Post-transition verification"],
  },
  {
    slug: "vendor-lockout-recovery",
    title: "Vendor Lockout Recovery",
    description:
      "When your IT provider walks away and takes your credentials, we break back in and hand you the keys — with proper authorization documentation.",
    icon: <IconLockOpen className="h-8 w-8 text-[#ff9f1c]" />,
    features: ["Authorized system recovery", "Credential reset and handoff", "Legal documentation trail"],
  },
  {
    slug: "hipaa-security-assessment",
    title: "HIPAA Security Assessment",
    description:
      "Real security assessments for medical practices — findings prioritized by actual risk, not theoretical severity. Based on experience assessing 100+ medical offices.",
    icon: <IconHeartbeat className="h-8 w-8 text-[#b026ff]" />,
    features: ["HIPAA Security Rule mapping", "Risk-based remediation plan", "Audit-ready documentation"],
  },
  {
    slug: "vulnerability-assessment",
    title: "Vulnerability Assessment & Remediation",
    description:
      "Find what's actually vulnerable in your environment and get a plan to fix it. Enterprise-grade tools and process, sized for your business.",
    icon: <IconCertificate className="h-8 w-8 text-[#ff9f1c]" />,
    features: ["Tenable.sc scanning", "Risk-based prioritization", "Remediation planning"],
  },
  {
    slug: "infrastructure-hardening",
    title: "Infrastructure Hardening & Security Cleanup",
    description:
      "Close the gaps in identity, mail, network edges, and inherited infrastructure. Not break-fix — a deliberate effort to reduce your attack surface.",
    icon: <IconServerCog className="h-8 w-8 text-white" />,
    features: ["Identity and mail controls", "Perimeter review", "Documentation and ownership cleanup"],
  },
  {
    slug: "microsoft-365",
    title: "Microsoft 365 & Cloud Services",
    description:
      "Tenant cleanup, MFA rollout, identity hardening, and migration support. 4,000+ accounts migrated with zero data loss.",
    icon: <IconCloudLock className="h-8 w-8 text-[#b026ff]" />,
    features: ["Tenant cleanup and hardening", "Identity and access controls", "Migration planning"],
  },
  {
    slug: "network-wifi",
    title: "Network Infrastructure & Wi-Fi",
    description:
      "Reliable network deployment, segmentation, and Wi-Fi for businesses that need connectivity that actually works across the property.",
    icon: <IconNetwork className="h-8 w-8 text-[#00f0ff]" />,
    features: ["Ubiquiti UniFi deployments", "Guest and staff segmentation", "Multi-building connectivity"],
  },
  {
    slug: "security-audits-pentesting",
    title: "Penetration Testing & Security Audits",
    description:
      "Black box and trusted-access testing with real-world risk review. Active bug bounty researcher on Microsoft and HackerOne platforms.",
    icon: <IconShieldCheck className="h-8 w-8 text-[#39ff14]" />,
    features: ["Black box pentests", "Trusted-access reviews", "Remediation validation"],
  },
  {
    slug: "camera-systems",
    title: "Camera Systems & Surveillance",
    description:
      "Local-first camera and sensor infrastructure. You own your footage, your retention policies, and your system.",
    icon: <IconVideo className="h-8 w-8 text-[#94a3b8]" />,
    features: ["Camera planning and install", "Local NVR design", "Network-integrated deployment"],
  },
  {
    slug: "private-ai",
    title: "Private AI Consulting",
    description:
      "Guidance on deploying local AI that keeps your data inside your environment. Consulting and planning — not vaporware promises.",
    icon: <IconCpu2 className="h-8 w-8 text-[#39ff14]" />,
    features: ["AI readiness assessment", "Hardware and model guidance", "Deployment roadmap"],
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="relative border-t border-[var(--border)] py-24">
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="theme-heading mb-4 font-mono text-3xl font-bold md:text-5xl">
            OUR <span className="theme-accent-strong">SERVICES</span>
          </h2>
          <div className="theme-rule mx-auto mb-6 h-1 w-24" />
          <p className="theme-copy font-sans text-lg">
            From MSP transitions and vendor lockout recovery to HIPAA assessments and
            infrastructure hardening — we help Upstate SC businesses take back control
            of their IT.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 xl:grid-cols-2">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-panel group relative overflow-hidden p-8 transition-colors duration-300 hover:bg-[var(--surface-muted)]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent-soft)] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative z-10 flex items-start gap-6">
                <div className="rounded-xl border border-[var(--border)] bg-[var(--surface-strong)] p-3 transition-colors duration-300 group-hover:border-[var(--border-strong)]">
                  {service.icon}
                </div>
                <div>
                  <h3 className="theme-heading mb-3 font-mono text-xl font-bold transition-colors group-hover:text-[var(--accent)]">
                    <Link href={`/services/${service.slug}/`} className="hover:text-[var(--accent)]">
                      {service.title}
                    </Link>
                  </h3>
                  <p className="theme-copy mb-6 leading-relaxed">{service.description}</p>

                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="theme-copy flex items-center gap-2 font-mono text-sm">
                        <IconChevronRight className="h-4 w-4 theme-accent-strong opacity-70" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="relative z-10 mt-6">
                <Link
                  href={`/services/${service.slug}/`}
                  className="theme-accent font-mono text-sm uppercase tracking-[0.2em]"
                >
                  View service page
                </Link>
              </div>

              <div className="absolute right-0 top-0 h-8 w-8 translate-x-2 -translate-y-2 transform border-r-2 border-t-2 border-transparent transition-all duration-300 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:border-[var(--accent-strong)]/40" />
              <div className="absolute bottom-0 left-0 h-8 w-8 -translate-x-2 translate-y-2 transform border-b-2 border-l-2 border-transparent transition-all duration-300 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:border-[var(--accent)]/40" />
            </motion.div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/services/"
            className="button-secondary rounded-full px-6 py-3 font-mono text-sm font-bold uppercase tracking-[0.2em]"
          >
            Browse All Services
          </Link>
          <Link
            href="/contact/"
            className="button-primary rounded-full px-6 py-3 font-mono text-sm font-bold uppercase tracking-[0.2em]"
          >
            Get a Free Assessment
          </Link>
        </div>
      </div>
    </section>
  )
}