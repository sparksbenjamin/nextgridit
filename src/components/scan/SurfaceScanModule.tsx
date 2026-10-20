"use client"

import * as React from "react"
import Link from "next/link"
import { looksLikeDomain, type SurfaceScanResult } from "@/lib/surface-scan"

type SurfaceScanModuleProps = {
  sectionTitle: string
  sectionDescription: string
  anchorId?: string
}

export function SurfaceScanModule({ sectionTitle, sectionDescription, anchorId }: SurfaceScanModuleProps) {
  const inputId = React.useId()
  const [domain, setDomain] = React.useState("")
  const [isRunning, setIsRunning] = React.useState(false)
  const [error, setError] = React.useState("")
  const [result, setResult] = React.useState<SurfaceScanResult | null>(null)

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (isRunning) return
    setResult(null)
    const normalizedDomain = domain.trim().toLowerCase()
    if (!looksLikeDomain(normalizedDomain)) {
      setError("Enter a valid domain such as example.com.")
      return
    }
    setError("")
    setIsRunning(true)
    try {
      const response = await fetch("/api/surface-scan", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ domain: normalizedDomain }),
        signal: AbortSignal.timeout(12000),
      })
      const payload = await response.json()
      if (!response.ok) throw new Error(payload.error ?? "Lookup failed.")
      setResult(payload as SurfaceScanResult)
    } catch {
      setError("We could not complete the lookup. Please try again.")
    } finally {
      setIsRunning(false)
    }
  }

  return (
    <section id={anchorId} className="border-t border-[var(--border)] py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="theme-heading text-4xl font-bold md:text-5xl">{sectionTitle}</h2>
        <p className="theme-copy mt-4 max-w-2xl text-lg">{sectionDescription}</p>
        <div className="glass-panel mt-8 max-w-3xl p-6 sm:p-8">
          <form onSubmit={handleSubmit} aria-busy={isRunning}>
            <label htmlFor={inputId} className="theme-heading mb-2 block">Public domain</label>
            <div className="flex flex-col gap-4 sm:flex-row">
              <input
                id={inputId}
                value={domain}
                onChange={(event) => setDomain(event.target.value)}
                disabled={isRunning}
                required
                maxLength={253}
                autoCapitalize="none"
                autoComplete="off"
                spellCheck={false}
                placeholder="example.com"
                aria-describedby={`${inputId}-help`}
                aria-invalid={!!error}
                className="theme-input min-w-0 flex-1 rounded-xl p-3"
              />
              <button type="submit" disabled={isRunning} className="button-primary rounded-full px-6 py-3 disabled:opacity-60">
                {isRunning ? "Looking up…" : "Look up mail provider"}
              </button>
            </div>
            <p id={`${inputId}-help`} className="theme-copy mt-4 text-sm">
              Checks public DNS mail records. A security assessment requires a separate review of your environment.
            </p>
          </form>
          <div role="status" aria-live="polite">
            {isRunning && <p className="theme-copy mt-6">Querying public MX records…</p>}
            {result && (
              <div className="mt-6 space-y-4">
                <h3 className="theme-heading text-xl font-bold break-words">{result.domain}: {result.environment}</h3>
                {result.mxRecords.length > 0 && (
                  <ul className="theme-copy list-inside list-disc break-all font-mono text-sm">
                    {result.mxRecords.map((host) => <li key={host}>{host}</li>)}
                  </ul>
                )}
                <p className="theme-copy">{result.summary}</p>
                <Link href="/contact/" className="theme-link inline-block underline">Discuss a security assessment</Link>
              </div>
            )}
          </div>
          {error && <p role="alert" className="theme-copy mt-4">{error}</p>}
        </div>
      </div>
    </section>
  )
}
