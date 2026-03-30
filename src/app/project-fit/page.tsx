import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { PageIntro } from "@/components/content/PageIntro";
import { createBreadcrumbSchema, createMetadata } from "@/lib/seo";
import { industries, services } from "@/lib/site-data";

const fitSignals = [
  {
    title: "Best-fit organizations",
    items: [
      "Medical offices and healthcare-adjacent practices",
      "Small and mid-sized businesses with 5 to 100 users",
      "Municipal teams, public-facing sites, and local government",
      "Campgrounds, guest Wi-Fi properties, and multi-building environments",
    ],
  },
  {
    title: "Best-fit project types",
    items: [
      "Network refreshes, Wi-Fi redesigns, and segmentation work",
      "Microsoft 365 cleanup, cloud administration, and tenant hardening",
      "Camera systems, local NVR deployments, and local-first AI workflows",
      "Security cleanup, documentation, and compliance-aware remediation",
    ],
  },
  {
    title: "Strong intake details",
    items: [
      "Your city or project location",
      "How many users, buildings, or public-facing areas are involved",
      "The main operational problem to solve first",
      "Current platforms, vendors, or inherited pain points",
    ],
  },
];

const fitRows = services.map((service) => ({
  service,
  industries: industries.filter((industry) =>
    industry.relatedServices.includes(service.slug),
  ),
}));

export const metadata: Metadata = createMetadata({
  title: "Project Fit",
  description:
    "See what kinds of organizations, projects, platforms, and operating environments are the best fit for NextGridIT.",
  path: "/project-fit/",
});

export default function ProjectFitPage() {
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Project Fit", path: "/project-fit/" },
  ]);

  return (
    <div className="container mx-auto px-4 py-24 min-h-[70vh]">
      <Script
        id="project-fit-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <PageIntro
        eyebrow="Qualification Guide"
        title="Project"
        accent="Fit"
        description="This page is designed to make fit easier to judge. It shows the kinds of organizations, systems, and project goals that usually line up well with NextGridIT."
      />

      <section className="grid gap-8 md:grid-cols-3">
        {fitSignals.map((signal) => (
          <section key={signal.title} className="glass-panel border border-[var(--border)] p-8">
            <h2 className="theme-heading mb-4 font-mono text-2xl font-bold">
              {signal.title}
            </h2>
            <div className="space-y-3">
              {signal.items.map((item) => (
                <div key={item} className="theme-chip px-4 py-3 leading-relaxed">
                  {item}
                </div>
              ))}
            </div>
          </section>
        ))}
      </section>

      <section className="glass-panel mt-16 border border-[var(--border)] p-8">
        <div className="mb-8 max-w-3xl">
          <h2 className="theme-heading mb-4 font-mono text-2xl font-bold">
            Visual fit map
          </h2>
          <p className="theme-copy leading-relaxed">
            This matrix is a quick way to understand how the core service lines
            usually map to the industries they most often support. It is not
            restrictive, but it shows the strongest patterns across the site.
          </p>
        </div>

        <div className="grid gap-4">
          {fitRows.map((row) => (
            <section
              key={row.service.slug}
              className="rounded-3xl border border-[var(--border)] bg-[var(--surface-strong)] p-6"
            >
              <div className="grid gap-5 lg:grid-cols-[0.8fr_1.2fr]">
                <div>
                  <p className="theme-accent-strong mb-2 font-mono text-xs uppercase tracking-[0.24em]">
                    Service line
                  </p>
                  <Link
                    href={`/services/${row.service.slug}/`}
                    className="theme-heading font-mono text-xl font-bold hover:text-[var(--accent-strong)]"
                  >
                    {row.service.title}
                  </Link>
                  <p className="theme-copy mt-3 text-sm leading-relaxed">
                    {row.service.summary}
                  </p>
                </div>

                <div>
                  <p className="theme-accent-strong mb-3 font-mono text-xs uppercase tracking-[0.24em]">
                    Common environments
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {row.industries.map((industry) => (
                      <Link
                        key={industry.slug}
                        href={`/industries/${industry.slug}/`}
                        className="theme-chip px-4 py-3 text-sm hover:border-[var(--border-strong)]"
                      >
                        {industry.title}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>
      </section>

      <section className="mt-16 grid gap-8 lg:grid-cols-2">
        <div className="glass-panel border border-[var(--border)] p-8">
          <h2 className="theme-heading mb-4 font-mono text-2xl font-bold">
            Where NextGridIT is strongest
          </h2>
          <div className="theme-copy space-y-4 leading-relaxed">
            <p>
              The strongest fit is an organization that needs practical
              infrastructure, cloud, Wi-Fi, security, camera, or documentation
              work without being forced into a generic managed services model.
            </p>
            <p>
              That usually means inherited systems, mixed vendors, unclear
              documentation, coverage issues, cloud cleanup, public-facing
              networks, local-first requirements, or a need to reduce technical
              risk without creating enterprise overhead.
            </p>
          </div>
        </div>

        <div className="glass-panel border border-[var(--border)] p-8">
          <h2 className="theme-heading mb-4 font-mono text-2xl font-bold">
            Best next pages
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { label: "Industries", href: "/industries/" },
              { label: "Service Areas", href: "/service-areas/" },
              { label: "Technologies", href: "/technologies/" },
              { label: "Local-First Systems", href: "/local-first/" },
              { label: "Compliance", href: "/compliance/" },
              { label: "Contact", href: "/contact/" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block rounded-2xl border border-[var(--border)] bg-[var(--surface-strong)] px-4 py-4 text-sm theme-copy hover:border-[var(--border-strong)]"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
