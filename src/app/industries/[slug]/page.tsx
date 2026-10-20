import { JsonLd } from "@/components/content/JsonLd";
import type { Metadata } from "next";
import Link from "next/link";
import { IconArrowRight, IconCheck } from "@tabler/icons-react";
import { ProjectCTA } from "@/components/content/ProjectCTA";
import { notFound } from "next/navigation";
import { PageIntro } from "@/components/content/PageIntro";
import { createBreadcrumbSchema, createMetadata } from "@/lib/seo";
import {
  getIndustry,
  getService,
  industries,
  locations,
} from "@/lib/site-data";

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
    description: industry.summary,
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
    <div className="page-shell container">
      <JsonLd
        id={`industry-breadcrumb-${industry.slug}`}
        data={breadcrumbSchema}
      />
      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <Link href="/industries/">Who we help</Link>
        <span aria-hidden="true">/</span>
        <span>{industry.title}</span>
      </nav>
      <div className="detail-hero">
        <PageIntro
          eyebrow="An approach that fits your organization"
          title={industry.title}
          description={industry.summary}
        >
          <Link href="/contact/" className="button-primary">
            Discuss your project
            <IconArrowRight size={17} aria-hidden="true" />
          </Link>
        </PageIntro>
        <aside className="detail-outcomes">
          <h2>Where we focus</h2>
          <ul className="check-list text-sm">
            {industry.needs.map((need) => (
              <li key={need}>
                <IconCheck size={18} aria-hidden="true" />
                <span>{need}</span>
              </li>
            ))}
          </ul>
        </aside>
      </div>
      <section className="detail-section">
        <p className="eyebrow mb-3">Understanding your environment</p>
        <h2>Practical support for the way you work.</h2>
        <p>{industry.description}</p>
      </section>
      <section className="detail-section">
        <h2>Services that fit.</h2>
        <div className="resource-grid">
          {industry.relatedServices
            .map(getService)
            .filter((service) => service !== undefined)
            .map((service) => (
              <Link
                href={`/services/${service.slug}/`}
                key={service.slug}
                className="related-link"
              >
                <h3>{service.title}</h3>
                <p>{service.summary}</p>
                <span className="text-link">
                  Explore the service
                  <IconArrowRight size={17} aria-hidden="true" />
                </span>
              </Link>
            ))}
        </div>
      </section>
      <section className="detail-section">
        <h2>Local to your organization.</h2>
        <p>
          On-site support across the Upstate, with remote work and project
          travel when appropriate.
        </p>
        <nav
          aria-label="Related service areas"
          className="mt-4 flex flex-wrap gap-5"
        >
          {relatedLocations.map((location) => (
            <Link
              className="text-link"
              key={location.slug}
              href={`/service-areas/${location.slug}/`}
            >
              {location.city}, SC
              <IconArrowRight size={16} aria-hidden="true" />
            </Link>
          ))}
        </nav>
      </section>
      <ProjectCTA />
    </div>
  );
}
