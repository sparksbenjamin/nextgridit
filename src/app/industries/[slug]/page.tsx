import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageIntro } from "@/components/content/PageIntro";
import { createBreadcrumbSchema, createMetadata } from "@/lib/seo";
import { getIndustry, getService, industries } from "@/lib/site-data";

type Params = {
  slug: string;
};

export function generateStaticParams() {
  return industries.map((industry) => ({ slug: industry.slug }));
}

export function generateMetadata({
  params,
}: {
  params: Params;
}): Metadata {
  const industry = getIndustry(params.slug);

  if (!industry) {
    return {};
  }

  return createMetadata({
    title: industry.title,
    description: industry.description,
    path: `/industries/${industry.slug}/`,
  });
}

export default function IndustryDetailPage({ params }: { params: Params }) {
  const industry = getIndustry(params.slug);

  if (!industry) {
    notFound();
  }

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Industries", path: "/industries/" },
    { name: industry.title, path: `/industries/${industry.slug}/` },
  ]);

  return (
    <div className="container mx-auto px-4 py-24 min-h-[70vh]">
      <Script
        id={`industry-breadcrumb-${industry.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <PageIntro
        eyebrow="Industry"
        title={industry.title}
        description={industry.description}
      />

      <section className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="glass-panel border border-[var(--border)] p-8">
          <h2 className="theme-heading mb-4 font-mono text-2xl font-bold">
            Common needs in this environment
          </h2>
          <div className="space-y-4">
            {industry.needs.map((need) => (
              <div key={need} className="theme-chip px-5 py-4 leading-relaxed">
                {need}
              </div>
            ))}
          </div>
        </div>

        <aside className="glass-panel border border-[var(--border)] p-8">
          <h2 className="theme-heading mb-4 font-mono text-2xl font-bold">
            Related services
          </h2>
          <div className="space-y-4">
            {industry.relatedServices.map((slug) => {
              const service = getService(slug);

              if (!service) {
                return null;
              }

              return (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}/`}
                  className="block rounded-2xl border border-[var(--border)] bg-[var(--surface-strong)] p-5 hover:border-[var(--border-strong)]"
                >
                  <h3 className="theme-heading mb-2 font-mono text-lg font-bold">
                    {service.title}
                  </h3>
                  <p className="theme-copy text-sm leading-relaxed">{service.summary}</p>
                </Link>
              );
            })}
          </div>
        </aside>
      </section>
    </div>
  );
}
