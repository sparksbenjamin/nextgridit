"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { IconCheck } from "@tabler/icons-react"

const operators = [
  {
    label: "Global rollouts that need hardware staging, dispatch coordination, and cleaner field execution",
    href: "/services/network-wifi/",
  },
  {
    label: "Security programs that need surface intelligence, exposure validation, and practical risk framing",
    href: "/labs/",
  },
  {
    label: "Regulated environments that require private AI analysis without handing sensitive data to public tooling",
    href: "/compliance/",
  },
  {
    label: "Regional organizations that still need local response across Seneca, Clemson, Anderson, Easley, and Greenville",
    href: "/service-areas/",
  },
]

export function TargetAudienceSection() {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="pointer-events-none absolute right-0 top-0 h-full w-1/2 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[var(--accent-alt-soft)] via-transparent to-transparent" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-16 lg:flex-row">
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="theme-heading mb-6 font-mono text-3xl font-bold uppercase md:text-5xl">
                Built for
                <br />
                <span className="bg-gradient-to-r from-[var(--accent-alt)] to-[var(--accent)] bg-clip-text text-transparent">
                  Research-Led Operations
                </span>
              </h2>

              <div className="theme-copy space-y-6 font-sans text-lg">
                <p>
                  NextGridIT operates as two coordinated layers: professional global infrastructure delivery and an intelligence program focused on surface exposure, research, and private analysis.
                </p>
                <p>
                  <strong className="theme-heading font-mono">
                    The result is a delivery model that can stage hardware, harden environments, and generate higher-context security insight from the same command structure.
                  </strong>
                </p>
                <p>
                  That is a better fit for organizations that want strong execution without separating logistics, infrastructure, and intelligence into disconnected vendors.
                </p>
              </div>

              <div className="mt-10 flex flex-wrap gap-6">
                <div className="border-l-2 border-[var(--accent-strong)] pl-4">
                  <div className="theme-heading text-3xl font-mono font-bold">
                    150<span className="theme-accent-strong">+</span>
                  </div>
                  <div className="theme-soft mt-1 text-sm uppercase tracking-widest">
                    Countries Supported
                  </div>
                </div>
                <div className="border-l-2 border-[var(--accent)] pl-4">
                  <div className="theme-heading text-3xl font-mono font-bold">20<span className="theme-accent">+</span></div>
                  <div className="theme-soft mt-1 text-sm uppercase tracking-widest">Years in IT</div>
                </div>
                <div className="border-l-2 border-[var(--accent-alt)] pl-4">
                  <div className="theme-heading text-3xl font-mono font-bold">Private</div>
                  <div className="theme-soft mt-1 text-sm uppercase tracking-widest">AI Integration</div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="rounded-2xl bg-gradient-to-br from-[var(--accent-alt-soft)] via-[var(--accent-soft)] to-[var(--accent-alt-soft)] p-[1px]"
            >
              <div className="relative h-full overflow-hidden rounded-[calc(1rem-1px)] bg-[var(--surface-strong)] p-8 md:p-12">
                <div className="absolute inset-0 cyber-grid opacity-30" />

                <div className="relative z-10 font-mono">
                  <div className="mb-6 flex items-center gap-2 border-b border-[var(--border)] pb-4">
                    <span className="h-3 w-3 rounded-full bg-red-500" />
                    <span className="h-3 w-3 rounded-full bg-yellow-500" />
                    <span className="h-3 w-3 rounded-full bg-green-500" />
                    <span className="theme-soft ml-2 text-xs">operating_model.sh</span>
                  </div>

                  <div className="space-y-4 text-sm sm:text-base">
                    <div className="theme-copy flex items-center justify-between">
                      <span>Legacy Field Vendor</span>
                      <span className="text-amber-500">Ship and Forget</span>
                    </div>
                    <div className="h-[1px] w-full bg-[var(--border)]" />
                    <div className="theme-heading flex items-center justify-between">
                      <span>NextGridIT Model</span>
                      <span className="theme-accent-strong">Deploy and Investigate</span>
                    </div>

                    <div className="mt-6 space-y-3 border-t border-[var(--border)] pt-6">
                      <p className="theme-soft">&gt; identifying best-fit operating environments...</p>
                      <ul className="theme-copy space-y-2">
                        {operators.map((operator) => (
                          <li key={operator.href} className="flex items-center gap-2">
                            <IconCheck className="h-4 w-4 theme-accent" />
                            <Link href={operator.href} className="theme-link">
                              {operator.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
