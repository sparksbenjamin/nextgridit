"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import {
  IconArrowRight,
  IconCertificate,
  IconLockOpen,
  IconServerCog,
  IconShieldLock,
} from "@tabler/icons-react"

const statCards = [
  {
    label: "Years in IT",
    value: "20+",
    icon: <IconServerCog className="h-5 w-5 theme-accent-strong" />,
  },
  {
    label: "Certifications",
    value: "100+",
    icon: <IconCertificate className="h-5 w-5 theme-accent-strong" />,
  },
  {
    label: "Medical offices assessed",
    value: "100+",
    icon: <IconShieldLock className="h-5 w-5 theme-accent-strong" />,
  },
]

const recentWork = [
  {
    label: "RECOVERY",
    body: "Municipality vendor lockout resolved. Full system access returned to city ownership with authorized documentation.",
  },
  {
    label: "TRANSITION",
    body: "Business MSP separation completed. All credentials verified, former provider access confirmed revoked across every system.",
  },
  {
    label: "ASSESSMENT",
    body: "HIPAA security assessment delivered for medical practice. Findings prioritized by real exploitability, not theoretical severity.",
  },
]

const capabilities = [
  {
    title: "MSP Transition",
    copy: "Fire your MSP and take back control of your IT. We manage the full transition so nothing gets left behind.",
  },
  {
    title: "Vendor Lockout Recovery",
    copy: "When your IT provider walks away with your credentials, we break back in and hand you the keys — legally.",
  },
  {
    title: "Security Assessment",
    copy: "Find what's actually vulnerable in your environment and get a prioritized plan to fix it, not a report that sits on a shelf.",
  },
]

