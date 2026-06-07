import Link from "next/link"

const resources = [
  {
    title: "Guides",
    description:
      "Practical field notes on infrastructure decisions, HIPAA compliance, MSP transitions, and the technical details that affect your daily operations.",
    href: "/guides/",
  },
  {
    title: "Case Studies",
    description:
      "Real examples of MSP transitions, vendor lockout recovery, and security cleanup work — sanitized but specific enough to show what actually happened.",
    href: "/case-studies/",
  },
  {
    title: "Compliance",
    description:
      "How NextGridIT's work aligns with HIPAA, PCI DSS, NIST 800-53, and MARS-E — especially for organizations in regulated industries.",
    href: "/compliance/",
  },
  {
    title: "NextGrid Labs",
    description:
      "Active security research, vulnerability discovery, and the perimeter scan tool. Bug bounty work on Microsoft and HackerOne platforms.",
    href: "/labs/",
  },
  {
    title: "Project Fit",
    description:
      "Which environments benefit most from infrastructure hardening, security assessments, and IT ownership work — and how to tell if it's a fit.",
    href: "/project-fit/",
  },
  {
    title: "Process and FAQ",
    description:
      "How projects start, how engagements are scoped, and answers to the most common questions about working with NextGridIT.",
    href: "/process/",
  },
]

export function ResourcesSection() {
  return (
    <section className="border-t border-[var(--border)] py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-14 max-w-3xl">
          <h2 className="theme-heading mb-4 font-mono text-3xl font-bold md:text-5xl">
            Resources and <span className="theme-accent">Reference</span>
          </h2>
          <div className="theme-rule mb-6 h-1 w-24" />
          <p className="theme-copy text-lg leading-relaxed">
            Guides, case studies, and compliance references for organizations that want to understand their IT environment better before, during, and after a project.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {resources.map((resource) => (
            <section key={resource.title} className="glass-panel border border-[var(--border)] p-8">
              <h3 className="theme-heading mb-3 font-mono text-2xl font-bold">
                {resource.title}
              </h3>
              <p className="theme-copy mb-6 leading-relaxed">{resource.description}</p>
              <Link
                href={resource.href}
                className="button-secondary inline-block rounded-full px-5 py-3 font-mono text-sm font-bold uppercase tracking-[0.2em]"
              >
                Explore
              </Link>
            </section>
          ))}
        </div>
      </div>
    </section>
  )
}
