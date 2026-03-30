import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageIntro } from "@/components/content/PageIntro";
import { LocationAreaMap } from "@/components/ui/LocationAreaMap";
import { createBreadcrumbSchema, createMetadata } from "@/lib/seo";
import { getLocation, getService, industries, locations } from "@/lib/site-data";

type Params = {
  slug: string;
};

export function generateStaticParams() {
  return locations.map((location) => ({ slug: location.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const location = getLocation(slug);

  if (!location) {
    return {};
  }

  return createMetadata({
    title: location.title,
    description: location.description,
    path: `/service-areas/${location.slug}/`,
  });
}

export default async function ServiceAreaDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const location = getLocation(slug);

  if (!location) {
    notFound();
  }

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Service Areas", path: "/service-areas/" },
    { name: `${location.city}, SC`, path: `/service-areas/${location.slug}/` },
  ]);

  const relatedIndustries = industries.filter((industry) =>
    industry.relatedServices.some((serviceSlug) =>
      location.relatedServices.includes(serviceSlug),
    ),
  );

  return (
    <div className="container mx-auto px-4 py-24 min-h-[70vh]">
      <Script
        id={`service-area-breadcrumb-${location.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <PageIntro
        eyebrow="Local Service Area"
        title={location.city}
        accent="South Carolina"
        description={location.description}
      />

      <section className="glass-panel mb-16 grid gap-8 border border-[var(--border)] p-8 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <h2 className="theme-heading mb-4 font-mono text-2xl font-bold">
            General area around {location.city}
          </h2>
          <p className="theme-copy mb-6 leading-relaxed">
            This simple map highlights the general area of {location.city},{" "}
            South Carolina within the broader Upstate service region. It is meant
            as a quick local reference rather than a street-level coverage map.
          </p>
          <div className="space-y-3">
            <div className="theme-chip px-5 py-4 leading-relaxed">
              County: {location.county}
            </div>
            <div className="theme-chip px-5 py-4 leading-relaxed">
              Nearby service cities: {location.nearbyCities.join(", ")}
            </div>
            <div className="theme-chip px-5 py-4 leading-relaxed">
              Best for organizations that want on-site project work with an
              Upstate South Carolina focus.
            </div>
          </div>
        </div>

        <LocationAreaMap currentSlug={location.slug} />
      </section>

      <section className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="glass-panel border border-[var(--border)] p-8">
          <h2 className="theme-heading mb-4 font-mono text-2xl font-bold">
            Typical local project focus
          </h2>
          <div className="space-y-4">
            {location.focus.map((focus) => (
              <div key={focus} className="theme-chip px-5 py-4 leading-relaxed">
                {focus}
              </div>
            ))}
          </div>
        </div>

        <aside className="glass-panel border border-[var(--border)] p-8">
          <h2 className="theme-heading mb-4 font-mono text-2xl font-bold">
            Services commonly requested
          </h2>
          <div className="space-y-4">
            {location.relatedServices.map((slug) => {
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
            Industries commonly supported here
          </h2>
          <div className="space-y-4">
            {relatedIndustries.map((industry) => (
              <Link
                key={industry.slug}
                href={`/industries/${industry.slug}/`}
                className="block rounded-2xl border border-[var(--border)] bg-[var(--surface-strong)] p-5 hover:border-[var(--border-strong)]"
              >
                <h3 className="theme-heading mb-2 font-mono text-lg font-bold">
                  {industry.title}
                </h3>
                <p className="theme-copy text-sm leading-relaxed">{industry.summary}</p>
              </Link>
            ))}
          </div>
        </div>

        <div className="glass-panel border border-[var(--border)] p-8">
          <h2 className="theme-heading mb-4 font-mono text-2xl font-bold">
            Planning work in {location.city}?
          </h2>
          <p className="theme-copy mb-6 leading-relaxed">
            Include the project site address, target timeline, and whether the
            work is primarily cloud, networking, Wi-Fi, camera, or security
            related. That makes it much easier to scope the next step quickly.
          </p>
          <Link
            href="/contact/"
            className="button-primary inline-block rounded-full px-6 py-3 font-mono text-sm font-bold uppercase tracking-[0.2em]"
          >
            Start the Conversation
          </Link>
        </div>
      </section>
    </div>
  );
}
