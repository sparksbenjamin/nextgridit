"use client"

import * as React from "react"
import Spline from "@splinetool/react-spline"
import { motion } from "framer-motion"
import Link from "next/link"
import { IconMapPin, IconPhone, IconServerCog, IconShieldLock } from "@tabler/icons-react"

export function HeroSection() {
  const [showScene, setShowScene] = React.useState(false)

  React.useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px) and (prefers-reduced-motion: no-preference)")
    const updateSceneState = () => {
      const hackerMode = document.documentElement.dataset.theme === "hacker"
      setShowScene(mediaQuery.matches && hackerMode)
    }

    updateSceneState()
    mediaQuery.addEventListener("change", updateSceneState)

    const observer = new MutationObserver(updateSceneState)
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] })

    return () => {
      mediaQuery.removeEventListener("change", updateSceneState)
      observer.disconnect()
    }
  }, [])

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-b from-[var(--background)]/60 via-transparent to-[var(--background)]" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[80vw] w-[80vw] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[120px]" style={{ backgroundColor: "var(--hero-glow-one)" }} />
      <div className="pointer-events-none absolute left-1/4 top-1/2 h-[40vw] w-[40vw] -translate-y-1/2 rounded-full blur-[100px]" style={{ backgroundColor: "var(--hero-glow-two)" }} />

      {showScene ? (
        <div className="absolute right-0 top-0 w-full lg:w-2/3 h-full z-0 opacity-60 lg:opacity-100">
          <Spline scene="https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode" />
        </div>
      ) : (
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-x-[10%] top-[14%] h-px bg-[var(--border)]" />
          <div className="absolute right-[12%] top-[18%] h-48 w-48 rounded-full blur-[80px]" style={{ backgroundColor: "var(--hero-glow-one)" }} />
          <div className="absolute right-[28%] bottom-[18%] h-56 w-56 rounded-full blur-[90px]" style={{ backgroundColor: "var(--hero-glow-two)" }} />
          <div className="absolute bottom-[16%] left-[10%] hidden h-40 w-40 rounded-full border border-[var(--border)] bg-[var(--surface)] lg:block" />
        </div>
      )}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="theme-chip mb-6 inline-flex items-center gap-2 rounded-full px-4 py-2"
          >
            <span className="h-2 w-2 rounded-full theme-accent-alt" style={{ backgroundColor: "var(--accent-alt)" }} />
            <span className="theme-copy text-xs font-mono uppercase tracking-[0.28em]">Upstate South Carolina IT and Security Support</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="theme-heading mb-6 font-sans text-5xl font-bold leading-tight sm:text-6xl lg:text-7xl"
          >
            Network Infrastructure,
            <br />
            <span className="text-glow-cyan bg-gradient-to-r from-[var(--accent)] to-[var(--accent-strong)] bg-clip-text text-transparent">
              Security, and IT Support
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="theme-copy mb-8 max-w-2xl font-mono text-lg leading-relaxed sm:text-xl"
          >
            NextGridIT helps medical offices, small businesses, municipal teams, and multi-building properties build reliable networks, strengthen security, modernize cloud systems, and deploy local-first technology without enterprise-sized overhead.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="theme-copy mb-10 flex flex-col gap-3 font-mono text-sm"
          >
            <div className="flex items-center gap-2">
              <IconMapPin className="h-4 w-4 theme-accent-strong" />
              <span>Serving Upstate South Carolina with travel available for larger projects and specialty engagements.</span>
            </div>
            <div className="flex items-center gap-2">
              <IconPhone className="h-4 w-4 theme-accent" />
              <a href="tel:8647800202" className="theme-link">864-780-0202</a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="/contact"
              className="button-primary inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-8 py-4 font-mono font-bold uppercase tracking-[0.2em]"
            >
              <IconShieldLock className="w-5 h-5 z-10" />
              <span className="relative z-10">Start by Email</span>
            </Link>

            <Link
              href="/services"
              className="button-secondary inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 font-mono font-bold uppercase tracking-[0.2em]"
            >
              <IconServerCog className="h-5 w-5 theme-accent" />
              <span>View Services</span>
            </Link>
          </motion.div>
        </div>
      </div>

      <div className="scan-overlay pointer-events-none absolute inset-0 h-20 -translate-y-[100%] animate-[scan_8s_ease-in-out_infinite] bg-gradient-to-b from-transparent via-[var(--accent)]/10 to-transparent" />

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes scan {
          0% { transform: translateY(-100%); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(100vh); opacity: 0; }
        }
      ` }} />
    </section>
  )
}
