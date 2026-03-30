"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import {
  IconCertificate,
  IconChevronRight,
  IconCloudLock,
  IconDeviceDesktopAnalytics,
  IconNetwork,
  IconShieldCheck,
  IconVideo,
} from "@tabler/icons-react"

const services = [
  {
    slug: "it-support",
    title: "IT Support and Operational Guidance",
    description: "Project-based IT support and ongoing technical guidance for organizations that need reliable execution without hiring a full internal team.",
    icon: <IconDeviceDesktopAnalytics className="w-8 h-8 text-white" />,
    features: ["Small business support", "Vendor coordination", "Operational cleanup"]
  },
  {
    slug: "microsoft-365",
    title: "Microsoft 365 and Cloud Services",
    description: "Set up, secure, and improve cloud platforms with a local-first mindset that keeps environments practical, documented, and easier to support.",
    icon: <IconCloudLock className="w-8 h-8 text-[#b026ff]" />,
    features: ["Microsoft 365 and Entra", "Azure and AWS support", "Google and Apple environments"]
  },
  {
    slug: "network-wifi",
    title: "Network Infrastructure and Wi-Fi",
    description: "Design, deploy, and improve wired and wireless networks for offices, municipalities, campgrounds, and multi-building properties.",
    icon: <IconNetwork className="w-8 h-8 text-[#00f0ff]" />,
    features: ["Ubiquiti and UniFi deployments", "Public Wi-Fi and segmentation", "Coverage and connectivity improvements"]
  },
  {
    slug: "security-hardening",
    title: "Security Hardening and Documentation",
    description: "Reduce avoidable risk with practical security improvements, cleaner documentation, and controls that support real-world operations.",
    icon: <IconShieldCheck className="w-8 h-8 text-[#39ff14]" />,
    features: ["HIPAA-aware support", "NIST-informed security practices", "Policy and documentation help"]
  },
  {
    slug: "security-audits-pentesting",
    title: "Security Audits and Pentesting",
    description: "Test real exposure with black box and trusted-access assessments that come with remediation help instead of just a findings spreadsheet.",
    icon: <IconCertificate className="w-8 h-8 text-[#ff9f1c]" />,
    features: ["Black box pentests", "Trusted-access assessments", "Real-world risk review"]
  },
  {
    slug: "camera-systems",
    title: "Camera and Custom Local-First Solutions",
    description: "Build camera systems, smart technology, and custom on-site solutions with an emphasis on local processing, ownership, and fit-for-purpose design.",
    icon: <IconVideo className="w-8 h-8 text-[#39ff14]" />,
    features: ["Camera install and service", "Custom local AI options", "Residential and specialty projects"]
  }
]

export function ServicesSection() {
  return (
    <section id="services" className="relative border-t border-[var(--border)] py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="theme-heading mb-4 font-mono text-3xl font-bold md:text-5xl">
            CORE <span className="theme-accent-strong">SERVICES</span>
          </h2>
          <div className="theme-rule mx-auto mb-6 h-1 w-24" />
          <p className="theme-copy font-sans text-lg">
            NextGridIT delivers business-first infrastructure, cloud, security, and connected systems work for organizations that need practical results instead of generic MSP packaging.
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden glass-panel p-8 transition-colors duration-300 hover:bg-[var(--surface-muted)]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent-soft)] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="flex items-start gap-6 relative z-10">
                <div className="rounded-xl border border-[var(--border)] bg-[var(--surface-strong)] p-3 transition-colors duration-300 group-hover:border-[var(--border-strong)]">
                  {service.icon}
                </div>
                <div>
                  <h3 className="theme-heading mb-3 font-mono text-xl font-bold transition-colors group-hover:text-[var(--accent)]">
                    <Link href={`/services/${service.slug}/`} className="hover:text-[var(--accent)]">
                      {service.title}
                    </Link>
                  </h3>
                  <p className="theme-copy mb-6 leading-relaxed">
                    {service.description}
                  </p>

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
          <Link href="/services/" className="button-secondary rounded-full px-6 py-3 font-mono text-sm font-bold uppercase tracking-[0.2em]">
            Browse All Services
          </Link>
          <Link href="/technologies/" className="button-secondary rounded-full px-6 py-3 font-mono text-sm font-bold uppercase tracking-[0.2em]">
            Supported Technologies
          </Link>
        </div>
      </div>
    </section>
  )
}
