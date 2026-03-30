"use client"

import { motion } from "framer-motion"
import {
  IconChevronRight,
  IconCloudLock,
  IconDeviceDesktopAnalytics,
  IconNetwork,
  IconShieldCheck,
  IconVideo,
} from "@tabler/icons-react"

const services = [
  {
    title: "IT Support and Operational Guidance",
    description: "Project-based IT support and ongoing technical guidance for organizations that need reliable execution without hiring a full internal team.",
    icon: <IconDeviceDesktopAnalytics className="w-8 h-8 text-white" />,
    features: ["Small business support", "Vendor coordination", "Operational cleanup"]
  },
  {
    title: "Microsoft 365 and Cloud Services",
    description: "Set up, secure, and improve cloud platforms with a local-first mindset that keeps environments practical, documented, and easier to support.",
    icon: <IconCloudLock className="w-8 h-8 text-[#b026ff]" />,
    features: ["Microsoft 365 and Entra", "Azure and AWS support", "Google and Apple environments"]
  },
  {
    title: "Network Infrastructure and Wi-Fi",
    description: "Design, deploy, and improve wired and wireless networks for offices, municipalities, campgrounds, and multi-building properties.",
    icon: <IconNetwork className="w-8 h-8 text-[#00f0ff]" />,
    features: ["Ubiquiti and UniFi deployments", "Public Wi-Fi and segmentation", "Coverage and connectivity improvements"]
  },
  {
    title: "Security Hardening and Documentation",
    description: "Reduce avoidable risk with practical security improvements, cleaner documentation, and controls that support real-world operations.",
    icon: <IconShieldCheck className="w-8 h-8 text-[#39ff14]" />,
    features: ["HIPAA-aware support", "NIST-informed security practices", "Policy and documentation help"]
  },
  {
    title: "Camera and Custom Local-First Solutions",
    description: "Build camera systems, smart technology, and custom on-site solutions with an emphasis on local processing, ownership, and fit-for-purpose design.",
    icon: <IconVideo className="w-8 h-8 text-[#39ff14]" />,
    features: ["Camera install and service", "Custom local AI options", "Residential and specialty projects"]
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
