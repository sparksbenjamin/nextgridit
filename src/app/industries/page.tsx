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
import { getService, industries } from "@/lib/site-data";

export const metadata = createMetadata({
  title: "Industries",
  description:
    "See the types of organizations NextGridIT supports across medical, municipal, business, property, and guest connectivity environments.",
  path: "/industries/",
});

export default function IndustriesPage() {
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Industries", path: "/industries/" },
  ]);
  const collectionSchema = createCollectionPageSchema({
    name: "NextGridIT Industries",
    description:
      "Industry overview covering medical offices, small businesses, municipalities, campgrounds, and multi-site properties.",
    path: "/industries/",
    items: industries.map((industry) => ({
      name: industry.title,
      description: industry.summary,
      path: `/industries/${industry.slug}/`,
    })),
  });

  return (
    <div className="page-shell container">
      <JsonLd id="industries-breadcrumb-schema" data={breadcrumbSchema} />
      <JsonLd id="industries-collection-schema" data={collectionSchema} />
      <PageIntro
        eyebrow="Who we help"
        title="Different environments."
        accent="The same care."
        description="Business technology works best when it fits the people and operations it serves. Explore how we approach the needs of your organization."
      />
      <div className="resource-grid">
        {industries.map((industry) => (
          <article className="resource-card" key={industry.slug}>
            <h2>
              <Link href={`/industries/${industry.slug}/`}>
                {industry.title}
              </Link>
            </h2>
            <p>{industry.summary}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {industry.relatedServices
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
              href={`/industries/${industry.slug}/`}
              className="text-link mt-3"
            >
              Explore the approach
              <IconArrowRight size={17} aria-hidden="true" />
            </Link>
          </article>
        ))}
      </div>
      <ProjectCTA />
    </div>
  );
}
