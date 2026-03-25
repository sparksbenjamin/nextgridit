"use client"

import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { IconShieldLock, IconServerCog } from '@tabler/icons-react'

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background gradients for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505] z-10 mix-blend-multiply pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-[#00f0ff]/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[40vw] h-[40vw] bg-[#39ff14]/5 blur-[100px] rounded-full pointer-events-none" />

      {/* 3D Spline Scene Background */}
      <div className="absolute right-0 top-0 w-full lg:w-2/3 h-full z-0 opacity-60 lg:opacity-100">
        <Spline scene="https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#b026ff]/30 bg-[#1a1a1a]/50 backdrop-blur-sm mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-[#b026ff] animate-pulse" />
            <span className="text-xs font-mono text-gray-300 uppercase tracking-widest">Enterprise Class, Small Business Focus</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-sans font-bold text-white leading-tight mb-6"
          >
            Fortify Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] to-[#39ff14] text-glow-cyan">
              Digital Infrastructure
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg sm:text-xl text-gray-400 font-mono max-w-2xl mb-10 leading-relaxed"
          >
            We bring Fortune 500 security protocols and advanced network setups to small organizations. Because cyber threats don&apos;t discriminate by size.
          </motion.p>

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
              <span className="relative z-10">Secure Your Network</span>
              <div className="absolute inset-0 h-full w-full bg-[#00f0ff] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            </Link>

            <Link 
              href="/services"
              className="group px-8 py-4 bg-transparent text-white font-mono font-bold uppercase tracking-wider inline-flex items-center justify-center gap-2 border border-white/20 hover:border-[#00f0ff] hover:bg-white/5 transition-all duration-300 glass-panel"
            >
              <IconServerCog className="w-5 h-5 text-[#00f0ff] group-hover:text-[#39ff14] transition-colors" />
              <span>Explore Solutions</span>
            </Link>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative scanner line */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00f0ff]/10 to-transparent h-20 -translate-y-[100%] animate-[scan_8s_ease-in-out_infinite] pointer-events-none" />
      
      {/* Simple CSS animation definition injected directly for this scanner */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes scan {
          0% { transform: translateY(-100%); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(100vh); opacity: 0; }
        }
      `}} />
    </section>
  )
}
