import Link from "next/link";
import Script from "next/script";
import { PageIntro } from "@/components/content/PageIntro";
import { createBreadcrumbSchema, createMetadata } from "@/lib/seo";
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

  return (
    <div className="container mx-auto px-4 py-24 min-h-[70vh]">
      <Script
        id="industries-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <PageIntro
        eyebrow="Who We Help"
        title="Industry"
        accent="Focus"
        description="NextGridIT supports organizations that need stable systems, practical technical leadership, and a cleaner operating baseline across infrastructure, cloud, security, Wi-Fi, and camera work."
      />

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {industries.map((industry) => (
          <section key={industry.slug} className="glass-panel border border-[var(--border)] p-8">
            <h2 className="theme-heading mb-4 font-mono text-2xl font-bold">
              {industry.title}
            </h2>
            <p className="theme-copy mb-6 leading-relaxed">{industry.description}</p>
            <div className="mb-6 flex flex-wrap gap-3">
              {industry.needs.map((need) => (
                <span key={need} className="theme-chip px-4 py-2 text-sm">
                  {need}
                </span>
              ))}
            </div>
            <div className="mb-6 space-y-3">
              {industry.relatedServices.map((slug) => {
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
                    {service.title}
                  </Link>
                );
              })}
            </div>
            <Link
              href={`/industries/${industry.slug}/`}
              className="button-secondary inline-block rounded-full px-5 py-3 font-mono text-sm font-bold uppercase tracking-[0.2em]"
            >
              View Industry Page
            </Link>
          </section>
        ))}
      </div>

      <section className="glass-panel mt-16 grid gap-8 border border-[var(--border)] p-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <h2 className="theme-heading mb-4 font-mono text-2xl font-bold">
            How to use these industry pages
          </h2>
          <p className="theme-copy leading-relaxed">
            Each industry page is designed to translate the core services into a
            more familiar operating context. That means highlighting the kinds of
            systems, risks, and project types that usually matter most in that
            environment instead of making every audience decode generic IT language
            on its own.
          </p>
        </div>
        <div className="space-y-4">
          <Link href="/services/" className="button-secondary inline-block rounded-full px-5 py-3 font-mono text-sm font-bold uppercase tracking-[0.2em]">
            View All Services
          </Link>
          <div className="theme-copy rounded-2xl border border-[var(--border)] bg-[var(--surface-strong)] p-5 text-sm leading-relaxed">
            Not sure which industry bucket fits best? Start with your location,
            user count, and the main system problem that needs to be solved.
          </div>
        </div>
      </section>
    </div>
  );
}
