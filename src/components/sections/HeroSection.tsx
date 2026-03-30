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
    const updateSceneState = () => setShowScene(mediaQuery.matches)

    updateSceneState()
    mediaQuery.addEventListener("change", updateSceneState)

    return () => mediaQuery.removeEventListener("change", updateSceneState)
  }, [])

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505] z-10 mix-blend-multiply pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-[#00f0ff]/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[40vw] h-[40vw] bg-[#39ff14]/5 blur-[100px] rounded-full pointer-events-none" />

      {showScene ? (
        <div className="absolute right-0 top-0 w-full lg:w-2/3 h-full z-0 opacity-60 lg:opacity-100">
          <Spline scene="https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode" />
        </div>
      ) : (
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute right-[12%] top-[18%] h-48 w-48 rounded-full bg-[#00f0ff]/10 blur-[80px]" />
          <div className="absolute right-[28%] bottom-[18%] h-56 w-56 rounded-full bg-[#39ff14]/10 blur-[90px]" />
        </div>
      )}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#b026ff]/30 bg-[#1a1a1a]/50 backdrop-blur-sm mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-[#b026ff] animate-pulse" />
            <span className="text-xs font-mono text-gray-300 uppercase tracking-widest">Upstate South Carolina IT and Security Support</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-sans font-bold text-white leading-tight mb-6"
          >
            Network Infrastructure,
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] to-[#39ff14] text-glow-cyan">
              Security, and IT Support
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg sm:text-xl text-gray-400 font-mono max-w-2xl mb-8 leading-relaxed"
          >
            NextGridIT helps medical offices, small businesses, municipal teams, and multi-building properties build reliable networks, strengthen security, modernize cloud systems, and deploy local-first technology without enterprise-sized overhead.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="flex flex-col gap-3 text-sm text-gray-300 font-mono mb-10"
          >
            <div className="flex items-center gap-2">
              <IconMapPin className="w-4 h-4 text-[#39ff14]" />
              <span>Serving Upstate South Carolina with travel available for larger projects and specialty engagements.</span>
            </div>
            <div className="flex items-center gap-2">
              <IconPhone className="w-4 h-4 text-[#00f0ff]" />
              <a href="tel:8647800202" className="hover:text-white transition-colors">864-780-0202</a>
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
              className="group relative px-8 py-4 bg-[#39ff14] text-black font-mono font-bold uppercase tracking-wider overflow-hidden inline-flex items-center justify-center gap-2 border border-[#39ff14] hover:shadow-[0_0_20px_rgba(57,255,20,0.4)] transition-all duration-300"
            >
              <IconShieldLock className="w-5 h-5 z-10" />
              <span className="relative z-10">Start by Email</span>
              <div className="absolute inset-0 h-full w-full bg-[#00f0ff] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            </Link>

            <Link
              href="/services"
              className="group px-8 py-4 bg-transparent text-white font-mono font-bold uppercase tracking-wider inline-flex items-center justify-center gap-2 border border-white/20 hover:border-[#00f0ff] hover:bg-white/5 transition-all duration-300 glass-panel"
            >
              <IconServerCog className="w-5 h-5 text-[#00f0ff] group-hover:text-[#39ff14] transition-colors" />
              <span>View Services</span>
            </Link>
          </motion.div>
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00f0ff]/10 to-transparent h-20 -translate-y-[100%] animate-[scan_8s_ease-in-out_infinite] pointer-events-none" />

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
