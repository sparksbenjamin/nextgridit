import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { notFound } from "next/navigation";
import { PageIntro } from "@/components/content/PageIntro";
import {
  createBreadcrumbSchema,
  createMetadata,
} from "@/lib/seo";
import {
  getIndustry,
  getService,
  getTechnology,
  locations,
  technologyCatalog,
} from "@/lib/site-data";

type Params = {
  slug: string;
};

export function generateStaticParams() {
  return technologyCatalog.map((technology) => ({ slug: technology.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const technology = getTechnology(slug);

  if (!technology) {
    return {};
  }

  return createMetadata({
    title: `${technology.name} Support`,
    description: `${technology.summary} Learn how NextGridIT applies ${technology.name} across managed security, infrastructure, and deployment programs.`,
    path: `/technologies/${technology.slug}/`,
  });
}

export default async function TechnologyDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const technology = getTechnology(slug);

  if (!technology) {
    notFound();
  }

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Technologies", path: "/technologies/" },
    { name: technology.name, path: `/technologies/${technology.slug}/` },
  ]);

  const relatedServices = technology.relatedServices
    .map((serviceSlug) => getService(serviceSlug))
    .filter(Boolean);

  const relatedIndustries = technology.relatedIndustries
    .map((industrySlug) => getIndustry(industrySlug))
    .filter(Boolean);

  const relatedLocations = locations.filter((location) =>
    location.relatedServices.some((serviceSlug) =>
      technology.relatedServices.includes(serviceSlug),
    ),
  );

  return (
    <div className="container mx-auto px-4 py-24 min-h-[70vh]">
      <Script
        id={`technology-breadcrumb-${technology.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <PageIntro
        eyebrow="Technology"
        title={technology.name}
        description={technology.summary}
      />

      <section className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="glass-panel border border-[var(--border)] p-8">
          <h2 className="theme-heading mb-4 font-mono text-2xl font-bold">
            Where this technology usually fits
          </h2>
          <p className="theme-copy mb-6 leading-relaxed">
            NextGridIT typically works with {technology.name} as part of broader
            infrastructure, cloud, security, Wi-Fi, camera, or operational
            improvement projects. The goal is not to force a platform for its own
            sake, but to make sure the chosen stack is supportable, documented,
            and aligned to the environment it serves.
          </p>
          <div className="space-y-4">
            <div className="theme-chip px-5 py-4 leading-relaxed">
              Category: {technology.category}
            </div>
            <div className="theme-chip px-5 py-4 leading-relaxed">
              Typical fit: project-led work, cleanup, implementation, or
              environment improvement tied to real operating needs
            </div>
            <div className="theme-chip px-5 py-4 leading-relaxed">
              Common context: business, medical, municipal, property, and
              multi-building environments depending on the stack
            </div>
          </div>
        </div>

        <aside className="glass-panel border border-[var(--border)] p-8">
          <h2 className="theme-heading mb-4 font-mono text-2xl font-bold">
            Related services
          </h2>
          <div className="space-y-4">
            {relatedServices.map((service) => (
              <Link
                key={service!.slug}
                href={`/services/${service!.slug}/`}
                className="block rounded-2xl border border-[var(--border)] bg-[var(--surface-strong)] p-5 hover:border-[var(--border-strong)]"
              >
                <h3 className="theme-heading mb-2 font-mono text-lg font-bold">
                  {service!.title}
                </h3>
                <p className="theme-copy text-sm leading-relaxed">
                  {service!.summary}
                </p>
              </Link>
            ))}
          </div>
        </aside>
      </section>

      <section className="mt-16 grid gap-8 lg:grid-cols-2">
        <div className="glass-panel border border-[var(--border)] p-8">
          <h2 className="theme-heading mb-4 font-mono text-2xl font-bold">
            Industries where this commonly shows up
          </h2>
          <div className="space-y-4">
            {relatedIndustries.map((industry) => (
              <Link
                key={industry!.slug}
                href={`/industries/${industry!.slug}/`}
                className="block rounded-2xl border border-[var(--border)] bg-[var(--surface-strong)] p-5 hover:border-[var(--border-strong)]"
              >
                <h3 className="theme-heading mb-2 font-mono text-lg font-bold">
                  {industry!.title}
                </h3>
                <p className="theme-copy text-sm leading-relaxed">
                  {industry!.summary}
                </p>
              </Link>
            ))}
          </div>
        </div>

        <div className="glass-panel border border-[var(--border)] p-8">
          <h2 className="theme-heading mb-4 font-mono text-2xl font-bold">
            Relevant local service areas
          </h2>
          <div className="space-y-4">
            {relatedLocations.map((location) => (
              <Link
                key={location.slug}
                href={`/service-areas/${location.slug}/`}
                className="block rounded-2xl border border-[var(--border)] bg-[var(--surface-strong)] p-5 hover:border-[var(--border-strong)]"
              >
                <h3 className="theme-heading mb-2 font-mono text-lg font-bold">
                  {location.city}, South Carolina
                </h3>
                <p className="theme-copy text-sm leading-relaxed">
                  {location.summary}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="glass-panel mt-16 border border-[var(--border)] p-8">
        <h2 className="theme-heading mb-4 font-mono text-2xl font-bold">
          Want to confirm fit for your environment?
        </h2>
        <p className="theme-copy mb-6 leading-relaxed">
          The best intake note includes the current platform, your location, the
          number of users or buildings involved, and what needs to improve first.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/contact/"
            className="button-primary inline-block rounded-full px-6 py-3 font-mono text-sm font-bold uppercase tracking-[0.2em]"
          >
            Start by Email
          </Link>
          <Link
            href="/technologies/"
            className="button-secondary inline-block rounded-full px-6 py-3 font-mono text-sm font-bold uppercase tracking-[0.2em]"
          >
            View All Technologies
          </Link>
        </div>
      </section>
    </div>
  );
}
