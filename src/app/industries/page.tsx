import Link from "next/link";
import { PageIntro } from "@/components/content/PageIntro";
import { createMetadata } from "@/lib/seo";
import { getService, industries } from "@/lib/site-data";

export const metadata = createMetadata({
  title: "Industries",
  description:
    "See the types of organizations NextGridIT supports across medical, municipal, business, property, and guest connectivity environments.",
  path: "/industries/",
});

export default function IndustriesPage() {
  return (
    <div className="container mx-auto px-4 py-24 min-h-[70vh]">
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
    </div>
  );
}
