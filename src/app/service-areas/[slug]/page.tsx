import { BookingLink } from "@/components/content/BookingLink";
import { JsonLd } from "@/components/content/JsonLd";
import type { Metadata } from "next";
import Link from "next/link";
import { IconArrowRight, IconCheck } from "@tabler/icons-react";
import { ProjectCTA } from "@/components/content/ProjectCTA";
import { notFound } from "next/navigation";
import { PageIntro } from "@/components/content/PageIntro";
import { LocationAreaMap } from "@/components/ui/LazyLocationAreaMap";
import {
  createBreadcrumbSchema,
  createFaqSchema,
  createItemListSchema,
  createMetadata,
  createPlaceSchema,
} from "@/lib/seo";
import {
  getLocation,
  getService,
  industries,
  locations,
} from "@/lib/site-data";

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
    title: `IT Support & Security in ${location.city}, SC`,
    description: location.summary,
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
  const placeSchema = createPlaceSchema({
    city: location.city,
    county: location.county,
    description: location.description,
    path: `/service-areas/${location.slug}/`,
    latitude: location.coordinates[1],
    longitude: location.coordinates[0],
  });
  const localServicesSchema = createItemListSchema({
    name: `Common NextGridIT services in ${location.city}, South Carolina`,
    path: `/service-areas/${location.slug}/`,
    items: location.relatedServices
      .map((serviceSlug) => getService(serviceSlug))
      .filter((service) => service !== undefined)
      .map((service) => ({
        name: service.title,
        description: service.summary,
        path: `/services/${service.slug}/`,
      })),
  });
  const faqSchema = createFaqSchema(location.faq);

  const relatedIndustries = industries.filter((industry) =>
    industry.relatedServices.some((serviceSlug) =>
      location.relatedServices.includes(serviceSlug),
    ),
  );

  return (
    <div className="page-shell container">
      <JsonLd
        id={`service-area-breadcrumb-${location.slug}`}
        data={breadcrumbSchema}
      />
      <JsonLd id={`service-area-place-${location.slug}`} data={placeSchema} />
      <JsonLd
        id={`service-area-services-${location.slug}`}
        data={localServicesSchema}
      />
      <JsonLd id={`service-area-faq-${location.slug}`} data={faqSchema} />
      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <Link href="/service-areas/">Service areas</Link>
        <span aria-hidden="true">/</span>
        <span>{location.city}, SC</span>
      </nav>
      <div className="detail-hero">
        <PageIntro
          eyebrow="Upstate South Carolina"
          title={`IT services in ${location.city}.`}
          description={location.summary}
        >
          <BookingLink className="button-primary" />
        </PageIntro>
        <aside className="detail-outcomes">
          <h2>Local project focus</h2>
          <ul className="check-list text-sm">
            {location.focus.map((item) => (
              <li key={item}>
                <IconCheck size={18} aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </aside>
      </div>
      <section className="detail-section">
        <h2>Hands-on help. Close to home.</h2>
        <p>{location.description}</p>
        <div className="resource-grid mt-6">
          {location.relatedServices
            .map(getService)
            .filter((service) => service !== undefined)
            .map((service) => (
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
          <p className="eyebrow mb-3">In the neighborhood</p>
          <h2>{location.city} and the surrounding area.</h2>
          <p className="theme-copy">
            Serving organizations in {location.county}. Nearby communities
            include {location.nearbyCities.join(", ")}. This map shows the
            general area; contact us to discuss your specific site.
          </p>
          <div className="mt-6">
            <h3 className="mb-3 text-lg">Organizations we work with</h3>
            <div className="flex flex-wrap gap-x-5 gap-y-2">
              {relatedIndustries.map((industry) => (
                <Link
                  className="text-link"
                  href={`/industries/${industry.slug}/`}
                  key={industry.slug}
                >
                  {industry.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <LocationAreaMap currentSlug={location.slug} />
      </section>
      <section className="detail-section">
        <h2>Common questions.</h2>
        <div className="faq-list">
          {location.faq.map((item) => (
            <details key={item.question}>
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </section>
      <ProjectCTA title={`Planning a project in ${location.city}?`} />
    </div>
  );
}
