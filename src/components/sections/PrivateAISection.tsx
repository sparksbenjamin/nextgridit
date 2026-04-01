import Link from "next/link"
import {
  IconCloudLock,
  IconServerCog,
  IconShieldLock,
} from "@tabler/icons-react"

const pillars = [
  {
    title: "Air-Gapped Analysis",
    description:
      "Run Qwen and Mistral-class models in controlled environments so sensitive prompts, telemetry, and exposure data stay closer to the organization.",
    icon: <IconShieldLock className="h-6 w-6 theme-accent-strong" />,
  },
  {
    title: "Telemetry Processing",
    description:
      "Summarize T-Pot honeypot telemetry, infrastructure data, and research findings without defaulting to public AI services or broad external data sharing.",
    icon: <IconServerCog className="h-6 w-6 theme-accent" />,
  },
  {
    title: "Exposure Brief Generation",
    description:
      "Turn raw findings into higher-context technical briefs, prioritization notes, and executive-ready summaries with a tighter security boundary.",
    icon: <IconCloudLock className="h-6 w-6 theme-accent-alt" />,
  },
]

export function PrivateAISection() {
  return (
    <section className="border-t border-[var(--border)] py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="theme-accent mb-4 font-mono text-xs uppercase tracking-[0.28em]">
              Private AI Integration
            </p>
            <h2 className="theme-heading mb-4 font-mono text-3xl font-bold md:text-5xl">
              Keep intelligence workflows closer to the client environment.
            </h2>
            <p className="theme-copy max-w-2xl text-lg leading-relaxed">
              NextGridIT can operate private AI workflows for enterprises that need secure summarization, risk analysis, and research support without sending sensitive operational data to public models.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/labs/"
                className="button-secondary rounded-full px-6 py-3 font-mono text-sm font-bold uppercase tracking-[0.2em]"
              >
                Explore Labs
              </Link>
              <Link
                href="/contact/"
                className="button-secondary rounded-full px-6 py-3 font-mono text-sm font-bold uppercase tracking-[0.2em]"
              >
                Discuss Private AI
              </Link>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {pillars.map((pillar) => (
              <section
                key={pillar.title}
                className="glass-panel border border-[var(--border)] p-6"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-[var(--border)] bg-[var(--surface-strong)]">
                  {pillar.icon}
                </div>
                <h3 className="theme-heading mb-3 font-mono text-xl font-bold">
                  {pillar.title}
                </h3>
                <p className="theme-copy leading-relaxed">{pillar.description}</p>
              </section>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
