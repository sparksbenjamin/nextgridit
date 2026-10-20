import { JsonLd } from "@/components/content/JsonLd";
import type { Metadata } from "next";
import Link from "next/link";
import { IconArrowRight } from "@tabler/icons-react";
import { ProjectCTA } from "@/components/content/ProjectCTA";
import { notFound } from "next/navigation";
import { PageIntro } from "@/components/content/PageIntro";
import { createBreadcrumbSchema, createMetadata } from "@/lib/seo";
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
    description: `${technology.name} support from NextGridIT in Upstate SC. ${technology.summary}`,
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
    .filter((item) => item !== undefined);

  const relatedIndustries = technology.relatedIndustries
    .map((industrySlug) => getIndustry(industrySlug))
    .filter((item) => item !== undefined);

  const relatedLocations = locations.filter((location) =>
    location.relatedServices.some((serviceSlug) =>
      technology.relatedServices.includes(serviceSlug),
    ),
  );

  return (
    <div className="page-shell container">
      <JsonLd
        id={`technology-breadcrumb-${technology.slug}`}
        data={breadcrumbSchema}
      />
      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <Link href="/technologies/">Technology expertise</Link>
        <span aria-hidden="true">/</span>
        <span>{technology.name}</span>
      </nav>
      <PageIntro
        eyebrow={technology.category}
        title={`${technology.name} support.`}
        description={technology.summary}
      >
        <Link href="/contact/" className="button-primary">
          Discuss your project
          <IconArrowRight size={17} aria-hidden="true" />
        </Link>
      </PageIntro>
      <section className="detail-section">
        <p className="eyebrow mb-3">Where it fits</p>
        <h2>Part of a dependable environment.</h2>
        <p>
          {technology.name} is one part of the wider system. NextGridIT helps
          plan, implement, and support it in the context of your infrastructure,
          security, and day-to-day operations.
        </p>
        <div className="resource-grid mt-8">
          {relatedServices.map((service) => (
            <Link
              className="related-link"
              href={`/services/${service.slug}/`}
              key={service.slug}
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
      <section className="detail-section detail-columns">
        <div>
          <h2>Relevant environments.</h2>
          <div>
            {relatedIndustries.map((industry) => (
              <Link
                className="related-link"
                href={`/industries/${industry.slug}/`}
                key={industry.slug}
              >
                <h3>{industry.title}</h3>
                <p>{industry.summary}</p>
              </Link>
            ))}
          </div>
        </div>
        <aside className="detail-aside">
          <h2>Local project support</h2>
          <p className="theme-copy text-sm">
            On-site work across the Upstate, with remote support when the
            project allows.
          </p>
          <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1">
            {relatedLocations.map((location) => (
              <Link
                className="text-link"
                href={`/service-areas/${location.slug}/`}
                key={location.slug}
              >
                {location.city}, SC
              </Link>
            ))}
          </div>
          <Link href="/technologies/" className="text-link mt-6">
            Explore all technologies
            <IconArrowRight size={17} aria-hidden="true" />
          </Link>
        </aside>
      </section>
      <ProjectCTA
        title={`Let’s make ${technology.name} work for your organization.`}
      />
    </div>
  );
}
