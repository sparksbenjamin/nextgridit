import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageIntro } from "@/components/content/PageIntro";
import { createBreadcrumbSchema, createFaqSchema, createMetadata, createServiceSchema } from "@/lib/seo";
import { getIndustry, getLocation, getService, services } from "@/lib/site-data";

type Params = {
  slug: string;
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export function generateMetadata({
  params,
}: {
  params: Params;
}): Metadata {
  const service = getService(params.slug);

  if (!service) {
    return {};
  }

  return createMetadata({
    title: service.title,
    description: service.description,
    path: `/services/${service.slug}/`,
  });
}

export default function ServiceDetailPage({ params }: { params: Params }) {
  const service = getService(params.slug);

  if (!service) {
    notFound();
  }

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Services", path: "/services/" },
    { name: service.title, path: `/services/${service.slug}/` },
  ]);

  const faqSchema = createFaqSchema(service.faq);
  const serviceSchema = createServiceSchema({
    name: service.title,
    description: service.description,
    path: `/services/${service.slug}/`,
    areaServed: ["Seneca", "Clemson", "Anderson", "Easley", "Greenville"],
    serviceType: service.shortLabel,
  });

  return (
    <div className="container mx-auto px-4 py-24 min-h-[70vh]">
      <Script
        id={`breadcrumb-schema-${service.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id={`faq-schema-${service.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id={`service-schema-${service.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <PageIntro
        eyebrow="Service"
        title={service.shortLabel}
        accent="Support"
        description={service.description}
      />

      <section className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="glass-panel border border-[var(--border)] p-8">
          <h2 className="theme-heading mb-4 font-mono text-2xl font-bold">
            What this service is for
          </h2>
          <p className="theme-copy mb-6 leading-relaxed">{service.audience}</p>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="theme-heading mb-3 font-mono text-lg font-bold">
                Typical outcomes
              </h3>
              <ul className="theme-copy space-y-3 leading-relaxed">
                {service.outcomes.map((outcome) => (
                  <li key={outcome} className="theme-chip px-4 py-3">
                    {outcome}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="theme-heading mb-3 font-mono text-lg font-bold">
                Common deliverables
              </h3>
              <ul className="theme-copy space-y-3 leading-relaxed">
                {service.deliverables.map((deliverable) => (
                  <li key={deliverable} className="theme-chip px-4 py-3">
                    {deliverable}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <aside className="space-y-8">
          <section className="glass-panel border border-[var(--border)] p-8">
            <h2 className="theme-heading mb-4 font-mono text-xl font-bold">
              Technologies involved
            </h2>
            <div className="flex flex-wrap gap-3">
              {service.technologies.map((technology) => (
                <span key={technology} className="theme-chip px-4 py-2 text-sm">
                  {technology}
                </span>
              ))}
            </div>
          </section>

          <section className="glass-panel border border-[var(--border)] p-8">
            <h2 className="theme-heading mb-4 font-mono text-xl font-bold">
              Start a project
            </h2>
            <p className="theme-copy mb-4 leading-relaxed">
              The fastest way to start is by sending your location, timeline, and the main problem
              you need solved.
            </p>
            <Link href="/contact" className="button-primary inline-block rounded-full px-6 py-3 font-mono text-sm font-bold uppercase tracking-[0.2em]">
              Contact NextGridIT
            </Link>
          </section>
        </aside>
      </section>

      <section className="mt-16 grid gap-8 lg:grid-cols-2">
        <div className="glass-panel border border-[var(--border)] p-8">
          <h2 className="theme-heading mb-4 font-mono text-2xl font-bold">
            Related industries
          </h2>
          <div className="space-y-4">
            {service.relatedIndustries.map((slug) => {
              const industry = getIndustry(slug);

              if (!industry) {
                return null;
              }

              return (
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
              );
            })}
          </div>
        </div>

        <div className="glass-panel border border-[var(--border)] p-8">
          <h2 className="theme-heading mb-4 font-mono text-2xl font-bold">
            Related service areas
          </h2>
          <div className="space-y-4">
            {service.relatedLocations.map((slug) => {
              const location = getLocation(slug);

              if (!location) {
                return null;
              }

              return (
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
              );
            })}
          </div>
        </div>
      </section>

      <section className="glass-panel mt-16 border border-[var(--border)] p-8">
        <h2 className="theme-heading mb-6 font-mono text-2xl font-bold">
          Frequently asked questions
        </h2>
        <div className="space-y-5">
          {service.faq.map((item) => (
            <div key={item.question} className="rounded-2xl border border-[var(--border)] bg-[var(--surface-strong)] p-5">
              <h3 className="theme-heading mb-2 font-mono text-lg font-bold">
                {item.question}
              </h3>
              <p className="theme-copy leading-relaxed">{item.answer}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
