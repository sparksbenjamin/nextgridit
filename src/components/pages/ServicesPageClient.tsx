"use client"

import { motion } from "framer-motion"
import { IconCertificate, IconRouter, IconServerCog, IconShieldLock } from "@tabler/icons-react"

const detailedServices = [
  {
    id: "network",
    title: "Network Infrastructure and Ubiquiti Deployments",
    description: "Design, upgrade, and support business networks with a focus on reliability, maintainability, and right-sized infrastructure. This includes Ubiquiti environments, segmentation, wireless planning, and multi-site connectivity."
  },
  {
    id: "managed",
    title: "Managed IT and Operational Support",
    description: "Support day-to-day systems, reduce recurring issues, and bring structure to the technology side of the business. The goal is not just fixing problems, but making the environment easier to manage over time."
  },
  {
    id: "compliance",
    title: "Compliance-Aware Reviews and Documentation",
    description: "Help organizations improve technical documentation, align controls more clearly, and strengthen their operational posture for compliance-aware environments, including healthcare-related systems."
  },
  {
    id: "security",
    title: "Security Hardening and Risk Reduction",
    description: "Review systems, improve access controls, harden infrastructure, and reduce common operational security gaps without burying the business in unnecessary complexity."
  }
]

const icons = {
  network: <IconRouter className="w-10 h-10 text-[#00f0ff]" />,
  managed: <IconServerCog className="w-10 h-10 text-[#39ff14]" />,
  compliance: <IconCertificate className="w-10 h-10 text-[#b026ff]" />,
  security: <IconShieldLock className="w-10 h-10 text-white" />
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
          NextGridIT provides infrastructure, security, and IT support services for organizations that need practical technical leadership, cleaner systems, and more dependable day-to-day operations.
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

            <div className="mt-8 pt-4 border-t border-white/10 flex items-center gap-2 font-mono text-sm text-gray-500">
              <span className="w-2 h-2 bg-[#b026ff] rounded-full animate-pulse" />
              SERVICE: <span className="text-[#00f0ff]">AVAILABLE</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
