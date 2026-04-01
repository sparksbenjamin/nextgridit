"use client"

import * as React from "react"
import {
  IconArrowRight,
  IconBinaryTree2,
  IconCertificate,
  IconShieldLock,
} from "@tabler/icons-react"

const scanSteps = [
  "[INFO] Fingerprinting Mail Carrier (MS365 / Google Workspace / Apple)...",
  "[SCAN] Executing Passive DNS & Subdomain Enumeration...",
  "[INTEL] Correlating findings with NextGrid Proprietary MSRC Templates...",
  "[AI] Local LLM generating Risk Analysis Brief...",
]

const personalDomains = new Set([
  "gmail.com",
  "yahoo.com",
  "outlook.com",
  "hotmail.com",
  "icloud.com",
  "aol.com",
  "proton.me",
  "protonmail.com",
])

function delay(ms: number) {
  return new Promise((resolve) => {
    window.setTimeout(resolve, ms)
  })
}

function looksLikeDomain(value: string) {
  return /^(?!-)[a-z0-9-]+(\.[a-z0-9-]+)+$/i.test(value.trim())
}

function looksLikeBusinessEmail(value: string) {
  const normalized = value.trim().toLowerCase()
  const match = normalized.match(/^[^\s@]+@([^\s@]+\.[^\s@]+)$/)

  if (!match) {
    return false
  }

  return !personalDomains.has(match[1])
}

