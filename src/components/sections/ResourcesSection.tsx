import Link from "next/link";

const resources = [
  {
    title: "Guides",
    description:
      "Read practical field notes on local DNS, infrastructure decisions, and the local-first networking details that affect real projects.",
    href: "/guides/",
  },
  {
    title: "Industry Pages",
    description:
      "See how the core services map to medical offices, businesses, municipalities, campgrounds, and multi-site properties.",
    href: "/industries/",
  },
  {
    title: "Service Areas",
    description:
      "Review the local coverage pages for Seneca, Clemson, Anderson, Easley, and Greenville.",
    href: "/service-areas/",
  },
  {
    title: "Case Studies",
    description:
      "Read sanitized examples of network cleanup, Microsoft 365 reset work, and local-first visibility projects.",
    href: "/case-studies/",
  },
  {
    title: "Project Fit",
    description:
      "Use the fit guide to see which organizations, project types, and technical environments line up best with NextGridIT.",
    href: "/project-fit/",
  },
  {
    title: "Local-First Systems",
    description:
      "Understand the local-first mindset behind camera systems, recording ownership, and on-site AI-assisted workflows.",
    href: "/local-first/",
  },
  {
    title: "Process and FAQ",
    description:
      "Understand how projects start, how work is scoped, and what kinds of engagements are the best fit.",
    href: "/process/",
  },
];

export function ResourcesSection() {
  return (
    <section className="border-t border-[var(--border)] py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-14 max-w-3xl">
          <h2 className="theme-heading mb-4 font-mono text-3xl font-bold md:text-5xl">
            Supporting <span className="theme-accent">Pages</span>
          </h2>
          <div className="theme-rule mb-6 h-1 w-24" />
          <p className="theme-copy text-lg leading-relaxed">
            Beyond the main service overview, these pages help clarify fit,
            process, local coverage, and the kinds of problems NextGridIT is built
            to solve.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {resources.map((resource) => (
            <section key={resource.title} className="glass-panel border border-[var(--border)] p-8">
              <h3 className="theme-heading mb-3 font-mono text-2xl font-bold">
                {resource.title}
              </h3>
              <p className="theme-copy mb-6 leading-relaxed">
                {resource.description}
              </p>
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
  );
}
