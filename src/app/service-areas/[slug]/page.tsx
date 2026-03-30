import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageIntro } from "@/components/content/PageIntro";
import { createBreadcrumbSchema, createMetadata } from "@/lib/seo";
import { getLocation, getService, locations } from "@/lib/site-data";

type Params = {
  slug: string;
};

export function generateStaticParams() {
  return locations.map((location) => ({ slug: location.slug }));
}

export function generateMetadata({
  params,
}: {
  params: Params;
}): Metadata {
  const location = getLocation(params.slug);

  if (!location) {
    return {};
  }

  return createMetadata({
    title: location.title,
    description: location.description,
    path: `/service-areas/${location.slug}/`,
  });
}

export default function ServiceAreaDetailPage({ params }: { params: Params }) {
  const location = getLocation(params.slug);

  if (!location) {
    notFound();
  }

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Service Areas", path: "/service-areas/" },
    { name: `${location.city}, SC`, path: `/service-areas/${location.slug}/` },
  ]);

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
    </div>
  );
}
