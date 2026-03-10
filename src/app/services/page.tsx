"use client"

import { motion } from "framer-motion"
import { IconShieldLock, IconRouter, IconCertificate, IconServerCog } from "@tabler/icons-react"

const detailedServices = [
  {
    title: "Ubiquiti Network Deployments",
    description: "Enterprise-grade routing, switching, and wireless architectures tailored for small to medium businesses. We specialize in UniFi ecosystems providing centralized management, deep packet inspection, and resilient performance without the traditional enterprise licensing bloat.",
    icon: <IconRouter className="w-10 h-10 text-[#00f0ff]" />
  },
  {
    title: "Proactive Managed IT",
    description: "Stop waiting for things to break. Our managed service protocol continuously monitors your infrastructure. We patch vulnerabilities, manage asset lifecycles, and resolve network anomalies before they impact your operations.",
    icon: <IconServerCog className="w-10 h-10 text-[#39ff14]" />
  },
  {
    title: "Compliance & Auditing",
    description: "Navigating regulatory requirements doesn't have to be a roadblock. We offer deep-dive compliance reviews and implementation strategies for HIPAA, SOC2, NIST CSF, and NIST 800-53 to ensure your data handling meets strict legal and industry standards.",
    icon: <IconCertificate className="w-10 h-10 text-[#b026ff]" />
  },
  {
    title: "Offensive Security & Hardening",
    description: "Leveraging experience gathered from hunting zero-day bugs in Microsoft and Google environments, we pressure-test your perimeter. We find the gaps in your armor before malicious actors do, and systematically harden your defenses.",
    icon: <IconShieldLock className="w-10 h-10 text-white" />
  }
]

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-24 min-h-[70vh]">
      <div className="mb-16">
        <h1 className="text-4xl md:text-5xl font-mono font-bold text-white mb-6 uppercase tracking-wider">
          System <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] to-[#39ff14]">Capabilities</span>
        </h1>
        <div className="w-24 h-1 bg-[#00f0ff] mb-6 shadow-[0_0_10px_rgba(0,240,255,0.5)]" />
        <p className="text-gray-300 font-sans text-lg max-w-3xl leading-relaxed">
          We don't sell generic IT packages. We architect precision layers of defense and connectivity. From deploying robust Ubiquiti networks to ensuring strict compliance frameworks, our services are built on the philosophy that true security is proactive, transparent, and accessible.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {detailedServices.map((service, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="glass-panel p-8 border border-white/10 hover:border-[#39ff14]/50 transition-colors duration-300 relative group overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#00f0ff]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            
            <div className="mb-6 p-4 bg-black inline-block rounded-sm border border-white/5 shadow-inner">
              {service.icon}
            </div>
            
            <h2 className="text-2xl font-mono font-bold text-white mb-4 group-hover:text-[#39ff14] transition-colors">{service.title}</h2>
            <p className="text-gray-400 font-sans leading-relaxed">{service.description}</p>
            
            <div className="mt-8 pt-4 border-t border-white/10 flex items-center gap-2 font-mono text-sm text-gray-500">
              <span className="w-2 h-2 bg-[#b026ff] rounded-full animate-pulse" />
              STATUS: <span className="text-[#00f0ff]">ONLINE_READY</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

