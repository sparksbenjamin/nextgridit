import Link from "next/link";
import Script from "next/script";
import { PageIntro } from "@/components/content/PageIntro";
import {
  createBreadcrumbSchema,
  createCollectionPageSchema,
  createMetadata,
} from "@/lib/seo";
import { getService, locations } from "@/lib/site-data";

export const metadata = createMetadata({
  title: "Service Areas",
  description:
    "Explore the primary NextGridIT service areas across Seneca, Clemson, Anderson, Easley, and Greenville, South Carolina.",
  path: "/service-areas/",
});

export default function ServiceAreasPage() {
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Service Areas", path: "/service-areas/" },
  ]);
  const collectionSchema = createCollectionPageSchema({
    name: "NextGridIT Service Areas",
    description:
      "Primary local service coverage across Seneca, Clemson, Anderson, Easley, and Greenville, South Carolina.",
    path: "/service-areas/",
    items: locations.map((location) => ({
      name: `${location.city}, South Carolina`,
      description: location.summary,
      path: `/service-areas/${location.slug}/`,
    })),
  });

  return (
    <div className="container mx-auto px-4 py-24 min-h-[70vh]">
      <Script
        id="service-areas-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="service-areas-collection-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />

      <PageIntro
        eyebrow="Coverage"
        title="Service"
        accent="Areas"
        description="NextGridIT primarily serves organizations in Upstate South Carolina, with local support centered on cities where on-site infrastructure, network, and camera work matter most."
      />

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {locations.map((location) => (
          <section key={location.slug} className="glass-panel border border-[var(--border)] p-8">
            <h2 className="theme-heading mb-3 font-mono text-2xl font-bold">
              {location.city}, SC
            </h2>
            <p className="theme-copy mb-6 leading-relaxed">{location.description}</p>
            <div className="mb-6 flex flex-wrap gap-3">
              {location.focus.map((focus) => (
                <span key={focus} className="theme-chip px-4 py-2 text-sm">
                  {focus}
                </span>
              ))}
            </div>
            <div className="mb-6 space-y-3">
              {location.relatedServices.map((slug) => {
                const service = getService(slug);

                if (!service) {
                  return null;
                }

                return (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}/`}
                    className="block rounded-2xl border border-[var(--border)] bg-[var(--surface-strong)] px-4 py-3 text-sm theme-copy hover:border-[var(--border-strong)]"
                  >
                    {service.shortLabel}
                  </Link>
                );
              })}
            </div>
            <Link
              href={`/service-areas/${location.slug}/`}
              className="button-secondary inline-block rounded-full px-5 py-3 font-mono text-sm font-bold uppercase tracking-[0.2em]"
            >
              View Local Page
            </Link>
          </section>
        ))}
      </div>

      <section className="glass-panel mt-16 grid gap-8 border border-[var(--border)] p-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <h2 className="theme-heading mb-4 font-mono text-2xl font-bold">
            Local coverage with project travel when it makes sense
          </h2>
          <p className="theme-copy leading-relaxed">
            These city pages are intended to make local relevance clearer for
            organizations that want nearby support, on-site project work, and a
            provider that understands the Upstate South Carolina market. Travel is
            still available when the project scope justifies it.
          </p>
        </div>
        <div className="space-y-4">
          <Link href="/contact/" className="button-primary inline-block rounded-full px-5 py-3 font-mono text-sm font-bold uppercase tracking-[0.2em]">
            Start a Local Project
          </Link>
          <div className="theme-copy rounded-2xl border border-[var(--border)] bg-[var(--surface-strong)] p-5 text-sm leading-relaxed">
            Best intake details: city, organization type, timeline, and whether
            the project is cloud, network, Wi-Fi, camera, or security-focused.
          </div>
        </div>
      </section>
    </div>
  );
}
