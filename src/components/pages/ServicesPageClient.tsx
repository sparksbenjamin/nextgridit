"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import {
  IconBrandWindows,
  IconCertificate,
  IconRouter,
  IconServerCog,
  IconShieldLock,
  IconVideo,
} from "@tabler/icons-react"

const detailedServices = [
  {
    id: "it-support",
    title: "Managed Security and Infrastructure",
    description: "Oversee identity, mail, hardening, baseline controls, and day-to-day infrastructure operations without defaulting to a commodity MSP model.",
    bullets: ["Security-minded operations", "Vendor and ownership governance", "Cleanup, hardening, and stabilization"],
  },
  {
    id: "microsoft-365",
    title: "Identity, Mail, and Cloud Platforms",
    description: "Plan, improve, and support Microsoft, Azure, AWS, Google, and Apple ecosystems with a focus on ownership, security, and lower attack surface.",
    bullets: ["Microsoft 365 and Entra administration", "Cloud migration and tenant cleanup", "Identity and mail control support"],
  },
  {
    id: "network-wifi",
    title: "Global Deployment Logistics and Networking",
    description: "Design, stage, and support reliable business and property networks with the operational discipline needed for regional or global rollout programs.",
    bullets: ["Field dispatch coordination", "Public and guest Wi-Fi deployments", "Infrastructure rollout planning"],
  },
  {
    id: "security-hardening",
    title: "Security Hardening, Documentation, and Compliance-Aware Support",
    description: "Review systems, improve access controls, clean up documentation, and reduce common security gaps while keeping the environment practical to operate.",
    bullets: ["HIPAA-aware support", "NIST-informed security practices", "Documentation, policies, and operational gap review"],
  },
  {
    id: "security-audits-pentesting",
    title: "Exposure Research and Penetration Testing",
    description: "Run black box and trusted-access assessments with practical reporting, remediation help, and a clearer picture of what is actually risky in the real environment.",
    bullets: ["Black box pentests", "Trusted-access internal assessments", "Risk review and exposure context"],
  },
  {
    id: "camera-systems",
    title: "Private AI, Cameras, and Local Intelligence Systems",
    description: "Install and support camera systems, smart technology, and private intelligence workflows with options for on-site processing and controlled analysis.",
    bullets: ["Full camera install and service", "Custom local AI processing", "Specialty visibility system design"],
  },
]

const icons = {
  "it-support": <IconServerCog className="w-10 h-10 text-[#39ff14]" />,
  "microsoft-365": <IconBrandWindows className="w-10 h-10 text-[#b026ff]" />,
  "network-wifi": <IconRouter className="w-10 h-10 text-[#00f0ff]" />,
  "security-hardening": <IconShieldLock className="w-10 h-10 text-white" />,
  "security-audits-pentesting": <IconCertificate className="w-10 h-10 text-[#ff9f1c]" />,
  "camera-systems": <IconVideo className="w-10 h-10 text-[#00f0ff]" />,
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
          NextGridIT provides managed security and infrastructure, identity, deployment logistics, exposure research, private AI, and operational support services for organizations that need practical technical leadership without generic MSP packaging.
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
              {icons[service.id as keyof typeof icons]}
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
              Frameworks matter when they connect to real systems, intelligence workflows, and real operations.
            </h2>
            <p className="theme-copy leading-relaxed">
              NextGridIT supports healthcare, public-sector, and business environments with technical guidance informed by HIPAA, PCI DSS, and NIST-based practices. We focus on implementation, documentation, security reviews, and risk reduction that can be tied back to the systems you actually run.
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
