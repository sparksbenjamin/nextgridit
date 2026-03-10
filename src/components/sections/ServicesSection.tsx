"use client"

import { motion } from "framer-motion"
import { IconShieldCheck, IconNetwork, IconCloudLock, IconDeviceDesktopAnalytics } from "@tabler/icons-react"

const services = [
  {
    title: "Enterprise Cybersecurity",
    description: "Military-grade threat detection, continuous monitoring, and zero-trust architecture scaled for small business environments.",
    icon: <IconShieldCheck className="w-8 h-8 text-[#39ff14]" />,
    features: ["24/7 Threat Hunting", "Endpoint Protection", "Penetration Testing"]
  },
  {
    title: "Advanced Network Architecture",
    description: "Resilient, high-bandwidth network designs that eliminate downtime and support rapid business scaling without bottlenecks.",
    icon: <IconNetwork className="w-8 h-8 text-[#00f0ff]" />,
    features: ["SD-WAN Implementation", "VLAN Segmentation", "Redundant Routing"]
  },
  {
    title: "Secure Cloud Transitions",
    description: "Seamless migration of on-premise infrastructure to hardened cloud environments (AWS/Azure) with end-to-end encryption.",
    icon: <IconCloudLock className="w-8 h-8 text-[#b026ff]" />,
    features: ["Zero-Downtime Migration", "Cloud Identity Access", "Data Sovereignity"]
  },
  {
    title: "Proactive Managed IT",
    description: "We don't just fix what's broken; we anticipate failures and patch vulnerabilities before they impact your operations.",
    icon: <IconDeviceDesktopAnalytics className="w-8 h-8 text-white" />,
    features: ["Automated Patch Management", "Asset Lifecycle Tracking", "Predictive Alerts"]
  }
]

export function ServicesSection() {
  return (
    <section id="services" className="py-24 relative bg-[#050505] border-t border-white/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-mono font-bold text-white mb-4">
            CORE <span className="text-[#39ff14]">CAPABILITIES</span>
          </h2>
          <div className="w-24 h-1 bg-[#39ff14] mx-auto mb-6 shadow-[0_0_10px_rgba(57,255,20,0.5)]" />
          <p className="text-gray-400 font-sans text-lg">
            We deploy the exact toolchains and protocols used by Fortune 500 companies, engineered specifically for the agility of emerging businesses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative glass-panel p-8 hover:bg-white/[0.02] transition-colors duration-300 overflow-hidden"
            >
              {/* Hover gradient effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#39ff14]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="flex items-start gap-6 relative z-10">
                <div className="p-3 bg-black border border-white/10 rounded-sm group-hover:border-[#39ff14]/50 transition-colors duration-300">
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-xl font-mono font-bold text-white mb-3 group-hover:text-[#00f0ff] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {service.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center gap-2 text-sm text-gray-300 font-mono">
                        <span className="text-[#39ff14] opacity-70">▹</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              {/* Corner decorative bracket */}
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#39ff14]/0 group-hover:border-[#39ff14]/50 transition-all duration-300 transform translate-x-2 -translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#00f0ff]/0 group-hover:border-[#00f0ff]/50 transition-all duration-300 transform -translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