export function LabsPageClient() {
  const [domain, setDomain] = React.useState("")
  const [email, setEmail] = React.useState("")
  const [submittedDomain, setSubmittedDomain] = React.useState("")
  const [activeSteps, setActiveSteps] = React.useState(0)
  const [isRunning, setIsRunning] = React.useState(false)
  const [hasResult, setHasResult] = React.useState(false)
  const [isUnlocked, setIsUnlocked] = React.useState(false)
  const [domainError, setDomainError] = React.useState("")
  const [emailError, setEmailError] = React.useState("")

  async function handleScanSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const normalizedDomain = domain.trim().toLowerCase()

    if (!looksLikeDomain(normalizedDomain)) {
      setDomainError("Enter a valid domain such as example.com.")
      return
    }

    setDomainError("")
    setEmailError("")
    setIsUnlocked(false)
    setHasResult(false)
    setActiveSteps(0)
    setSubmittedDomain(normalizedDomain)
    setIsRunning(true)

    for (let index = 0; index < scanSteps.length; index += 1) {
      await delay(850)
      setActiveSteps(index + 1)
    }

    await delay(450)
    setHasResult(true)
    setIsRunning(false)
  }

  function handleUnlockSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (!looksLikeBusinessEmail(email)) {
      setEmailError("Use a business email address to unlock the full brief.")
      return
    }

    setEmailError("")
    setIsUnlocked(true)
  }

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
                NextGrid Labs extends the delivery architecture with research workflows, external exposure analysis, and private AI-assisted intelligence processing designed for sensitive environments.
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

      <section id="surface-scan" className="container mx-auto px-4 py-20 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-white/10 bg-[#0f141b] p-6 shadow-[0_18px_80px_-46px_rgba(0,0,0,0.95)] md:p-8">
          <div className="flex flex-col gap-6 border-b border-white/10 pb-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-cyan-200/80">
                Surface Scan
              </p>
              <h2 className="mt-3 font-mono text-3xl font-bold text-white">
                Enter Domain for Instant Exposure Audit.
              </h2>
              <p className="mt-3 max-w-2xl text-slate-300">
                This EASM-style intake simulates how NextGrid Labs fingerprints mail infrastructure, correlates passive findings, and frames initial exposure in a technical brief.
              </p>
            </div>
            <div className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 font-mono text-xs uppercase tracking-[0.24em] text-emerald-200">
              terminal ready
            </div>
          </div>

          <form onSubmit={handleScanSubmit} className="mt-8 flex flex-col gap-4 lg:flex-row">
            <input
              type="text"
              value={domain}
              onChange={(event) => setDomain(event.target.value)}
              placeholder="example.com"
              className="min-h-14 flex-1 rounded-2xl border border-white/10 bg-[#0b1016] px-5 font-mono text-base text-slate-100 outline-none transition focus:border-cyan-400/40"
              aria-label="Enter domain for instant exposure audit"
            />
            <button
              type="submit"
              disabled={isRunning}
              className="inline-flex min-h-14 items-center justify-center gap-2 rounded-2xl bg-cyan-400 px-6 font-mono text-sm font-bold uppercase tracking-[0.22em] text-slate-950 transition hover:bg-cyan-300 disabled:cursor-not-allowed disabled:bg-cyan-400/40"
            >
              <IconShieldLock className="h-5 w-5" />
              {isRunning ? "Scanning..." : "Run Surface Scan"}
            </button>
          </form>
          {domainError ? (
            <p className="mt-3 font-mono text-sm text-rose-300">{domainError}</p>
          ) : null}

          <div className="mt-8 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <section className="rounded-[1.75rem] border border-white/10 bg-[#0b1016] p-5">
              <div className="mb-4 flex items-center gap-2 border-b border-white/10 pb-4 font-mono text-xs uppercase tracking-[0.24em] text-slate-400">
                <span className="h-3 w-3 rounded-full bg-rose-400/90" />
                <span className="h-3 w-3 rounded-full bg-amber-400/90" />
                <span className="h-3 w-3 rounded-full bg-emerald-400/90" />
                <span className="ml-2">terminal // exposure_audit</span>
              </div>

              <div className="space-y-3 font-mono text-sm text-slate-300">
                {scanSteps.map((step, index) => {
                  const isVisible = activeSteps > index
                  const isCurrent = isRunning && activeSteps === index + 1

                  return (
                    <div
                      key={step}
                      className={`rounded-xl border px-4 py-3 transition ${
                        isVisible
                          ? "border-cyan-400/25 bg-cyan-400/10 text-cyan-50"
                          : "border-white/8 bg-white/5 text-slate-500"
                      }`}
                    >
                      <div className="flex items-center justify-between gap-3">
                        <span>{step}</span>
                        <span className="text-[11px] uppercase tracking-[0.2em] text-slate-400">
                          {isVisible ? (isCurrent ? "running" : "complete") : "queued"}
                        </span>
                      </div>
                    </div>
                  )
                })}

                {!hasResult && !isRunning ? (
                  <div className="rounded-xl border border-dashed border-white/10 px-4 py-4 text-slate-500">
                    Waiting for target input.
                  </div>
                ) : null}
              </div>
            </section>

            <section className="rounded-[1.75rem] border border-white/10 bg-[#0b1016] p-5">
              <div className="mb-5 flex flex-col gap-4 border-b border-white/10 pb-5 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.24em] text-slate-400">
                    Result State
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold text-white">
                    {hasResult ? `Surface summary for ${submittedDomain}` : "Awaiting scan result"}
                  </h3>
                </div>
                <div className="rounded-2xl border border-amber-300/20 bg-amber-300/10 px-4 py-3 text-center">
                  <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-amber-100/80">
                    Risk Score
                  </p>
                  <p className="mt-1 font-mono text-2xl font-bold text-amber-200">
                    {hasResult ? "82/100" : "--/100"}
                  </p>
                </div>
              </div>

              {hasResult ? (
                <>
                  <div className={`space-y-4 transition ${isUnlocked ? "" : "select-none blur-sm"}`}>
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <p className="font-mono text-xs uppercase tracking-[0.22em] text-slate-400">
                        Audit Summary
                      </p>
                      <p className="mt-2 text-slate-200">
                        Critical findings identified across mail exposure, passive DNS residue, and externally discoverable naming patterns.
                      </p>
                    </div>
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                        <p className="font-mono text-xs uppercase tracking-[0.22em] text-slate-400">
                          Mail Carrier
                        </p>
                        <p className="mt-2 text-slate-200">Microsoft 365 identified with legacy discovery residue.</p>
                      </div>
                      <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                        <p className="font-mono text-xs uppercase tracking-[0.22em] text-slate-400">
                          Exposure Pattern
                        </p>
                        <p className="mt-2 text-slate-200">Autodiscover and account enumeration signals present for further validation.</p>
                      </div>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <p className="font-mono text-xs uppercase tracking-[0.22em] text-slate-400">
                        Research Correlation
                      </p>
                      <p className="mt-2 text-slate-200">
                        Matching heuristics found across proprietary MSRC templates and telemetry-led enrichment paths.
                      </p>
                    </div>
                  </div>

                  {!isUnlocked ? (
                    <div className="mt-6 rounded-[1.5rem] border border-cyan-400/20 bg-cyan-400/8 p-5">
                      <p className="font-mono text-sm uppercase tracking-[0.22em] text-cyan-100">
                        Critical findings identified. Enter your business email to unlock the full Technical Exposure Brief.
                      </p>
                      <form onSubmit={handleUnlockSubmit} className="mt-4 flex flex-col gap-3 sm:flex-row">
                        <input
                          type="email"
                          value={email}
                          onChange={(event) => setEmail(event.target.value)}
                          placeholder="name@company.com"
                          className="min-h-12 flex-1 rounded-2xl border border-white/10 bg-[#091019] px-4 font-mono text-sm text-slate-100 outline-none transition focus:border-cyan-400/40"
                          aria-label="Enter business email to unlock technical exposure brief"
                        />
                        <button
                          type="submit"
                          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-emerald-300 px-5 font-mono text-xs font-bold uppercase tracking-[0.2em] text-slate-950 transition hover:bg-emerald-200"
                        >
                          Unlock Brief
                          <IconArrowRight className="h-4 w-4" />
                        </button>
                      </form>
                      {emailError ? (
                        <p className="mt-3 font-mono text-sm text-rose-300">{emailError}</p>
                      ) : null}
                    </div>
                  ) : (
                    <div className="mt-6 rounded-[1.5rem] border border-emerald-400/20 bg-emerald-400/10 p-5 text-emerald-100">
                      <p className="font-mono text-xs uppercase tracking-[0.24em]">
                        Brief unlocked
                      </p>
                      <p className="mt-2">
                        Demo state complete. Route this action to your CRM or secure intake workflow when you are ready to capture production leads.
                      </p>
                    </div>
                  )}
                </>
              ) : (
                <div className="rounded-2xl border border-dashed border-white/10 px-4 py-8 text-slate-500">
                  A blurred technical summary will render here after the scan completes.
                </div>
              )}
            </section>
          </div>
        </div>
      </section>
    </div>
  )
}
