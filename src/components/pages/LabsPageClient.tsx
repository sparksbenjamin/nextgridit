"use client"

import {
  IconBinaryTree2,
  IconCpu2,
  IconShieldLock,
  IconTargetArrow,
} from "@tabler/icons-react"
import { SurfaceScanModule } from "@/components/scan/SurfaceScanModule"

const researchSignals = [
  {
    title: "Research vector",
    copy: "Mapping whether public Entra-adjacent identity and mail-discovery workflows emit enough differential signal to validate principals or tenant alignment before authentication.",
  },
  {
    title: "Operational impact",
    copy: "If reproducible at scale, the condition materially improves username harvesting, password-spray efficiency, tenant profiling, and business-email-compromise preparation.",
  },
  {
    title: "Defensive lens",
    copy: "Recommended mitigations center on symmetric pre-auth behavior, legacy discovery reduction, tighter identity controls, and monitoring around low-noise enumeration attempts.",
  },
]

export function LabsPageClient() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <section className="relative overflow-hidden border-b border-[var(--border)]">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 cyber-grid opacity-[0.07]" />
          <div className="absolute left-[-8rem] top-[-4rem] h-80 w-80 rounded-full blur-[120px]" style={{ backgroundColor: "var(--hero-glow-one)" }} />
          <div className="absolute right-[-6rem] top-20 h-96 w-96 rounded-full blur-[150px]" style={{ backgroundColor: "var(--hero-glow-two)" }} />
        </div>

        <div className="relative z-10 container mx-auto px-4 py-20 sm:px-6 lg:px-8">
          <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2 font-mono text-xs uppercase tracking-[0.28em] theme-accent-strong">
            <span className="h-2.5 w-2.5 rounded-full bg-[var(--accent)] shadow-[0_0_14px_var(--accent)]" />
            NextGrid Labs
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-end">
            <div className="max-w-4xl">
              <h1 className="theme-heading text-4xl font-bold leading-tight md:text-6xl">
                Featured Research: MSRC Case #108637
              </h1>
              <p className="theme-copy mt-6 max-w-3xl text-lg leading-relaxed">
                NextGrid Labs tracks pre-auth identity exposure, mail-edge behavior, and
                controlled private-AI analysis. Current research centers on unauthenticated
                account enumeration conditions in Microsoft Entra ID-adjacent workflows and the
                operational leverage that differential pre-auth responses create for attackers.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-[var(--border)] bg-[var(--surface)]/90 p-6 shadow-[0_30px_80px_-55px_rgba(0,0,0,0.8)]">
              <p className="font-mono text-xs uppercase tracking-[0.3em] theme-soft">
                Research posture
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                {["Coordinated disclosure", "Pre-auth identity analysis", "Mail-edge telemetry", "Air-gapped AI"].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[var(--border)] bg-[var(--background-elevated)] px-3 py-2 font-mono text-[11px] uppercase tracking-[0.22em] theme-copy"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <p className="theme-copy mt-5 leading-relaxed">
                The public summary is intentionally measured. Exact exploit paths and validation
                details remain inside coordinated disclosure boundaries while the research track is
                active.
              </p>
            </div>
          </div>

          <div className="mt-12 grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
            <section className="rounded-[1.75rem] border border-[var(--border)] bg-[var(--surface)]/90 p-6">
              <div className="mb-5 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.28em] theme-accent">
                <IconBinaryTree2 className="h-5 w-5" />
                Featured Research Summary
              </div>
              <div className="space-y-5 theme-copy leading-relaxed">
                <p>
                  MSRC Case #108637 tracks a research hypothesis around whether public identity
                  and mail-discovery endpoints can leak enough differential behavior to confirm a
                  valid principal or tenant relationship without first obtaining credentials.
                </p>
                <p>
                  The analysis concentrates on response symmetry, protocol branching, timing
                  variance, and legacy discovery heuristics that may allow an external actor to
                  turn low-noise reconnaissance into higher-confidence account enumeration.
                </p>
                <p>
                  In practical terms, this is the kind of weakness that can compress the
                  reconnaissance stage for password spraying, tenant profiling, and downstream
                  social-engineering operations. That is why the work is framed around both root
                  cause and defender-oriented mitigation.
                </p>
              </div>
            </section>

            <section className="rounded-[1.75rem] border border-[var(--border)] bg-[var(--surface)]/90 p-6">
              <div className="mb-5 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.28em] theme-accent">
                <IconTargetArrow className="h-5 w-5" />
                Research Controls
              </div>
              <div className="space-y-4">
                {researchSignals.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-[var(--border)] bg-[var(--background-elevated)] px-4 py-4"
                  >
                    <p className="font-mono text-[11px] uppercase tracking-[0.22em] theme-soft">
                      {item.title}
                    </p>
                    <p className="theme-copy mt-2 text-sm leading-6">{item.copy}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            <section className="rounded-[1.75rem] border border-[var(--border)] bg-[var(--surface)]/90 p-6">
              <div className="mb-4 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.28em] theme-accent-strong">
                <IconShieldLock className="h-5 w-5" />
                Exposure Engineering
              </div>
              <h2 className="theme-heading text-2xl font-bold">
                Research is paired with perimeter-intelligence workflows.
              </h2>
              <p className="theme-copy mt-4 leading-relaxed">
                Labs output is not just archival research. The same methodology feeds perimeter
                classification, mail-edge fingerprinting, and short-form executive briefs designed
                to translate technical exposure into actionable remediation priority.
              </p>
            </section>

            <section className="rounded-[1.75rem] border border-[var(--border)] bg-[var(--surface)]/90 p-6">
              <div className="mb-4 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.28em] theme-accent-strong">
                <IconCpu2 className="h-5 w-5" />
                Sovereign AI
              </div>
              <h2 className="theme-heading text-2xl font-bold">
                Air-gapped model execution for coding and threat analysis.
              </h2>
              <p className="theme-copy mt-4 leading-relaxed">
                NextGrid Labs uses private Qwen and Mistral deployments to accelerate technical
                analysis, code review, and exposure triage without letting source material,
                telemetry, or customer data leave the controlled environment.
              </p>
            </section>
          </div>
        </div>
      </section>

      <SurfaceScanModule
        anchorId="surface-scan"
        sectionTitle="Run Instant Perimeter Audit"
        sectionDescription="Use the labs terminal to classify the mail edge, cross-reference current research posture, and preview a blurred exposure brief before requesting the full report."
      />
    </div>
  )
}
