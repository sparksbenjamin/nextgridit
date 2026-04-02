"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import {
  IconArrowRight,
  IconBinaryTree2,
  IconCpu2,
  IconServerCog,
  IconShieldLock,
} from "@tabler/icons-react"

const statCards = [
  {
    label: "Countries in reach",
    value: "150+",
    icon: <IconServerCog className="h-5 w-5 theme-accent-strong" />,
  },
  {
    label: "Research threads",
    value: "MSRC",
    icon: <IconBinaryTree2 className="h-5 w-5 theme-accent-strong" />,
  },
  {
    label: "Private AI",
    value: "Air-Gapped",
    icon: <IconCpu2 className="h-5 w-5 theme-accent-strong" />,
  },
]

const warRoomFeed = [
  {
    label: "MSRC",
    body: "Case #108637 pinned to pre-auth identity and mail-discovery telemetry.",
  },
  {
    label: "INTEL",
    body: "Perimeter watchlists synchronized across exposure, DNS residue, and tenant fingerprinting.",
  },
  {
    label: "AI",
    body: "Qwen and Mistral clusters ready for isolated coding and threat-analysis workloads.",
  },
]

const signalBoard = [
  {
    title: "Discovery plane",
    copy: "Enumerating how public identity and mail-discovery workflows leak tenant and principal signals before auth.",
  },
  {
    title: "Exposure plane",
    copy: "Correlating MX fingerprints, DNS residue, and externally visible control surfaces into a single posture brief.",
  },
  {
    title: "Decision plane",
    copy: "Generating private, air-gapped recommendations without handing source material to third-party AI platforms.",
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
                NextGrid Labs // War Room Active
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="theme-heading text-5xl font-bold leading-[0.92] sm:text-6xl lg:text-7xl"
            >
              Global Infrastructure.
              <br />
              <span className="theme-accent-strong">Sovereign Intelligence.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.14 }}
              className="theme-copy mt-6 max-w-2xl font-mono text-lg leading-relaxed sm:text-xl"
            >
              NextGrid IT isn&apos;t just boots on the ground in 150+ countries. We are the
              researchers discovering the vulnerabilities the world hasn&apos;t seen yet. Home
              to MSRC-level research and secure, air-gapped Private AI.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.22 }}
              className="mt-8 flex flex-col gap-4 sm:flex-row"
            >
              <Link
                href="/labs/"
                className="button-primary inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 font-mono text-sm font-bold uppercase tracking-[0.2em]"
              >
                <IconShieldLock className="h-5 w-5" />
                <span>Run Instant Perimeter Audit</span>
              </Link>

              <Link
                href="/contact/"
                className="button-secondary inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 font-mono text-sm font-bold uppercase tracking-[0.2em]"
              >
                <IconArrowRight className="h-5 w-5 theme-accent" />
                <span>Request Exposure Brief</span>
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
                      Live
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
                    war_room.console
                  </span>
                </div>
                <div className="rounded-full border border-[var(--border)] bg-[var(--accent-soft)] px-4 py-2 font-mono text-[11px] uppercase tracking-[0.24em] theme-accent-strong">
                  Secure Session
                </div>
              </div>

              <div className="grid gap-5 xl:grid-cols-[1.05fr_0.95fr]">
                <section className="rounded-[1.75rem] border border-[var(--border)] bg-[var(--background-elevated)]/80 p-5">
                  <p className="font-mono text-xs uppercase tracking-[0.26em] theme-accent">
                    Research command
                  </p>
                  <h2 className="theme-heading mt-3 text-3xl font-bold">
                    MSRC Case #108637
                  </h2>
                  <p className="theme-copy mt-3 text-sm leading-6">
                    Pre-auth identity intelligence focused on unauthenticated enumeration
                    conditions across Entra-linked discovery flows and mail-edge behavior.
                  </p>

                  <div className="mt-5 space-y-3">
                    {signalBoard.map((item) => (
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
                    War room feed
                  </p>

                  <div className="mt-4 space-y-3">
                    {warRoomFeed.map((item) => (
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
                        Audit class
                      </p>
                      <p className="theme-heading mt-2 text-lg font-bold">
                        Perimeter Intelligence
                      </p>
                    </div>
                    <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-4 py-4">
                      <p className="font-mono text-[11px] uppercase tracking-[0.22em] theme-soft">
                        Compute mode
                      </p>
                      <p className="theme-heading mt-2 text-lg font-bold">Air-Gapped GPU</p>
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
