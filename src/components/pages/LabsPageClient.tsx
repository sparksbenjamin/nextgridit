"use client";

import {
  IconBug,
  IconBrandGithub,
  IconCpu2,
  IconShieldLock,
  IconTargetArrow,
} from "@tabler/icons-react";
import { PageIntro } from "@/components/content/PageIntro";
import { SurfaceScanModule } from "@/components/scan/SurfaceScanModule";

const openSourceProjects = [
  {
    name: "DNS Blocking",
    slug: "DNS_Blocking",
    description:
      "Practical DNS-level blocking for network security. Filter malicious domains, ads, and tracking at the DNS layer without expensive appliances.",
    tags: ["DNS", "Network Security", "Self-Hosted"],
  },
  {
    name: "Aegis SSH MCP",
    slug: "Aegis-SSH-MCP",
    description:
      "MCP server for SSH operations. Enables AI agents and automation workflows to execute remote commands, transfer files, and manage server infrastructure securely.",
    tags: ["MCP", "SSH", "AI Automation"],
  },
  {
    name: "Aegis API MCP",
    slug: "Aegis-API-MCP",
    description:
      "MCP server for API interactions. Connect AI agents to REST and GraphQL endpoints with structured request handling and response parsing.",
    tags: ["MCP", "API", "AI Automation"],
  },
];

const researchAreas = [
  {
    title: "Identity and authentication research",
    copy: "Investigating how public identity endpoints and mail-discovery workflows can leak information about valid accounts, tenant relationships, and organizational structure before authentication occurs.",
  },
  {
    title: "Operational impact",
    copy: "When these patterns are reproducible, they compress the reconnaissance stage for password spraying, tenant profiling, and business email compromise preparation.",
  },
  {
    title: "Defender perspective",
    copy: "Every finding is paired with practical mitigations — symmetric pre-auth behavior, legacy discovery reduction, tighter identity controls, and monitoring guidance for defenders.",
  },
];

const bugBountyPlatforms = [
  "Microsoft MSRC",
  "HackerOne",
  "Coordinated disclosure",
  "Vendor security programs",
];

export function LabsPageClient() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <section className="relative overflow-hidden border-b border-[var(--border)]">
        <div className="relative z-10 container mx-auto px-4 py-20 sm:px-6 lg:px-8">
          <PageIntro
            eyebrow="NextGrid Labs"
            title="Research with"
            accent="a defender’s perspective."
            description="Active security research informs the same methodology behind client assessments, vulnerability prioritization, and practical remediation guidance."
          />
          <div className="labs-platforms">
            <div>
              <p className="eyebrow">Active research platforms</p>
              <div className="labs-platform-tags">
                {bugBountyPlatforms.map((item) => (
                  <span className="theme-chip" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <p>
              Research findings follow coordinated disclosure processes. Exact
              exploit paths remain inside disclosure boundaries while the
              research track is active.
            </p>
          </div>

          <div className="mt-12 grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
            <section className="rounded-xl border border-[var(--border)] bg-[var(--surface)]/90 p-6">
              <div className="mb-5 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.28em] theme-accent">
                <IconTargetArrow className="h-5 w-5" />
                Current Research Focus
              </div>
              <div className="space-y-5 theme-copy leading-relaxed">
                <p>
                  Active research investigates whether public identity and
                  mail-discovery endpoints can leak enough differential behavior
                  to confirm a valid principal or tenant relationship without
                  first obtaining credentials.
                </p>
                <p>
                  The analysis concentrates on response symmetry, protocol
                  branching, timing variance, and legacy discovery heuristics
                  that may allow an external actor to turn low-noise
                  reconnaissance into higher-confidence account enumeration.
                </p>
                <p>
                  In practical terms, this is the kind of weakness that can
                  compress the reconnaissance stage for password spraying,
                  tenant profiling, and downstream social-engineering
                  operations. That is why the work is framed around both root
                  cause and defender-oriented mitigation.
                </p>
              </div>
            </section>

            <section className="rounded-xl border border-[var(--border)] bg-[var(--surface)]/90 p-6">
              <div className="mb-5 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.28em] theme-accent">
                <IconBug className="h-5 w-5" />
                Research Methodology
              </div>
              <div className="space-y-4">
                {researchAreas.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-[var(--border)] bg-[var(--background-elevated)] px-4 py-4"
                  >
                    <p className="font-mono text-[11px] uppercase tracking-[0.22em] theme-soft">
                      {item.title}
                    </p>
                    <p className="theme-copy mt-2 text-sm leading-6">
                      {item.copy}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            <section className="rounded-xl border border-[var(--border)] bg-[var(--surface)]/90 p-6">
              <div className="mb-4 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.28em] theme-accent-strong">
                <IconShieldLock className="h-5 w-5" />
                From Research to Remediation
              </div>
              <h2 className="theme-heading text-2xl font-bold">
                Labs output drives real-world security work.
              </h2>
              <p className="theme-copy mt-4 leading-relaxed">
                The same methodology used in bug bounty research feeds client
                security assessments, vulnerability prioritization, and
                remediation planning. Research isn&apos;t separate from the
                services — it&apos;s what makes them better than a generic
                scan-and-report.
              </p>
            </section>

            <section className="rounded-xl border border-[var(--border)] bg-[var(--surface)]/90 p-6">
              <div className="mb-4 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.28em] theme-accent-strong">
                <IconCpu2 className="h-5 w-5" />
                Local AI for Research
              </div>
              <h2 className="theme-heading text-2xl font-bold">
                Private model execution for analysis and code review.
              </h2>
              <p className="theme-copy mt-4 leading-relaxed">
                NextGrid Labs uses self-hosted AI models to accelerate technical
                analysis, code review, and vulnerability triage — without
                letting source material, telemetry, or client data leave the
                controlled environment.
              </p>
            </section>
          </div>
        </div>
      </section>

      <section className="border-b border-[var(--border)]">
        <div className="page-shell container mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.28em] theme-accent">
            <IconBrandGithub className="h-5 w-5" />
            Open Source Projects
          </div>
          <h2 className="theme-heading text-3xl font-bold">Tools We Build</h2>
          <p className="theme-copy mt-4 max-w-3xl leading-relaxed">
            Security and automation tools from NextGridIT. Open source,
            self-hosted, no vendor lock-in.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {openSourceProjects.map((project) => (
              <a
                key={project.slug}
                href={`https://github.com/nextgridit-team/${project.slug}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-xl border border-[var(--border)] bg-[var(--surface)]/90 p-6 transition-all hover:border-[var(--accent)] hover:shadow-[0_0_30px_-10px_var(--accent)]"
              >
                <h3 className="theme-heading text-lg font-bold group-hover:theme-accent">
                  {project.name}
                </h3>
                <p className="theme-copy mt-3 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-[var(--border)] bg-[var(--background-elevated)] px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.2em] theme-soft"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-4 font-mono text-xs uppercase tracking-[0.2em] theme-accent group-hover:underline">
                  View on GitHub →
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <SurfaceScanModule
        anchorId="surface-scan"
        sectionTitle="Look Up Your Mail Provider"
        sectionDescription="Identify public mail routing from MX records and start a conversation about your security assessment."
      />
    </div>
  );
}
