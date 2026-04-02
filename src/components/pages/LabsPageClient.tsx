"use client"

import { IconBinaryTree2, IconCertificate } from "@tabler/icons-react"
import { SurfaceScanModule } from "@/components/scan/SurfaceScanModule"

export function LabsPageClient() {
  return (
    <div className="min-h-screen bg-[#0b0f14] text-slate-100">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(64,203,255,0.16),transparent_38%),radial-gradient(circle_at_bottom_right,_rgba(45,227,190,0.14),transparent_34%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.03),transparent_28%,rgba(255,255,255,0.02))]" />

        <div className="relative z-10 container mx-auto px-4 py-20 sm:px-6 lg:px-8">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 font-mono text-xs uppercase tracking-[0.28em] text-cyan-200/90">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            NextGrid Labs
          </div>

          <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-end">
            <div className="max-w-3xl">
              <h1 className="max-w-4xl font-mono text-4xl font-bold tracking-tight text-white md:text-6xl">
                Proprietary Vulnerability Research &amp; Zero-Day Intelligence.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
                NextGrid Labs extends the operating model with vulnerability research, mail-surface analysis, distributed telemetry review, and private AI-assisted security workflows designed for sensitive environments.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-cyan-400/20 bg-[#10161d]/90 p-6 shadow-[0_0_80px_-55px_rgba(56,189,248,0.8)]">
              <p className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-cyan-200/75">
                Research posture
              </p>
              <div className="flex flex-wrap gap-3">
                {["MSRC research", "T-Pot telemetry", "Private AI", "Exposure audits"].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-2 font-mono text-[11px] uppercase tracking-[0.22em] text-slate-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <section className="rounded-[1.75rem] border border-emerald-400/15 bg-[#10161d]/95 p-6 shadow-[0_0_70px_-50px_rgba(74,222,128,0.8)]">
              <div className="mb-4 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.28em] text-emerald-200">
                <IconCertificate className="h-5 w-5" />
                Research Card
              </div>
              <h2 className="text-xl font-semibold text-white">
                MSRC Case #108637: Active investigation into Unauthenticated Account Enumeration in Microsoft Entra ID and Autodiscover protocols.
              </h2>
              <p className="mt-4 leading-relaxed text-slate-300">
                Current analysis focuses on enumeration behavior, protocol edge conditions, and validation paths that can inform both external discovery and tenant hardening recommendations.
              </p>
            </section>

            <section className="rounded-[1.75rem] border border-cyan-400/15 bg-[#10161d]/95 p-6 shadow-[0_0_70px_-52px_rgba(56,189,248,0.8)]">
              <div className="mb-4 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.28em] text-cyan-200">
                <IconBinaryTree2 className="h-5 w-5" />
                Telemetry Card
              </div>
              <h2 className="text-xl font-semibold text-white">
                Global Threat Map: Real-time attack data processed from our distributed T-Pot honeypot arrays via on-premise Private AI (Qwen/Mistral).
              </h2>
              <p className="mt-4 leading-relaxed text-slate-300">
                Telemetry flows through controlled analysis layers so attack trends, scanner behavior, and exploit hypotheses can be summarized without handing raw signals to public tooling.
              </p>
            </section>
          </div>
        </div>
      </section>

      <SurfaceScanModule
        anchorId="surface-scan"
        sectionTitle="Enter Domain for Instant Exposure Audit"
        sectionDescription="Run the same perimeter-intelligence demo against a target domain and watch the terminal overlay classify mail infrastructure, cross-reference active research templates, and generate a private AI-backed risk brief."
      />
    </div>
  )
}
