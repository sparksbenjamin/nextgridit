"use client"

import { motion } from "framer-motion"

const trustItems = [
  {
    category: "Compliance",
    items: ["HIPAA", "PCI DSS", "NIST 800-53", "MARS-E", "FedRAMP"],
  },
  {
    category: "Security Research",
    items: ["Microsoft MSRC", "HackerOne", "Coordinated Disclosure"],
  },
  {
    category: "Partnerships",
    items: ["Verizon Business Partner"],
  },
  {
    category: "Credentials",
    items: ["100+ Certifications", "20+ Years Experience", "DHHS Medicaid Compliance"],
  },
]

const stats = [
  { value: "100+", label: "Medical offices assessed" },
  { value: "4,000+", label: "M365 accounts migrated" },
  { value: "100+", label: "Certifications held" },
  { value: "20+", label: "Years in IT" },
]

export function TrustSignalsSection() {
  return (
    <section className="border-t border-[var(--border)] py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="theme-heading mb-4 font-mono text-3xl font-bold md:text-5xl">
            CREDENTIALS <span className="theme-accent-strong">THAT MATTER</span>
          </h2>
          <div className="theme-rule mx-auto mb-6 h-1 w-24" />
          <p className="theme-copy font-sans text-lg">
            Real certifications, real compliance experience, and active security research — not marketing claims.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {trustItems.map((group, index) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-panel border border-[var(--border)] p-6"
            >
              <p className="theme-accent-strong mb-4 font-mono text-xs uppercase tracking-[0.24em]">
                {group.category}
              </p>
              <div className="space-y-3">
                {group.items.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3"
                  >
                    <span className="h-2 w-2 shrink-0 rounded-full bg-[var(--accent-strong)]" />
                    <span className="theme-heading font-mono text-sm font-bold">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="rounded-[1.5rem] border border-[var(--border)] bg-[var(--surface)] px-5 py-5"
            >
              <p className="theme-heading text-3xl font-bold font-mono">{stat.value}</p>
              <p className="theme-soft mt-2 font-mono text-xs uppercase tracking-[0.2em]">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
