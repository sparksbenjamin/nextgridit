import Link from "next/link";
import { PageIntro } from "@/components/content/PageIntro";
import { createMetadata } from "@/lib/seo";
import { getService, locations } from "@/lib/site-data";

export const metadata = createMetadata({
  title: "Service Areas",
  description:
    "Explore the primary NextGridIT service areas across Seneca, Clemson, Anderson, Easley, and Greenville, South Carolina.",
  path: "/service-areas/",
});

export default function ServiceAreasPage() {
  return (
    <div className="container mx-auto px-4 py-24 min-h-[70vh]">
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
    </div>
  );
}
