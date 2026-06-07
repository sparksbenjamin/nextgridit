import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageIntro } from "@/components/content/PageIntro";
import { createBreadcrumbSchema, createFaqSchema, createMetadata, createServiceSchema } from "@/lib/seo";
import { getCaseStudy, getIndustry, getLocation, getService, services } from "@/lib/site-data";
import { getAllGuides } from "@/lib/guides";

type Params = {
  slug: string;
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    return {};
  }

  return createMetadata({
    title: service.title,
    description: service.description,
    path: `/services/${service.slug}/`,
  });
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const service = getService(slug);

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

  const contactSubject = encodeURIComponent(`Inquiry about ${service.title}`);
  const contactBody = encodeURIComponent(`Hi NextGridIT,

I'm interested in your ${service.title} service.

Location: 
Timeline: 
Main problem we need solved: 

Please reach out to discuss next steps.`);

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
        title={service.title}
        description={service.description}
      />

      {/* Who This Is For */}
      <section className="mt-12 glass-panel border border-[var(--border)] p-8">
        <h2 className="theme-heading mb-4 font-mono text-2xl font-bold">
          Who this is for
        </h2>
        <p className="theme-copy mb-6 leading-relaxed">{service.audience}</p>
        <div className="grid gap-4 md:grid-cols-3">
          {service.buyerPersonas.map((persona) => (
            <div key={persona} className="rounded-2xl border border-[var(--border)] bg-[var(--surface-strong)] p-5">
              <p className="theme-copy text-sm leading-relaxed">{persona}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Our Approach - Process Steps */}
      <section className="mt-12 glass-panel border border-[var(--border)] p-8">
        <h2 className="theme-heading mb-6 font-mono text-2xl font-bold">
          Our approach
        </h2>
        <div className="space-y-6">
          {service.process.map((step, index) => (
            <div key={step.title} className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-[var(--accent)] font-mono text-sm font-bold text-[var(--accent)]">
                  {index + 1}
                </div>
                {index < service.process.length - 1 && (
                  <div className="mt-2 h-full w-px bg-[var(--border)]" />
                )}
              </div>
              <div className="pb-6">
                <div className="flex flex-wrap items-baseline gap-3 mb-2">
                  <h3 className="theme-heading font-mono text-lg font-bold">
                    {step.title}
                  </h3>
                  <span className="theme-chip px-3 py-1 text-xs font-mono">
                    {step.duration}
                  </span>
                </div>
                <p className="theme-copy leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Outcomes and Deliverables */}
      <section className="mt-12 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="glass-panel border border-[var(--border)] p-8">
          <h2 className="theme-heading mb-4 font-mono text-2xl font-bold">
            Typical outcomes
          </h2>
          <ul className="theme-copy space-y-3 leading-relaxed">
            {service.outcomes.map((outcome) => (
              <li key={outcome} className="theme-chip px-4 py-3">
                {outcome}
              </li>
            ))}
          </ul>
        </div>

        <aside className="space-y-8">
          <section className="glass-panel border border-[var(--border)] p-8">
            <h2 className="theme-heading mb-4 font-mono text-xl font-bold">
              Common deliverables
            </h2>
            <ul className="theme-copy space-y-3 leading-relaxed">
              {service.deliverables.map((deliverable) => (
                <li key={deliverable} className="theme-chip px-4 py-3 text-sm">
                  {deliverable}
                </li>
              ))}
            </ul>
          </section>

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
        </aside>
      </section>

      {/* Pricing and Delivery */}
      <section className="mt-12 grid gap-8 md:grid-cols-2">
        <div className="glass-panel border border-[var(--border)] p-8">
          <h2 className="theme-heading mb-4 font-mono text-2xl font-bold">
            Pricing
          </h2>
          <p className="theme-copy leading-relaxed">{service.pricing}</p>
          <p className="theme-copy mt-4 text-sm leading-relaxed">
            Every engagement starts with a conversation. We scope the work, agree on deliverables, 
            and provide a clear quote before anything begins.
          </p>
        </div>
        <div className="glass-panel border border-[var(--border)] p-8">
          <h2 className="theme-heading mb-4 font-mono text-2xl font-bold">
            Delivery
          </h2>
          <p className="theme-copy leading-relaxed">{service.delivery}</p>
        </div>
      </section>

      {/* Case Studies */}
      {service.relatedCaseStudies.length > 0 && (
        <section className="mt-12 glass-panel border border-[var(--border)] p-8">
          <h2 className="theme-heading mb-6 font-mono text-2xl font-bold">
            Related case studies
          </h2>
          <div className="space-y-6">
            {service.relatedCaseStudies.map((slug) => {
              const cs = getCaseStudy(slug);
              if (!cs) return null;
              return (
                <div key={cs.slug} className="rounded-2xl border border-[var(--border)] bg-[var(--surface-strong)] p-6">
                  <h3 className="theme-heading mb-3 font-mono text-lg font-bold">
                    {cs.title}
                  </h3>
                  <p className="theme-copy mb-3 text-sm leading-relaxed">
                    <span className="font-bold">Challenge: </span>{cs.challenge}
                  </p>
                  <p className="theme-copy mb-3 text-sm leading-relaxed">
                    <span className="font-bold">Approach: </span>{cs.approach}
                  </p>
                  <div className="mt-3">
                    <p className="theme-heading mb-2 text-sm font-mono font-bold">Outcomes:</p>
                    <ul className="theme-copy space-y-1 text-sm">
                      {cs.outcomes.map((outcome) => (
                        <li key={outcome} className="ml-4 list-disc">{outcome}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* Related Industries and Locations */}
      <section className="mt-12 grid gap-8 lg:grid-cols-2">
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

      {/* Related Guides */}
      <section className="mt-12 glass-panel border border-[var(--border)] p-8">
        <h2 className="theme-heading mb-4 font-mono text-2xl font-bold">
          Related guides
        </h2>
        <div className="space-y-4">
          {getAllGuides().slice(0, 3).map((guide) => (
            <Link
              key={guide.slug}
              href={`/guides/${guide.slug}/`}
              className="block rounded-2xl border border-[var(--border)] bg-[var(--surface-strong)] p-5 hover:border-[var(--border-strong)]"
            >
              <h3 className="theme-heading mb-2 font-mono text-lg font-bold">
                {guide.title}
              </h3>
              <p className="theme-copy text-sm leading-relaxed">{guide.summary}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="glass-panel mt-12 border border-[var(--border)] p-8">
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

      {/* CTA - Service Context */}
      <section className="mt-12 glass-panel border border-[var(--accent)] bg-[var(--surface-strong)] p-8 text-center">
        <h2 className="theme-heading mb-3 font-mono text-2xl font-bold">
          Ready to get started?
        </h2>
        <p className="theme-copy mx-auto mb-6 max-w-2xl leading-relaxed">
          The fastest way to start is by telling us your location, timeline, and the main problem 
          you need solved. We reply to every inquiry.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href={`mailto:contact@nextgridit.com?subject=${contactSubject}&body=${contactBody}`}
            className="button-primary inline-block rounded-full px-8 py-3 font-mono text-sm font-bold uppercase tracking-[0.2em]"
          >
            Email About {service.shortLabel}
          </a>
          <Link
            href="/contact"
            className="button-primary inline-block rounded-full border border-[var(--border)] bg-transparent px-8 py-3 font-mono text-sm font-bold uppercase tracking-[0.2em] hover:bg-[var(--surface-strong)]"
          >
            Contact Form
          </Link>
        </div>
      </section>
    </div>
  );
}
