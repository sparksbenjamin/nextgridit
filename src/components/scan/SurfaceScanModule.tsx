"use client"

import * as React from "react"
import Link from "next/link"
import { IconArrowRight, IconRefresh, IconShieldLock } from "@tabler/icons-react"
import { looksLikeDomain, surfaceScanSteps, type SurfaceScanResult } from "@/lib/surface-scan"

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

export function SurfaceScanModule({
  sectionTitle,
  sectionDescription,
  anchorId,
}: SurfaceScanModuleProps) {
  const [domain, setDomain] = React.useState("")
  const [submittedDomain, setSubmittedDomain] = React.useState("")
  const [activeSteps, setActiveSteps] = React.useState(0)
  const [isRunning, setIsRunning] = React.useState(false)
  const [domainError, setDomainError] = React.useState("")
  const [scanError, setScanError] = React.useState("")
  const [result, setResult] = React.useState<SurfaceScanResult | null>(null)
  const terminalRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    if (!terminalRef.current) {
      return
    }

    terminalRef.current.scrollTop = terminalRef.current.scrollHeight
  }, [activeSteps, scanError, result])

  function resetScan() {
    setDomain("")
    setSubmittedDomain("")
    setActiveSteps(0)
    setIsRunning(false)
    setDomainError("")
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
    setScanError("")
    setResult(null)
    setActiveSteps(0)
    setSubmittedDomain(normalizedDomain)
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
      await delay(320)
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

  return (
    <section id={anchorId} className="relative border-t border-[var(--border)] py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 cyber-grid opacity-[0.05]" />
        <div className="absolute left-[12%] top-0 h-56 w-56 rounded-full blur-[120px]" style={{ backgroundColor: "var(--hero-glow-one)" }} />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-3xl">
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] theme-accent">
            Active intelligence
          </p>
          <h2 className="theme-heading text-4xl font-bold md:text-5xl">{sectionTitle}</h2>
          <p className="theme-copy mt-4 max-w-2xl text-lg leading-relaxed">
            {sectionDescription}
          </p>
        </div>

        <div className="grid gap-6 xl:grid-cols-[1.02fr_0.98fr]">
          <section className="glass-panel overflow-hidden rounded-[2rem] border border-[var(--border)]">
            <div className="flex items-center justify-between gap-4 border-b border-[var(--border)] px-6 py-4">
              <div className="flex items-center gap-3">
                <span className="h-3 w-3 rounded-full bg-rose-500/80" />
                <span className="h-3 w-3 rounded-full bg-amber-400/80" />
                <span className="h-3 w-3 rounded-full bg-emerald-400/90" />
                <span className="pl-2 font-mono text-xs uppercase tracking-[0.24em] theme-soft">
                  surface_scan.sh
                </span>
              </div>
              <span className="font-mono text-[11px] uppercase tracking-[0.24em] theme-accent-strong">
                {isRunning ? "Running" : result ? "Brief staged" : "Idle"}
              </span>
            </div>

            <div className="p-6">
              <form onSubmit={handleScanSubmit} className="flex flex-col gap-4 sm:flex-row">
                <input
                  type="text"
                  value={domain}
                  onChange={(event) => setDomain(event.target.value)}
                  placeholder="[ Enter Domain ]"
                  className="min-h-14 flex-1 rounded-2xl border border-[var(--border)] bg-[rgba(4,8,13,0.92)] px-5 font-mono text-base text-[var(--foreground)] outline-none transition focus:border-[var(--accent)]"
                  aria-label="Enter domain for instant perimeter audit"
                />
                <button
                  type="submit"
                  disabled={isRunning}
                  className="button-primary inline-flex min-h-14 items-center justify-center gap-2 rounded-2xl px-6 font-mono text-sm font-bold uppercase tracking-[0.22em] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  <IconShieldLock className="h-5 w-5" />
                  {isRunning ? "Scanning..." : "Execute Scan"}
                </button>
              </form>

              {domainError ? (
                <p className="mt-3 font-mono text-sm text-rose-300">{domainError}</p>
              ) : null}

              <div
                ref={terminalRef}
                className="mt-6 h-[23rem] overflow-y-auto rounded-[1.5rem] border border-[var(--border)] bg-[#04070b] p-4"
              >
                <div className="space-y-3 font-mono text-sm">
                  {activeSteps === 0 ? (
                    <>
                      <p className="theme-soft">
                        &gt; waiting for target input...
                      </p>
                      <p className="theme-soft">
                        &gt; accepted input format: apex domain or delegated subdomain
                      </p>
                    </>
                  ) : null}

                  {surfaceScanSteps.slice(0, activeSteps).map((step, index) => {
                    const isCurrent = isRunning && index === activeSteps - 1

                    return (
                      <div
                        key={`${step}-${index}`}
                        className="rounded-xl border border-[var(--border)] bg-[rgba(7,13,18,0.96)] px-4 py-3"
                      >
                        <div className="flex items-center justify-between gap-4">
                          <span className={isCurrent ? "theme-accent-strong" : "text-slate-200"}>
                            {step}
                          </span>
                          <span className="text-[11px] uppercase tracking-[0.22em] theme-soft">
                            {isCurrent ? "active" : "logged"}
                          </span>
                        </div>
                      </div>
                    )
                  })}

                  {result ? (
                    <div className="rounded-xl border border-[var(--accent)]/30 bg-[var(--accent-soft)] px-4 py-3 text-slate-100">
                      <div className="flex items-center justify-between gap-4">
                        <span>[RESULT] Exposure profile generated for {result.domain}.</span>
                        <span className="font-mono text-[11px] uppercase tracking-[0.22em] theme-accent-strong">
                          complete
                        </span>
                      </div>
                    </div>
                  ) : null}

                  {scanError ? (
                    <div className="rounded-xl border border-rose-400/30 bg-rose-400/10 px-4 py-3 text-rose-200">
                      {scanError}
                    </div>
                  ) : null}
                </div>
              </div>

              <div className="mt-5 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={resetScan}
                  className="button-secondary inline-flex items-center gap-2 rounded-full px-5 py-3 font-mono text-xs font-bold uppercase tracking-[0.2em]"
                >
                  <IconRefresh className="h-4 w-4" />
                  Reset
                </button>
                {submittedDomain ? (
                  <span className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-3 font-mono text-xs uppercase tracking-[0.2em] theme-soft">
                    Target: {submittedDomain}
                  </span>
                ) : null}
              </div>
            </div>
          </section>

          <section className="glass-panel rounded-[2rem] border border-[var(--border)] p-6">
            <div className="flex items-start justify-between gap-4 border-b border-[var(--border)] pb-5">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.26em] theme-accent">
                  Exposure brief preview
                </p>
                <h3 className="theme-heading mt-3 text-3xl font-bold">
                  {result ? result.environment : "Awaiting target domain"}
                </h3>
              </div>
              <div className="rounded-[1.5rem] border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-center">
                <p className="font-mono text-[11px] uppercase tracking-[0.24em] theme-soft">
                  Risk Score
                </p>
                <p className="theme-heading mt-1 text-3xl font-bold">
                  {result ? result.riskScore : "--"}
                </p>
              </div>
            </div>

            {result ? (
              <>
                <div className="relative mt-6">
                  <div className="pointer-events-none space-y-4 select-none blur-[6px]">
                    <div className="rounded-[1.5rem] border border-[var(--border)] bg-[var(--surface)] p-4">
                      <p className="font-mono text-xs uppercase tracking-[0.22em] theme-soft">
                        Finding
                      </p>
                      <p className="theme-copy mt-3 leading-relaxed">{result.finding}</p>
                    </div>
                    <div className="rounded-[1.5rem] border border-[var(--border)] bg-[var(--surface)] p-4">
                      <p className="font-mono text-xs uppercase tracking-[0.22em] theme-soft">
                        Exposure Focus
                      </p>
                      <p className="theme-copy mt-3 leading-relaxed">{result.focus}</p>
                    </div>
                    <div className="rounded-[1.5rem] border border-[var(--border)] bg-[var(--surface)] p-4">
                      <p className="font-mono text-xs uppercase tracking-[0.22em] theme-soft">
                        Preview Highlights
                      </p>
                      <ul className="mt-3 space-y-2">
                        {result.technicalBrief.map((item) => (
                          <li key={item} className="theme-copy">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[var(--background)] via-[var(--background)]/88 to-transparent" />
                </div>

                <div className="mt-6 rounded-[1.75rem] border border-[var(--accent)]/30 bg-[var(--accent-soft)] p-5">
                  <p className="font-mono text-xs uppercase tracking-[0.24em] theme-accent-strong">
                    Full report gated
                  </p>
                  <p className="theme-copy mt-3 leading-relaxed">
                    A full exposure brief for <span className="theme-heading">{result.domain}</span>{" "}
                    includes narrative analysis, enumerated control gaps, and remediation priorities.
                  </p>
                  <Link
                    href="/contact/"
                    className="button-primary mt-5 inline-flex items-center gap-2 rounded-full px-6 py-3 font-mono text-sm font-bold uppercase tracking-[0.2em]"
                  >
                    Request Full Exposure Brief
                    <IconArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </>
            ) : (
              <div className="mt-6 rounded-[1.75rem] border border-dashed border-[var(--border)] bg-[var(--surface)]/40 p-6">
                <p className="font-mono text-xs uppercase tracking-[0.24em] theme-soft">
                  Preview staging
                </p>
                <p className="theme-copy mt-3 leading-relaxed">
                  Run a scan to stage a blurred exposure brief with mail-edge classification,
                  research context, and an instant risk score.
                </p>
              </div>
            )}
          </section>
        </div>
      </div>
    </section>
  )
}
