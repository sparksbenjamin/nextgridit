import Link from "next/link"
import { IconCpu2, IconServerCog, IconShieldLock } from "@tabler/icons-react"

export function PrivateAISection() {
  return (
    <section className="border-t border-[var(--border)] py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-3xl">
          <p className="theme-accent mb-4 font-mono text-xs uppercase tracking-[0.28em]">
            Sovereign AI
          </p>
          <h2 className="theme-heading mb-4 text-3xl font-bold md:text-5xl">
            Private &amp; air-gapped AI built for coding and threat analysis.
          </h2>
          <p className="theme-copy text-lg leading-relaxed">
            Leverage LLMs like Qwen and Mistral for enterprise coding and threat analysis without third-party data leakage. NextGridIT deploys and manages dedicated on-premise GPU clusters for organizations that need privacy, performance, and control.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <section className="glass-panel border border-[var(--border)] p-8">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-[var(--border)] bg-[var(--surface-strong)]">
              <IconCpu2 className="h-7 w-7 theme-accent-strong" />
            </div>
            <p className="theme-soft mb-3 font-mono text-xs uppercase tracking-[0.24em]">
              Dedicated service
            </p>
            <h3 className="theme-heading mb-4 text-3xl font-bold">
              Private &amp; Air-Gapped AI Implementation
            </h3>
            <p className="theme-copy text-lg leading-relaxed">
              We design and deploy on-premise, air-gapped LLM clusters for enterprise coding, threat analysis, and research operations. Prompts, source code, internal documents, and telemetry remain inside your physical infrastructure.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {[
                "Air-gapped LLM clusters",
                "Qwen and Mistral deployment",
                "Dedicated GPU compute arrays",
                "Private threat-analysis workflows",
              ].map((item) => (
                <span
                  key={item}
                  className="theme-chip px-4 py-2 font-mono text-xs uppercase tracking-[0.2em]"
                >
                  {item}
                </span>
              ))}
            </div>
          </section>

          <section className="glass-panel border border-[var(--border)] p-8">
            <div className="space-y-6">
              {[
                {
                  title: "Air-Gapped Security",
                  description:
                    "Keep prompts, documents, telemetry, and research notes inside your own physical boundary.",
                  icon: <IconShieldLock className="h-5 w-5 theme-accent" />,
                },
                {
                  title: "GPU-Backed Compute",
                  description:
                    "Run serious local inference and retrieval workloads on purpose-built compute arrays instead of consumer-grade experiments.",
                  icon: <IconServerCog className="h-5 w-5 theme-accent-alt" />,
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-[var(--border)] bg-[var(--surface-strong)] p-5"
                >
                  <div className="mb-3 flex items-center gap-3">
                    {item.icon}
                    <h4 className="theme-heading font-mono text-lg font-bold">{item.title}</h4>
                  </div>
                  <p className="theme-copy leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/services/private-air-gapped-ai/"
                className="button-secondary rounded-full px-6 py-3 font-mono text-sm font-bold uppercase tracking-[0.2em]"
              >
                View AI Service
              </Link>
              <Link
                href="/contact/"
                className="button-secondary rounded-full px-6 py-3 font-mono text-sm font-bold uppercase tracking-[0.2em]"
              >
                Discuss Sovereign AI
              </Link>
            </div>
          </section>
        </div>
      </div>
    </section>
  )
}
