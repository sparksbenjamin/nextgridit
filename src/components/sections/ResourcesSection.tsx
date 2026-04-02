import Link from "next/link"

const resources = [
  {
    title: "NextGrid Labs",
    description:
      "Explore the intelligence layer with active research positioning, telemetry concepts, and the instant surface scan experience.",
    href: "/labs/",
  },
  {
    title: "Guides",
    description:
      "Read practical field notes on infrastructure decisions, identity posture, and the technical details that influence real-world risk.",
    href: "/guides/",
  },
  {
    title: "Compliance",
    description:
      "Review how the operating model aligns with HIPAA, PCI DSS, NIST-style security thinking, and private analysis requirements.",
    href: "/compliance/",
  },
  {
    title: "Case Studies",
    description:
      "Read sanitized examples of cleanup, infrastructure redesign, and operating-environment improvement work.",
    href: "/case-studies/",
  },
  {
    title: "Project Fit",
    description:
      "See which environments benefit most from infrastructure hardening, surveillance engineering, and intelligence-led support.",
    href: "/project-fit/",
  },
  {
    title: "Service Areas",
    description:
      "Review rapid-response coverage across Seneca, Clemson, Anderson, Easley, and Greenville, South Carolina.",
    href: "/service-areas/",
  },
  {
    title: "Process and FAQ",
    description:
      "Understand how discovery starts, how engagements are scoped, and what happens after a surface scan or intake request.",
    href: "/process/",
  },
]

export function ResourcesSection() {
  return (
    <section className="border-t border-[var(--border)] py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-14 max-w-3xl">
          <h2 className="theme-heading mb-4 font-mono text-3xl font-bold md:text-5xl">
            Research and <span className="theme-accent">Operating Notes</span>
          </h2>
          <div className="theme-rule mb-6 h-1 w-24" />
          <p className="theme-copy text-lg leading-relaxed">
            Beyond the service overview, these pages explain how NextGridIT combines research, infrastructure hardening, private AI, and intelligence-led operating discipline.
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
                Explore Page
              </Link>
            </section>
          ))}
        </div>
      </div>
    </section>
  )
}
