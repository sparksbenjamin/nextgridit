import Link from "next/link";
import { PageIntro } from "@/components/content/PageIntro";
import { createMetadata } from "@/lib/seo";
import { services, technologies } from "@/lib/site-data";

export const metadata = createMetadata({
  title: "Technologies",
  description:
    "See the platforms, infrastructure, and system types commonly involved in NextGridIT projects.",
  path: "/technologies/",
});

export default function TechnologiesPage() {
  return (
    <div className="container mx-auto px-4 py-24 min-h-[70vh]">
      <PageIntro
        eyebrow="Technology Stack"
        title="Supported"
        accent="Technologies"
        description="This page lists the types of platforms, infrastructure, and systems NextGridIT commonly works with so both people and machine readers can connect the service offering to specific technology categories."
      />

      <section className="glass-panel border border-[var(--border)] p-8">
        <div className="flex flex-wrap gap-3">
          {technologies.map((technology) => (
            <span key={technology} className="theme-chip px-4 py-2 text-sm">
              {technology}
            </span>
          ))}
        </div>
      </section>

      <section className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service) => (
          <section key={service.slug} className="glass-panel border border-[var(--border)] p-8">
            <h2 className="theme-heading mb-4 font-mono text-2xl font-bold">
              {service.title}
            </h2>
            <p className="theme-copy mb-6 leading-relaxed">{service.summary}</p>
            <div className="mb-6 flex flex-wrap gap-3">
              {service.technologies.map((technology) => (
                <span key={technology} className="theme-chip px-4 py-2 text-sm">
                  {technology}
                </span>
              ))}
            </div>
            <Link
              href={`/services/${service.slug}/`}
              className="button-secondary inline-block rounded-full px-5 py-3 font-mono text-sm font-bold uppercase tracking-[0.2em]"
            >
              View Service
            </Link>
          </section>
        ))}
      </section>
    </div>
  );
}
