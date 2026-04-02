"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import {
  IconCertificate,
  IconChevronRight,
  IconCloudLock,
  IconCpu2,
  IconDeviceDesktopAnalytics,
  IconNetwork,
  IconShieldCheck,
  IconVideo,
} from "@tabler/icons-react"

const services = [
  {
    slug: "it-support",
    title: "Infrastructure Hardening & Perimeter Surveillance",
    description:
      "Operator-led hardening across identity, mail, network edge, and externally visible infrastructure for environments that cannot afford defensive drift.",
    icon: <IconDeviceDesktopAnalytics className="h-8 w-8 text-white" />,
    features: ["Perimeter control reviews", "Identity and mail hardening", "Infrastructure governance"],
  },
  {
    slug: "microsoft-365",
    title: "Identity, Mail, and Cloud Platforms",
    description:
      "Tune Microsoft 365, Entra ID, Azure, Google, and Apple ecosystems for stronger control, cleaner ownership, and lower exposure.",
    icon: <IconCloudLock className="h-8 w-8 text-[#b026ff]" />,
    features: ["Microsoft 365 and Entra", "Azure and hybrid identity", "Cross-platform administration"],
  },
  {
    slug: "network-wifi",
    title: "Global Infrastructure Deployment & Network Operations",
    description:
      "Coordinate staging, dispatch, routing, Wi-Fi, segmentation, and connectivity for regional or global infrastructure programs that need disciplined execution.",
    icon: <IconNetwork className="h-8 w-8 text-[#00f0ff]" />,
    features: ["150+ country infrastructure reach", "Field dispatch coordination", "Network and connectivity design"],
  },
  {
    slug: "security-hardening",
    title: "Security Hardening and Compliance Alignment",
    description:
      "Reduce avoidable risk with practical controls, clearer documentation, and implementation support informed by regulated operating environments.",
    icon: <IconShieldCheck className="h-8 w-8 text-[#39ff14]" />,
    features: ["HIPAA-aware support", "NIST-informed practices", "Documentation and policy alignment"],
  },
  {
    slug: "security-audits-pentesting",
    title: "Exposure Research and Penetration Testing",
    description:
      "Move beyond vulnerability dumps with targeted research, attack-surface reviews, black box testing, and remediation guidance.",
    icon: <IconCertificate className="h-8 w-8 text-[#ff9f1c]" />,
    features: ["Black box pentests", "Surface exposure audits", "Real-world risk review"],
  },
  {
    slug: "private-air-gapped-ai",
    title: "Private & Air-Gapped AI Implementation",
    description:
      "Leverage LLMs (Qwen/Mistral) for enterprise coding and threat analysis without third-party data leakage through dedicated on-premise GPU clusters.",
    icon: <IconCpu2 className="h-8 w-8 text-[#39ff14]" />,
    features: ["Qwen and Mistral", "Dedicated GPU clusters", "100% data privacy"],
  },
  {
    slug: "camera-systems",
    title: "Perimeter Surveillance & Sensor Systems",
    description:
      "Design local-first surveillance and sensor infrastructure that improves visibility without surrendering the evidence plane to a cloud vendor.",
    icon: <IconVideo className="h-8 w-8 text-[#94a3b8]" />,
    features: ["Local capture infrastructure", "Camera and sensor coverage", "On-site retention controls"],
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="relative border-t border-[var(--border)] py-24">
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="theme-heading mb-4 font-mono text-3xl font-bold md:text-5xl">
            CORE <span className="theme-accent-strong">CAPABILITIES</span>
          </h2>
          <div className="theme-rule mx-auto mb-6 h-1 w-24" />
          <p className="theme-copy font-sans text-lg">
            NextGridIT blends infrastructure hardening, exposure research, sovereign AI, surveillance systems, and global infrastructure execution into one delivery architecture.
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
            href="/labs/"
            className="button-secondary rounded-full px-6 py-3 font-mono text-sm font-bold uppercase tracking-[0.2em]"
          >
            Visit NextGrid Labs
          </Link>
        </div>
      </div>
    </section>
  )
}
