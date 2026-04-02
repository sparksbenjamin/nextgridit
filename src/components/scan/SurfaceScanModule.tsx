"use client"

import * as React from "react"
import { IconArrowRight, IconShieldLock, IconX } from "@tabler/icons-react"
import { looksLikeDomain, surfaceScanSteps, type SurfaceScanResult } from "@/lib/surface-scan"

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

type SurfaceScanModuleProps = {
  sectionTitle: string
  sectionDescription: string
  anchorId?: string
}

function delay(ms: number) {
  return new Promise((resolve) => {
    window.setTimeout(resolve, ms)
  })
}

function looksLikeBusinessEmail(value: string) {
  const normalized = value.trim().toLowerCase()
  const match = normalized.match(/^[^\s@]+@([^\s@]+\.[^\s@]+)$/)

  if (!match) {
    return false
  }

  return !personalDomains.has(match[1])
}

export function SurfaceScanModule({
  sectionTitle,
  sectionDescription,
  anchorId,
}: SurfaceScanModuleProps) {
  const [domain, setDomain] = React.useState("")
  const [email, setEmail] = React.useState("")
  const [submittedDomain, setSubmittedDomain] = React.useState("")
  const [activeSteps, setActiveSteps] = React.useState(0)
  const [isRunning, setIsRunning] = React.useState(false)
  const [hasOverlay, setHasOverlay] = React.useState(false)
  const [isUnlocked, setIsUnlocked] = React.useState(false)
  const [domainError, setDomainError] = React.useState("")
  const [emailError, setEmailError] = React.useState("")
  const [scanError, setScanError] = React.useState("")
  const [result, setResult] = React.useState<SurfaceScanResult | null>(null)

  function resetOverlay() {
    setHasOverlay(false)
    setIsRunning(false)
    setIsUnlocked(false)
    setActiveSteps(0)
    setEmailError("")
    setScanError("")
    setResult(null)
  }

  async function handleScanSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const normalizedDomain = domain.trim().toLowerCase()

    if (!looksLikeDomain(normalizedDomain)) {
      setDomainError("Enter a valid domain such as example.com.")
      return
    }

    setDomainError("")
    setEmailError("")
    setScanError("")
    setResult(null)
    setIsUnlocked(false)
    setActiveSteps(0)
    setSubmittedDomain(normalizedDomain)
    setHasOverlay(true)
    setIsRunning(true)

    const scanRequest = fetch("/api/surface-scan", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ domain: normalizedDomain }),
    }).then(async (response) => {
      const payload = (await response.json()) as SurfaceScanResult | { error?: string }
      const errorPayload = payload as { error?: string }

      if (!response.ok || typeof errorPayload.error === "string") {
        throw new Error(errorPayload.error ?? "Surface scan failed.")
      }

      return payload as SurfaceScanResult
    })

    for (let index = 0; index < surfaceScanSteps.length; index += 1) {
      await delay(700)
      setActiveSteps(index + 1)
    }

    try {
      const scanResult = await scanRequest
      setResult(scanResult)
    } catch (error) {
      setScanError(
        error instanceof Error ? error.message : "We could not complete the surface scan."
      )
    } finally {
      setIsRunning(false)
    }
  }

  function handleUnlockSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (!looksLikeBusinessEmail(email)) {
      setEmailError("Use a business email address to request the full intelligence brief.")
      return
    }

    setEmailError("")
    setIsUnlocked(true)
  }

  return (
    <section
      id={anchorId}
      className="relative border-t border-[var(--border)] py-24"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[linear-gradient(180deg,rgba(9,13,19,0.96),rgba(10,16,22,0.99))] p-6 text-slate-100 shadow-[0_22px_80px_-42px_rgba(0,0,0,0.9)] md:p-8">
          <div className="absolute inset-0 cyber-grid opacity-10" />
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/50 to-transparent" />

          <div className="relative z-10">
            <div className="max-w-3xl">
              <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-cyan-200/80">
                Active perimeter intelligence
              </p>
              <h2 className="font-mono text-3xl font-bold text-white md:text-5xl">
                {sectionTitle}
              </h2>
              <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate-300">
                {sectionDescription}
              </p>
            </div>

            <form onSubmit={handleScanSubmit} className="mt-8 flex flex-col gap-4 lg:flex-row">
              <input
                type="text"
                value={domain}
                onChange={(event) => setDomain(event.target.value)}
                placeholder="Enter Domain for Instant Exposure Audit"
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
              <p className="relative z-10 mt-3 font-mono text-sm text-rose-300">{domainError}</p>
            ) : null}
          </div>

          {hasOverlay ? (
            <div className="absolute inset-0 z-20 bg-[rgba(4,8,13,0.94)] backdrop-blur-sm">
              <div className="flex h-full flex-col justify-between p-6 md:p-8">
                <div className="mb-6 flex items-center justify-between gap-4 border-b border-white/10 pb-4">
                  <div>
                    <p className="font-mono text-xs uppercase tracking-[0.28em] text-cyan-200/80">
                      Terminal overlay
                    </p>
                    <h3 className="mt-2 font-mono text-2xl font-bold text-white md:text-3xl">
                      Surface scan for {submittedDomain}
                    </h3>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 font-mono text-xs uppercase tracking-[0.2em] text-emerald-200">
                      {isRunning ? "overlay active" : "brief ready"}
                    </div>
                    <button
                      type="button"
                      onClick={resetOverlay}
                      disabled={isRunning}
                      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 font-mono text-xs uppercase tracking-[0.2em] text-slate-200 disabled:cursor-not-allowed disabled:opacity-40"
                    >
                      <IconX className="h-4 w-4" />
                      Reset
                    </button>
                  </div>
                </div>

                <div className="grid flex-1 gap-6 lg:grid-cols-[0.95fr_1.05fr]">
                  <section className="rounded-[1.5rem] border border-white/10 bg-[#0b1016] p-5">
                    <div className="mb-4 flex items-center gap-2 border-b border-white/10 pb-4 font-mono text-xs uppercase tracking-[0.24em] text-slate-400">
                      <span className="h-3 w-3 rounded-full bg-rose-400/90" />
                      <span className="h-3 w-3 rounded-full bg-amber-400/90" />
                      <span className="h-3 w-3 rounded-full bg-emerald-400/90" />
                      <span className="ml-2">terminal // perimeter_intel</span>
                    </div>

                    <div className="space-y-3 font-mono text-sm text-slate-300">
                      {surfaceScanSteps.map((step, index) => {
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
                              <span>{`> ${index + 1}. ${step}`}</span>
                              <span className="text-[11px] uppercase tracking-[0.2em] text-slate-400">
                                {isVisible ? (isCurrent ? "running" : "complete") : "queued"}
                              </span>
                            </div>
                          </div>
                        )
                      })}

                      {scanError ? (
                        <div className="rounded-xl border border-rose-400/30 bg-rose-400/10 px-4 py-4 text-rose-200">
                          {scanError}
                        </div>
                      ) : null}
                    </div>
                  </section>

                  <section className="rounded-[1.5rem] border border-white/10 bg-[#0b1016] p-5">
                    <div className="mb-5 flex flex-col gap-4 border-b border-white/10 pb-5 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <p className="font-mono text-xs uppercase tracking-[0.24em] text-slate-400">
                          Result preview
                        </p>
                        <h3 className="mt-2 text-2xl font-semibold text-white">
                          {result ? result.environment : "Awaiting risk brief"}
                        </h3>
                      </div>
                      <div className="rounded-2xl border border-amber-300/20 bg-amber-300/10 px-4 py-3 text-center">
                        <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-amber-100/80">
                          Risk Score
                        </p>
                        <p className="mt-1 font-mono text-2xl font-bold text-amber-200">
                          {result ? `${result.riskScore}/100` : "--/100"}
                        </p>
                      </div>
                    </div>

                    {result ? (
                      <>
                        <div className={`space-y-4 transition ${isUnlocked ? "" : "select-none blur-sm"}`}>
                          <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                            <p className="font-mono text-xs uppercase tracking-[0.22em] text-slate-400">
                              Environment
                            </p>
                            <p className="mt-2 text-slate-200">{result.finding}</p>
                          </div>
                          <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                            <p className="font-mono text-xs uppercase tracking-[0.22em] text-slate-400">
                              Exposure Focus
                            </p>
                            <p className="mt-2 text-slate-200">{result.focus}</p>
                          </div>
                          <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                            <p className="font-mono text-xs uppercase tracking-[0.22em] text-slate-400">
                              Intelligence Brief
                            </p>
                            <ul className="mt-3 space-y-2 text-slate-200">
                              {result.technicalBrief.map((item) => (
                                <li key={item}>{item}</li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        {!isUnlocked ? (
                          <div className="mt-6 rounded-[1.5rem] border border-cyan-400/20 bg-cyan-400/8 p-5">
                            <p className="font-mono text-sm uppercase tracking-[0.22em] text-cyan-100">
                              Critical findings identified. Enter your business email to request the full Intelligence Brief.
                            </p>
                            <form onSubmit={handleUnlockSubmit} className="mt-4 flex flex-col gap-3 sm:flex-row">
                              <input
                                type="email"
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                                placeholder="name@company.com"
                                className="min-h-12 flex-1 rounded-2xl border border-white/10 bg-[#091019] px-4 font-mono text-sm text-slate-100 outline-none transition focus:border-cyan-400/40"
                                aria-label="Enter business email to request the full intelligence brief"
                              />
                              <button
                                type="submit"
                                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-emerald-300 px-5 font-mono text-xs font-bold uppercase tracking-[0.2em] text-slate-950 transition hover:bg-emerald-200"
                              >
                                Request Full Intelligence Brief
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
                              Intelligence brief requested
                            </p>
                            <p className="mt-2">{result.summary}</p>
                          </div>
                        )}
                      </>
                    ) : (
                      <div className="rounded-2xl border border-dashed border-white/10 px-4 py-8 text-slate-500">
                        The blurred results preview will appear here once the scan completes.
                      </div>
                    )}
                  </section>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  )
}
