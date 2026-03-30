"use client"

import { motion } from "framer-motion"
import { IconCheck } from "@tabler/icons-react"

const markets = [
  "Medical offices that need HIPAA-aware IT support and cleaner cloud administration",
  "Small and mid-sized businesses with 5 to 100 users and no internal IT staff",
  "Municipal and public-sector teams improving public Wi-Fi, cameras, and cybersecurity posture",
  "Campgrounds and multi-building properties that need reliable guest connectivity and segmented networks",
]

export function TargetAudienceSection() {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="pointer-events-none absolute right-0 top-0 h-full w-1/2 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[var(--accent-alt-soft)] via-transparent to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="theme-heading mb-6 font-mono text-3xl font-bold uppercase md:text-5xl">
                Built for <br />
                <span className="bg-gradient-to-r from-[var(--accent-alt)] to-[var(--accent)] bg-clip-text text-transparent">Real-World Environments</span>
              </h2>

              <div className="theme-copy space-y-6 font-sans text-lg">
                <p>
                  NextGridIT is built for organizations that need more than reactive support but do not want to be shoved into a one-size-fits-all MSP model.
                </p>
                <p>
                  <strong className="theme-heading font-mono">We focus on practical improvements that reduce risk, improve reliability, and support day-to-day operations across business, municipal, and property environments.</strong>
                </p>
                <p>
                  Our background includes Microsoft ecosystems, local-first deployments, network modernization, public Wi-Fi, camera systems, compliance-aware support, and multi-site environments that need steady hands and clear communication.
                </p>
              </div>

              <div className="mt-10 flex gap-6 flex-wrap">
                <div className="border-l-2 border-[var(--accent-strong)] pl-4">
                  <div className="theme-heading text-3xl font-mono font-bold">20<span className="theme-accent-strong">+</span></div>
                  <div className="theme-soft mt-1 text-sm uppercase tracking-widest">Years in IT</div>
                </div>
                <div className="border-l-2 border-[var(--accent)] pl-4">
                  <div className="theme-heading text-3xl font-mono font-bold">Local</div>
                  <div className="theme-soft mt-1 text-sm uppercase tracking-widest">Upstate SC Focus</div>
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
                    <span className="w-3 h-3 rounded-full bg-red-500" />
                    <span className="w-3 h-3 rounded-full bg-yellow-500" />
                    <span className="w-3 h-3 rounded-full bg-green-500" />
                    <span className="theme-soft ml-2 text-xs">engagement_model.sh</span>
                  </div>

                  <div className="space-y-4 text-sm sm:text-base">
                    <div className="theme-copy flex items-center justify-between">
                      <span>Reactive Vendor Model</span>
                      <span className="text-amber-500">Wait and Fix</span>
                    </div>
                    <div className="h-[1px] w-full bg-[var(--border)]" />
                    <div className="theme-heading flex items-center justify-between">
                      <span>NextGridIT Approach</span>
                      <span className="theme-accent-strong">Plan and Improve</span>
                    </div>

                    <div className="mt-6 space-y-3 border-t border-[var(--border)] pt-6">
                      <p className="theme-soft">&gt; Identifying best-fit client environments...</p>
                      <ul className="theme-copy space-y-2">
                        {markets.map((market) => (
                          <li key={market} className="flex items-center gap-2">
                            <IconCheck className="h-4 w-4 theme-accent" />
                            {market}
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
