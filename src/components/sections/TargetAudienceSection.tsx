"use client"

import { motion } from "framer-motion"
import { IconCheck } from "@tabler/icons-react"

export function TargetAudienceSection() {
  return (
    <section className="py-24 relative overflow-hidden bg-[#020202]">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#b026ff]/10 via-transparent to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-5xl font-mono font-bold text-white mb-6 uppercase">
                Bridging the <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#b026ff] to-[#00f0ff]">Enterprise Gap</span>
              </h2>

              <div className="space-y-6 text-gray-400 font-sans text-lg">
                <p>
                  For too long, elite IT infrastructure and proactive cybersecurity have been privileges reserved exclusively for the enterprise. Smaller organizations have been forced to compromise with reactive break-fix solutions.
                </p>
                <p>
                  <strong className="text-white font-mono">NextgridIT disrupts this standard.</strong>
                </p>
                <p>
                  We architect robust, scalable networks and durable security programs tailored to the budgets and operational speeds of agile companies. We aren&apos;t just your IT vendor; we are your strategic infrastructure partners.
                </p>
              </div>

              <div className="mt-10 flex gap-6">
                <div className="border-l-2 border-[#39ff14] pl-4">
                  <div className="text-3xl font-mono font-bold text-white">100<span className="text-[#39ff14]">%</span></div>
                  <div className="text-sm text-gray-400 uppercase tracking-widest mt-1">Enterprise Grade</div>
                </div>
                <div className="border-l-2 border-[#00f0ff] pl-4">
                  <div className="text-3xl font-mono font-bold text-white">0<span className="text-[#00f0ff]">x</span></div>
                  <div className="text-sm text-gray-400 uppercase tracking-widest mt-1">Compromises</div>
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
              className="relative p-1 bg-gradient-to-br from-[#39ff14]/30 via-[#b026ff]/30 to-[#00f0ff]/30 rounded-sm"
            >
              <div className="bg-[#050505] p-8 md:p-12 relative overflow-hidden h-full">
                <div className="absolute inset-0 cyber-grid opacity-20" />

                <div className="relative z-10 font-mono">
                  <div className="flex items-center gap-2 mb-6 border-b border-white/10 pb-4">
                    <span className="w-3 h-3 rounded-full bg-red-500" />
                    <span className="w-3 h-3 rounded-full bg-yellow-500" />
                    <span className="w-3 h-3 rounded-full bg-green-500" />
                    <span className="text-xs text-gray-500 ml-2">sys_compare.sh</span>
                  </div>

                  <div className="space-y-4 text-sm sm:text-base">
                    <div className="flex justify-between items-center text-gray-400">
                      <span>Standard IT Agency</span>
                      <span className="text-red-400">Reactive</span>
                    </div>
                    <div className="w-full bg-gray-900 h-[1px]" />
                    <div className="flex justify-between items-center text-white">
                      <span>NextgridIT Protocol</span>
                      <span className="text-[#39ff14] drop-shadow-[0_0_5px_rgba(57,255,20,0.5)]">Proactive</span>
                    </div>

                    <div className="pt-6 mt-6 border-t border-white/5 space-y-3">
                      <p className="text-gray-500">&gt; Executing strategy comparison...</p>
                      <ul className="text-gray-300 space-y-2">
                        <li className="flex items-center gap-2"><IconCheck className="w-4 h-4 text-[#00f0ff]" />Zero-trust security frameworks</li>
                        <li className="flex items-center gap-2"><IconCheck className="w-4 h-4 text-[#00f0ff]" />Automated disaster recovery</li>
                        <li className="flex items-center gap-2"><IconCheck className="w-4 h-4 text-[#00f0ff]" />Dark web intelligence monitoring</li>
                        <li className="flex items-center gap-2"><IconCheck className="w-4 h-4 text-[#00f0ff]" />Scalable hardware architecture</li>
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
