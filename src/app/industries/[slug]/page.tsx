import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageIntro } from "@/components/content/PageIntro";
import { createBreadcrumbSchema, createMetadata } from "@/lib/seo";
import { getIndustry, getService, industries, locations } from "@/lib/site-data";

type Params = {
  slug: string;
};

export function generateStaticParams() {
  return industries.map((industry) => ({ slug: industry.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustry(slug);

  if (!industry) {
    return {};
  }

  return createMetadata({
    title: industry.title,
    description: industry.description,
    path: `/industries/${industry.slug}/`,
  });
}

export default async function IndustryDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const industry = getIndustry(slug);

  if (!industry) {
    notFound();
  }

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Industries", path: "/industries/" },
    { name: industry.title, path: `/industries/${industry.slug}/` },
  ]);

  const relatedLocations = locations.filter((location) =>
    location.relatedServices.some((serviceSlug) =>
      industry.relatedServices.includes(serviceSlug),
    ),
  );

  return (
    <div className="container mx-auto px-4 py-24 min-h-[70vh]">
      <Script
        id={`industry-breadcrumb-${industry.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <PageIntro
        eyebrow="Industry"
        title={industry.title}
        description={industry.description}
      />

      <section className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="glass-panel border border-[var(--border)] p-8">
          <h2 className="theme-heading mb-4 font-mono text-2xl font-bold">
            Common needs in this environment
          </h2>
          <div className="space-y-4">
            {industry.needs.map((need) => (
              <div key={need} className="theme-chip px-5 py-4 leading-relaxed">
                {need}
              </div>
            ))}
          </div>
        </div>

        <aside className="glass-panel border border-[var(--border)] p-8">
          <h2 className="theme-heading mb-4 font-mono text-2xl font-bold">
            Related services
          </h2>
          <div className="space-y-4">
            {industry.relatedServices.map((slug) => {
              const service = getService(slug);

              if (!service) {
                return null;
              }

              return (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}/`}
                  className="block rounded-2xl border border-[var(--border)] bg-[var(--surface-strong)] p-5 hover:border-[var(--border-strong)]"
                >
                  <h3 className="theme-heading mb-2 font-mono text-lg font-bold">
                    {service.title}
                  </h3>
                  <p className="theme-copy text-sm leading-relaxed">{service.summary}</p>
                </Link>
              );
            })}
          </div>
        </aside>
      </section>

      <section className="mt-16 grid gap-8 lg:grid-cols-2">
        <div className="glass-panel border border-[var(--border)] p-8">
          <h2 className="theme-heading mb-4 font-mono text-2xl font-bold">
            Relevant service areas
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
                <p className="theme-copy text-sm leading-relaxed">{location.summary}</p>
              </Link>
            ))}
          </div>
        </div>

        <div className="glass-panel border border-[var(--border)] p-8">
          <h2 className="theme-heading mb-4 font-mono text-2xl font-bold">
            Start a project in this environment
          </h2>
          <p className="theme-copy mb-6 leading-relaxed">
            The best intake note for this kind of project includes your location,
            the number of users or buildings involved, and the main operational
            problem you want solved first.
          </p>
          <Link
            href="/contact/"
            className="button-primary inline-block rounded-full px-6 py-3 font-mono text-sm font-bold uppercase tracking-[0.2em]"
          >
            Contact NextGridIT
          </Link>
        </div>
      </section>
    </div>
  );
}
