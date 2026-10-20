import { BookingLink } from "@/components/content/BookingLink";
import { JsonLd } from "@/components/content/JsonLd";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProjectCTA } from "@/components/content/ProjectCTA";
import { IconArrowRight, IconCheck } from "@tabler/icons-react";
import { PageIntro } from "@/components/content/PageIntro";
import {
  createBreadcrumbSchema,
  createFaqSchema,
  createMetadata,
  createServiceSchema,
} from "@/lib/seo";
import {
  getCaseStudy,
  getIndustry,
  getLocation,
  getService,
  services,
} from "@/lib/site-data";
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
    description: service.summary,
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

  const relatedGuides = getAllGuides()
    .filter((guide) => {
      const terms = `${service.shortLabel} ${service.technologies.join(" ")}`
        .toLowerCase()
        .split(/\W+/)
        .filter((term) => term.length > 3);
      return terms.some((term) =>
        `${guide.title} ${guide.tags.join(" ")}`.toLowerCase().includes(term),
      );
    })
    .slice(0, 3);

  return (
    <div className="page-shell container">
      <JsonLd
        id={`breadcrumb-schema-${service.slug}`}
        data={breadcrumbSchema}
      />
      <JsonLd id={`faq-schema-${service.slug}`} data={faqSchema} />
      <JsonLd id={`service-schema-${service.slug}`} data={serviceSchema} />
      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <Link href="/">Home</Link>
        <span aria-hidden="true">/</span>
        <Link href="/services/">Services</Link>
        <span aria-hidden="true">/</span>
        <span>{service.shortLabel}</span>
      </nav>
      <div className="detail-hero">
        <PageIntro
          eyebrow="Our expertise"
          title={service.title}
          description={service.summary}
        >
          <BookingLink className="button-primary" />
          <a href="#scope" className="text-link">
            What’s included
            <IconArrowRight size={17} aria-hidden="true" />
          </a>
        </PageIntro>
        <aside className="detail-outcomes">
          <p className="eyebrow mb-3">The goal</p>
          <h2>What better looks like</h2>
          <ul className="check-list text-sm">
            {service.outcomes.map((outcome) => (
              <li key={outcome}>
                <IconCheck size={18} aria-hidden="true" />
                <span>{outcome}</span>
              </li>
            ))}
          </ul>
        </aside>
      </div>
      <section className="detail-section detail-columns" id="scope">
        <div>
          <p className="eyebrow mb-3">A clear scope</p>
          <h2>The work behind the outcome.</h2>
          <p className="theme-copy mb-6">{service.description}</p>
          <ul className="check-list">
            {service.deliverables.map((item) => (
              <li key={item}>
                <IconCheck size={19} aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <aside className="detail-aside">
          <h2>Who this is for</h2>
          <p className="theme-copy text-sm leading-7">{service.audience}</p>
          <h3 className="mt-8 mb-3 text-base">Systems we work with</h3>
          <div className="flex flex-wrap gap-2">
            {service.technologies.map((technology) => (
              <span key={technology} className="theme-chip px-3 py-1 text-xs">
                {technology}
              </span>
            ))}
          </div>
        </aside>
      </section>
      <section className="detail-section detail-columns">
        <div>
          <p className="eyebrow mb-3">Our approach</p>
          <h2>A practical sequence of work.</h2>
          <ol className="detail-process">
            {service.process.map((step, index) => (
              <li key={step.title}>
                <span className="step-index">0{index + 1}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                  <span className="step-duration">
                    Typical stage: {step.duration}
                  </span>
                </div>
              </li>
            ))}
          </ol>
        </div>
        <aside className="detail-aside">
          <h2>Project investment</h2>
          <p className="theme-copy text-sm leading-7">{service.pricing}</p>
          <p className="theme-soft mt-4 text-xs">
            Scope, deliverables, and a clear quote are agreed before work
            begins.
          </p>
          <h2 className="mt-8">How we deliver</h2>
          <p className="theme-copy text-sm leading-7">{service.delivery}</p>
          <Link className="text-link mt-4" href="/contact/">
            Talk through your scope
            <IconArrowRight size={17} aria-hidden="true" />
          </Link>
        </aside>
      </section>
      {service.relatedCaseStudies.map((slug) => {
        const study = getCaseStudy(slug);
        return (
          study && (
            <section key={slug} className="detail-section featured-case">
              <div>
                <p className="eyebrow mb-3">From the project files</p>
                <h2>{study.title}</h2>
                <p>{study.challenge}</p>
                <Link
                  className="text-link"
                  href={`/case-studies/#${study.slug}`}
                >
                  Read the project story
                  <IconArrowRight size={17} aria-hidden="true" />
                </Link>
              </div>
              <ul className="case-outcomes">
                {study.outcomes.map((item) => (
                  <li className="case-outcome" key={item}>
                    <IconCheck size={18} aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          )
        );
      })}
      <section className="detail-section">
        <p className="eyebrow mb-3">Good questions</p>
        <h2>Before we get started.</h2>
        <div className="faq-list">
          {service.faq.map((item) => (
            <details key={item.question}>
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </section>
      <section className="detail-section">
        <h2>Relevant to your organization.</h2>
        <div className="related-grid">
          {service.relatedIndustries.map((slug) => {
            const industry = getIndustry(slug);
            return (
              industry && (
                <Link
                  className="related-link"
                  key={slug}
                  href={`/industries/${slug}/`}
                >
                  <h3>{industry.title}</h3>
                  <p>{industry.summary}</p>
                </Link>
              )
            );
          })}
        </div>
        <nav
          className="mt-6 flex flex-wrap gap-x-6 gap-y-2"
          aria-label="Related service areas"
        >
          {service.relatedLocations.map((slug) => {
            const location = getLocation(slug);
            return (
              location && (
                <Link
                  key={slug}
                  href={`/service-areas/${slug}/`}
                  className="text-link"
                >
                  {location.city}, SC
                  <IconArrowRight size={15} aria-hidden="true" />
                </Link>
              )
            );
          })}
        </nav>
      </section>
      {relatedGuides.length > 0 && (
        <section className="detail-section">
          <h2>Useful reading.</h2>
          <div className="related-grid">
            {relatedGuides.map((guide) => (
              <Link
                className="related-link"
                key={guide.slug}
                href={`/guides/${guide.slug}/`}
              >
                <h3>{guide.title}</h3>
                <p>{guide.summary}</p>
              </Link>
            ))}
          </div>
        </section>
      )}
      <ProjectCTA title="Let’s work through your next step." />
    </div>
  );
}
