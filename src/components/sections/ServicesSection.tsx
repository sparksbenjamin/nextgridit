"use client"

import { motion } from "framer-motion"
import { IconChevronRight, IconCloudLock, IconDeviceDesktopAnalytics, IconNetwork, IconShieldCheck } from "@tabler/icons-react"

const services = [
  {
    title: "Security Hardening",
    description: "Reduce avoidable risk with practical security improvements for endpoints, identities, networks, and business-critical systems.",
    icon: <IconShieldCheck className="w-8 h-8 text-[#39ff14]" />,
    features: ["Security reviews", "Firewall and access controls", "Baseline hardening"]
  },
  {
    title: "Network Infrastructure",
    description: "Plan, deploy, and improve reliable business networks that support growth, uptime, and day-to-day operations without unnecessary complexity.",
    icon: <IconNetwork className="w-8 h-8 text-[#00f0ff]" />,
    features: ["Ubiquiti and network upgrades", "Segmentation and routing", "Wi-Fi and site connectivity"]
  },
  {
    title: "Compliance Support",
    description: "Build cleaner documentation, stronger controls, and more defensible processes for compliance-aware environments such as healthcare and regulated organizations.",
    icon: <IconCloudLock className="w-8 h-8 text-[#b026ff]" />,
    features: ["HIPAA-aware support", "Policy and documentation help", "Operational gap review"]
  },
  {
    title: "Managed IT Guidance",
    description: "Get dependable operational support, planning, and issue resolution from a team that understands both infrastructure and business impact.",
    icon: <IconDeviceDesktopAnalytics className="w-8 h-8 text-white" />,
    features: ["Project planning", "Operational support", "Strategic improvements"]
  }
]

export function ServicesSection() {
  return (
    <section id="services" className="py-24 relative bg-[#050505] border-t border-white/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-mono font-bold text-white mb-4">
            CORE <span className="text-[#39ff14]">SERVICES</span>
          </h2>
          <div className="w-24 h-1 bg-[#39ff14] mx-auto mb-6 shadow-[0_0_10px_rgba(57,255,20,0.5)]" />
          <p className="text-gray-400 font-sans text-lg">
            NextGridIT focuses on the infrastructure, security, and support work that helps local organizations stay stable, secure, and easier to operate.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative glass-panel p-8 hover:bg-white/[0.02] transition-colors duration-300 overflow-hidden"
            >
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
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-gray-300 font-mono">
                        <IconChevronRight className="w-4 h-4 text-[#39ff14] opacity-70" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#39ff14]/0 group-hover:border-[#39ff14]/50 transition-all duration-300 transform translate-x-2 -translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#00f0ff]/0 group-hover:border-[#00f0ff]/50 transition-all duration-300 transform -translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