export function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-[var(--border)]">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 cyber-grid opacity-[0.07]" />
        <div
          className="absolute -left-24 top-0 h-96 w-96 rounded-full blur-[120px]"
          style={{ backgroundColor: "var(--hero-glow-one)" }}
        />
        <div
          className="absolute right-[-6rem] top-20 h-[28rem] w-[28rem] rounded-full blur-[140px]"
          style={{ backgroundColor: "var(--hero-glow-two)" }}
        />
        <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-[var(--accent-soft)]/30 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="grid items-center gap-14 lg:grid-cols-[1.02fr_0.98fr]">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="theme-chip mb-6 inline-flex items-center gap-3 rounded-full px-4 py-2"
            >
              <span className="h-2.5 w-2.5 rounded-full bg-[var(--accent)] shadow-[0_0_18px_var(--accent)]" />
              <span className="font-mono text-xs uppercase tracking-[0.28em] theme-copy">
                Upstate South Carolina // IT That Shows Up
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="theme-heading text-5xl font-bold leading-[0.92] sm:text-6xl lg:text-7xl"
            >
              Your IT.
              <br />
              <span className="theme-accent-strong">Under Your Control.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.14 }}
              className="theme-copy mt-6 max-w-2xl font-mono text-lg leading-relaxed sm:text-xl"
            >
              MSP transitions, vendor lockout recovery, HIPAA security assessments,
              and infrastructure hardening for businesses in Upstate South Carolina.
              We help you take back control of your IT — and keep it.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.22 }}
              className="mt-8 flex flex-col gap-4 sm:flex-row"
            >
              <Link
                href="/contact/"
                className="button-primary inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 font-mono text-sm font-bold uppercase tracking-[0.2em]"
              >
                <IconShieldLock className="h-5 w-5" />
                <span>Get a Free Assessment</span>
              </Link>

              <Link
                href="/services/"
                className="button-secondary inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 font-mono text-sm font-bold uppercase tracking-[0.2em]"
              >
                <IconArrowRight className="h-5 w-5 theme-accent" />
                <span>View Our Services</span>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-10 grid gap-4 sm:grid-cols-3"
            >
              {statCards.map((card) => (
                <div
                  key={card.label}
                  className="rounded-[1.5rem] border border-[var(--border)] bg-[var(--surface)] px-5 py-5 shadow-[0_18px_42px_-32px_var(--shadow-color)]"
                >
                  <div className="mb-4 flex items-center justify-between">
                    {card.icon}
                    <span className="font-mono text-[11px] uppercase tracking-[0.24em] theme-soft">
                      Verified
                    </span>
                  </div>
                  <p className="theme-heading text-2xl font-bold">{card.value}</p>
                  <p className="theme-soft mt-2 font-mono text-xs uppercase tracking-[0.2em]">
                    {card.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.12 }}
            className="relative"
          >
            <div className="glass-panel overflow-hidden rounded-[2rem] border border-[var(--border-strong)] bg-[linear-gradient(180deg,rgba(7,11,16,0.94),rgba(10,15,20,0.98))] p-6 shadow-[0_38px_90px_-55px_rgba(0,0,0,0.9)]">
              <div className="mb-5 flex items-center justify-between gap-4 border-b border-[var(--border)] pb-4">
                <div className="flex items-center gap-3">
                  <span className="h-3 w-3 rounded-full bg-rose-500/80" />
                  <span className="h-3 w-3 rounded-full bg-amber-400/80" />
                  <span className="h-3 w-3 rounded-full bg-emerald-400/90" />
                  <span className="pl-2 font-mono text-xs uppercase tracking-[0.24em] theme-soft">
                    what_we_do.console
                  </span>
                </div>
                <div className="rounded-full border border-[var(--border)] bg-[var(--accent-soft)] px-4 py-2 font-mono text-[11px] uppercase tracking-[0.24em] theme-accent-strong">
                  Seneca, SC
                </div>
              </div>

              <div className="grid gap-5 xl:grid-cols-[1.05fr_0.95fr]">
                <section className="rounded-[1.75rem] border border-[var(--border)] bg-[var(--background-elevated)]/80 p-5">
                  <p className="font-mono text-xs uppercase tracking-[0.26em] theme-accent">
                    Core services
                  </p>
                  <h2 className="theme-heading mt-3 text-3xl font-bold">
                    Take Back Control
                  </h2>
                  <p className="theme-copy mt-3 text-sm leading-6">
                    From MSP transitions and vendor lockout recovery to HIPAA
                    assessments and infrastructure hardening — real solutions for
                    businesses that need IT they can actually rely on.
                  </p>

                  <div className="mt-5 space-y-3">
                    {capabilities.map((item) => (
                      <div
                        key={item.title}
                        className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-4 py-4"
                      >
                        <p className="font-mono text-[11px] uppercase tracking-[0.22em] theme-soft">
                          {item.title}
                        </p>
                        <p className="theme-copy mt-2 text-sm leading-6">{item.copy}</p>
                      </div>
                    ))}
                  </div>
                </section>

                <section className="rounded-[1.75rem] border border-[var(--border)] bg-[var(--background-elevated)]/80 p-5">
                  <p className="font-mono text-xs uppercase tracking-[0.26em] theme-accent">
                    Recent work
                  </p>

                  <div className="mt-4 space-y-3">
                    {recentWork.map((item) => (
                      <div
                        key={item.label}
                        className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-4 py-4"
                      >
                        <p className="font-mono text-[11px] uppercase tracking-[0.24em] theme-accent-strong">
                          [{item.label}]
                        </p>
                        <p className="theme-copy mt-2 text-sm leading-6">{item.body}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-4 py-4">
                      <p className="font-mono text-[11px] uppercase tracking-[0.22em] theme-soft">
                        Service area
                      </p>
                      <p className="theme-heading mt-2 text-lg font-bold">
                        Upstate SC
                      </p>
                    </div>
                    <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-4 py-4">
                      <p className="font-mono text-[11px] uppercase tracking-[0.22em] theme-soft">
                        Compliance
                      </p>
                      <p className="theme-heading mt-2 text-lg font-bold">HIPAA / NIST</p>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}