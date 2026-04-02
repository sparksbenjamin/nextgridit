"use client"

import * as React from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import {
  IconArrowRight,
  IconBinaryTree2,
  IconMapPin,
  IconPhone,
  IconServerCog,
  IconShieldLock,
} from "@tabler/icons-react"

export function HeroSection() {
  const [showScene, setShowScene] = React.useState(false)

  React.useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px) and (prefers-reduced-motion: no-preference)")
    const updateSceneState = () => {
      setShowScene(mediaQuery.matches)
    }

    updateSceneState()
    mediaQuery.addEventListener("change", updateSceneState)

    return () => {
      mediaQuery.removeEventListener("change", updateSceneState)
    }
  }, [])

  return (
    <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden">
      <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-b from-[var(--background)]/60 via-transparent to-[var(--background)]" />
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[80vw] w-[80vw] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[120px]"
        style={{ backgroundColor: "var(--hero-glow-one)" }}
      />
      <div
        className="pointer-events-none absolute left-[20%] top-1/2 h-[36vw] w-[36vw] -translate-y-1/2 rounded-full blur-[100px]"
        style={{ backgroundColor: "var(--hero-glow-two)" }}
      />

      {showScene ? (
        <div className="absolute right-0 top-0 z-0 hidden h-full w-full lg:block lg:w-2/3">
          <div className="absolute inset-y-[12%] right-[8%] left-[18%] rounded-[2rem] border border-[var(--border-strong)] bg-[var(--surface)] shadow-[0_30px_80px_-50px_var(--shadow-color)]" />
          <div className="absolute inset-y-[16%] right-[12%] left-[22%] overflow-hidden rounded-[1.75rem] border border-[var(--border)] bg-[var(--surface-strong)]">
            <div className="absolute inset-0 cyber-grid opacity-35" />
            <div className="absolute inset-x-0 top-0 h-14 border-b border-[var(--border)] bg-[var(--background-elevated)]/90" />
            <div className="absolute left-8 top-5 flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-rose-500/70" />
              <span className="h-3 w-3 rounded-full bg-amber-400/70" />
              <span className="h-3 w-3 rounded-full bg-emerald-500/70" />
            </div>
            <div className="absolute right-8 top-4 rounded-full border border-[var(--border)] px-4 py-2 font-mono text-xs uppercase tracking-[0.24em] theme-accent">
              labs online
            </div>

            <div className="absolute inset-x-10 top-24 grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
              <div className="rounded-[1.5rem] border border-[var(--border)] bg-[var(--background-elevated)]/75 p-6">
                <div className="mb-4 flex items-center gap-3">
                  <IconBinaryTree2 className="h-6 w-6 theme-accent-strong" />
                  <p className="font-mono text-xs uppercase tracking-[0.28em] theme-copy">
                    Deployment grid
                  </p>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    "150+ countries supported",
                    "Forward staging and sparing",
                    "Surface intelligence queues",
                    "Private AI isolated analysis",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-4 py-4 font-mono text-sm theme-copy"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4 rounded-[1.5rem] border border-[var(--border)] bg-[var(--background-elevated)]/75 p-6">
                <p className="font-mono text-xs uppercase tracking-[0.28em] theme-accent-alt">
                  Intelligence layer
                </p>
                <div className="space-y-4">
                  {[
                    ["MSRC case tracking", "Active research notes aligned to proprietary templates"],
                    ["Threat telemetry", "Distributed T-Pot arrays reviewed through private AI workflows"],
                    ["Exposure audit", "Passive discovery, mail fingerprinting, and risk brief generation"],
                  ].map(([label, value]) => (
                    <div key={label} className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-4 py-4">
                      <p className="mb-1 font-mono text-xs uppercase tracking-[0.24em] theme-soft">
                        {label}
                      </p>
                      <p className="text-sm theme-copy">{value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="pointer-events-none absolute inset-0 z-0">
          <div className="absolute inset-x-[10%] top-[14%] h-px bg-[var(--border)]" />
          <div className="absolute right-[12%] top-[18%] h-48 w-48 rounded-full blur-[80px]" style={{ backgroundColor: "var(--hero-glow-one)" }} />
          <div className="absolute bottom-[18%] right-[28%] h-56 w-56 rounded-full blur-[90px]" style={{ backgroundColor: "var(--hero-glow-two)" }} />
          <div className="absolute bottom-[16%] left-[10%] hidden h-40 w-40 rounded-full border border-[var(--border)] bg-[var(--surface)] lg:block" />
        </div>
      )}

      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="theme-chip mb-6 inline-flex items-center gap-2 rounded-full px-4 py-2"
          >
            <span
              className="h-2 w-2 rounded-full theme-accent-alt"
              style={{ backgroundColor: "var(--accent-alt)" }}
            />
            <span className="theme-copy text-xs font-mono uppercase tracking-[0.28em]">
              Global deployment operations with intelligence-led security
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="theme-heading mb-6 font-sans text-5xl font-bold leading-tight sm:text-6xl lg:text-7xl"
          >
            Global Infrastructure.
            <br />
            <span className="bg-gradient-to-r from-[var(--accent)] to-[var(--accent-strong)] bg-clip-text text-transparent">
              Sovereign Intelligence.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="theme-copy mb-8 max-w-2xl font-mono text-lg leading-relaxed sm:text-xl"
          >
            We deploy hardware in 150+ countries and discover the vulnerabilities the world hasn&apos;t seen yet. Home to MSRC-level vulnerability research and private AI security.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.24 }}
            className="theme-copy mb-10 flex flex-col gap-3 font-mono text-sm"
          >
            <div className="flex items-center gap-2">
              <IconMapPin className="h-4 w-4 theme-accent-strong" />
              <span>
                Rapid-response support across Upstate South Carolina with travel available for larger projects and specialty engagements.
              </span>
            </div>
            <div className="flex items-center gap-2">
              <IconPhone className="h-4 w-4 theme-accent" />
              <a href="tel:8647800202" className="theme-link">
                864-780-0202
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.28 }}
            className="flex flex-col gap-4 sm:flex-row"
          >
            <Link
              href="/labs/#surface-scan"
              className="button-primary inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-8 py-4 font-mono font-bold uppercase tracking-[0.2em]"
            >
              <IconShieldLock className="h-5 w-5" />
              <span>Run Surface Scan</span>
            </Link>

            <Link
              href="/labs/"
              className="button-secondary inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 font-mono font-bold uppercase tracking-[0.2em]"
            >
              <IconArrowRight className="h-5 w-5 theme-accent" />
              <span>Explore NextGrid Labs</span>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.32 }}
            className="mt-10 flex flex-wrap gap-3"
          >
            {[
              "Managed Security & Infrastructure",
              "MSRC Research",
              "Private AI",
              "Global Logistics",
            ].map((item) => (
              <span
                key={item}
                className="theme-chip inline-flex items-center gap-2 px-4 py-2 font-mono text-xs uppercase tracking-[0.2em]"
              >
                <IconServerCog className="h-4 w-4 theme-accent-strong" />
                {item}
              </span>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="scan-overlay pointer-events-none absolute inset-0 h-20 -translate-y-[100%] animate-[scan_8s_ease-in-out_infinite] bg-gradient-to-b from-transparent via-[var(--accent)]/10 to-transparent" />

      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes scan {
              0% { transform: translateY(-100%); opacity: 0; }
              10% { opacity: 1; }
              90% { opacity: 1; }
              100% { transform: translateY(100vh); opacity: 0; }
            }
          `,
        }}
      />
    </section>
  )
}
