"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { IconArrowRight } from "@tabler/icons-react"
import { caseStudies } from "@/lib/site-data"

export function CaseStudiesSection() {
  return (
    <section id="case-studies" className="relative border-t border-[var(--border)] py-24">
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="theme-heading mb-4 font-mono text-3xl font-bold md:text-5xl">
            PROVEN <span className="theme-accent-strong">RESULTS</span>
          </h2>
          <div className="theme-rule mx-auto mb-6 h-1 w-24" />
          <p className="theme-copy font-sans text-lg">
            Real engagements with real outcomes. No hypotheticals, no generic case studies.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-panel group relative overflow-hidden border border-[var(--border)] p-8 transition-colors duration-300 hover:border-[var(--border-strong)]"
            >
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[var(--accent-soft)] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="relative z-10">
                <p className="theme-soft font-mono text-xs uppercase tracking-[0.24em] mb-3">
                  Case Study
                </p>
                <h3 className="theme-heading mb-4 font-mono text-xl font-bold">
                  {study.title}
                </h3>
                <p className="theme-soft text-xs uppercase tracking-wider mb-4">Challenge</p>
                <p className="theme-copy text-sm leading-relaxed mb-6">{study.challenge}</p>
                <p className="theme-soft text-xs uppercase tracking-wider mb-4">Approach</p>
                <p className="theme-copy text-sm leading-relaxed mb-6">{study.approach}</p>
                <p className="theme-soft text-xs uppercase tracking-wider mb-4">Outcomes</p>
                <ul className="space-y-2">
                  {study.outcomes.map((outcome) => (
                    <li key={outcome} className="theme-copy flex items-start gap-2 text-sm">
                      <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[var(--accent-strong)]" />
                      {outcome}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/case-studies/"
            className="button-secondary rounded-full px-6 py-3 font-mono text-sm font-bold uppercase tracking-[0.2em]"
          >
            View All Case Studies
          </Link>
          <Link
            href="/contact/"
            className="button-primary inline-flex items-center gap-2 rounded-full px-6 py-3 font-mono text-sm font-bold uppercase tracking-[0.2em]"
          >
            <span>Start Your Project</span>
            <IconArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}