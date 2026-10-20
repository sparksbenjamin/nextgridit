import { JsonLd } from "@/components/content/JsonLd";
import Link from "next/link";
import { IconArrowRight } from "@tabler/icons-react";
import { ProjectCTA } from "@/components/content/ProjectCTA";
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
    <div className="page-shell container">
      <JsonLd id="service-areas-breadcrumb-schema" data={breadcrumbSchema} />
      <JsonLd id="service-areas-collection-schema" data={collectionSchema} />
      <PageIntro
        eyebrow="Local knowledge. Practical support."
        title="Rooted in"
        accent="Upstate South Carolina."
        description="Based in Seneca, with on-site project work across the Upstate. Remote support and travel are available when the project calls for them."
      />
      <div className="resource-grid">
        {locations.map((location) => (
          <article key={location.slug} className="resource-card">
            <p className="eyebrow">{location.county}</p>
            <h2>
              <Link href={`/service-areas/${location.slug}/`}>
                {location.city}, SC
              </Link>
            </h2>
            <p>{location.summary}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {location.relatedServices
                .slice(0, 3)
                .map(getService)
                .filter((service) => service !== undefined)
                .map((service) => (
                  <Link
                    className="theme-chip px-3 py-1 text-xs"
                    key={service.slug}
                    href={`/services/${service.slug}/`}
                  >
                    {service.shortLabel}
                  </Link>
                ))}
            </div>
            <Link
              href={`/service-areas/${location.slug}/`}
              className="text-link mt-3"
            >
              Explore local services
              <IconArrowRight size={17} aria-hidden="true" />
            </Link>
          </article>
        ))}
      </div>
      <ProjectCTA
        title="Planning work in the Upstate—or beyond?"
        description="Share your location, timeline, and the systems involved. We will help you determine the right approach for the project."
      />
    </div>
  );
}
