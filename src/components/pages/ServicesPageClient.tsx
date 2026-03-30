"use client"

import { motion } from "framer-motion"
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
    id: "support",
    title: "IT Support and Operational Guidance",
    description: "Support day-to-day systems, reduce recurring issues, and bring structure to the technology side of the business without sounding like just another MSP.",
    bullets: ["Business-first troubleshooting", "Vendor and project coordination", "Cleanup and stabilization work"],
  },
  {
    id: "cloud",
    title: "Microsoft 365 and Cloud Services",
    description: "Plan, improve, and support cloud environments across Microsoft, Azure, AWS, Google, and Apple ecosystems where practical administration and local ownership still matter.",
    bullets: ["Microsoft 365 and Entra administration", "Cloud migration and tenant cleanup", "Identity, access, and collaboration support"],
  },
  {
    id: "network",
    title: "Network Infrastructure, Public Wi-Fi, and Connectivity",
    description: "Design, upgrade, and support reliable business and property networks with a focus on Ubiquiti and UniFi environments, segmented access, and multi-building coverage.",
    bullets: ["Office and municipal network refreshes", "Public and guest Wi-Fi deployments", "Campground and property connectivity design"],
  },
  {
    id: "security",
    title: "Security Hardening, Documentation, and Compliance-Aware Support",
    description: "Review systems, improve access controls, clean up documentation, and reduce common security gaps while keeping the environment practical to operate.",
    bullets: ["HIPAA-aware support", "NIST-informed security practices", "Documentation, policies, and operational gap review"],
  },
  {
    id: "camera",
    title: "Camera Systems and Local-First Smart Deployments",
    description: "Install and support camera systems, smart technology, and custom local-first solutions with options for on-site processing and tailored site design.",
    bullets: ["Full camera install and service", "Custom local AI video processing", "Residential and specialty system design"],
  },
]

const icons = {
  support: <IconServerCog className="w-10 h-10 text-[#39ff14]" />,
  cloud: <IconBrandWindows className="w-10 h-10 text-[#b026ff]" />,
  network: <IconRouter className="w-10 h-10 text-[#00f0ff]" />,
  security: <IconShieldLock className="w-10 h-10 text-white" />,
  camera: <IconVideo className="w-10 h-10 text-[#00f0ff]" />,
}

export function ServicesPageClient() {
  return (
    <div className="container mx-auto px-4 py-24 min-h-[70vh]">
      <div className="mb-16">
        <h1 className="text-4xl md:text-5xl font-mono font-bold text-white mb-6 uppercase tracking-wider">
          Service <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] to-[#39ff14]">Capabilities</span>
        </h1>
        <div className="w-24 h-1 bg-[#00f0ff] mb-6 shadow-[0_0_10px_rgba(0,240,255,0.5)]" />
        <p className="text-gray-300 font-sans text-lg max-w-3xl leading-relaxed">
          NextGridIT provides project-led infrastructure, cloud, security, Wi-Fi, camera, and operational support services for organizations that need practical technical leadership and cleaner systems without generic MSP packaging.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {detailedServices.map((service, index) => (
          <motion.div
            key={service.id}
            id={service.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="glass-panel p-8 border border-white/10 hover:border-[#39ff14]/50 transition-colors duration-300 relative group overflow-hidden scroll-mt-28"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#00f0ff]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

            <div className="mb-6 p-4 bg-black inline-block rounded-sm border border-white/5 shadow-inner">
              {icons[service.id as keyof typeof icons]}
            </div>

            <h2 className="text-2xl font-mono font-bold text-white mb-4 group-hover:text-[#39ff14] transition-colors">{service.title}</h2>
            <p className="text-gray-400 font-sans leading-relaxed">{service.description}</p>

            <ul className="mt-6 space-y-2 text-sm text-gray-300">
              {service.bullets.map((bullet) => (
                <li key={bullet} className="flex items-center gap-2 font-mono">
                  <span className="h-2 w-2 rounded-full bg-[#39ff14]" />
                  {bullet}
                </li>
              ))}
            </ul>

            <div className="mt-8 pt-4 border-t border-white/10 flex items-center gap-2 font-mono text-sm text-gray-500">
              <span className="w-2 h-2 bg-[#b026ff] rounded-full animate-pulse" />
              ENGAGEMENT: <span className="text-[#00f0ff]">PROJECT-LED</span>
            </div>
          </motion.div>
        ))}
      </div>

      <section className="mt-16 glass-panel p-8 border border-white/10">
        <div className="max-w-4xl space-y-4">
          <div className="flex items-center gap-3 text-[#39ff14] font-mono text-sm uppercase tracking-[0.3em]">
            <IconCertificate className="w-5 h-5" />
            Compliance-aware support
          </div>
          <h2 className="text-2xl md:text-3xl font-mono font-bold text-white">
            Frameworks matter when they connect to real systems and real operations.
          </h2>
          <p className="text-gray-300 leading-relaxed">
            NextGridIT supports healthcare, public-sector, and business environments with technical guidance informed by HIPAA, PCI DSS, and NIST-based practices. We focus on implementation, documentation, and risk reduction that can be tied back to the systems you actually run.
          </p>
        </div>
      </section>
    </div>
  )
}
