import Link from "next/link";
import Script from "next/script";
import { PageIntro } from "@/components/content/PageIntro";
import { TechnologiesFilterClient } from "@/components/pages/TechnologiesFilterClient";
import { createBreadcrumbSchema, createMetadata } from "@/lib/seo";
import { services, technologies, technologyCatalog } from "@/lib/site-data";

export const metadata = createMetadata({
  title: "Technologies",
  description:
    "See the platforms, infrastructure, and system types commonly involved in NextGridIT projects.",
  path: "/technologies/",
});

export default function TechnologiesPage() {
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Technologies", path: "/technologies/" },
  ]);

  return (
    <div className="container mx-auto px-4 py-24 min-h-[70vh]">
      <Script
        id="technologies-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <PageIntro
        eyebrow="Technology Stack"
        title="Supported"
        accent="Technologies"
        description="A practical view of the platforms, infrastructure, and system types that commonly show up in NextGridIT projects."
      />

      <section className="glass-panel border border-[var(--border)] p-8">
        <h2 className="theme-heading mb-4 font-mono text-2xl font-bold">
          Technology coverage at a glance
        </h2>
        <p className="theme-copy mb-6 leading-relaxed">
          These are the platforms, infrastructure layers, and system types most
          commonly involved in NextGridIT projects. Use the filters below to
          narrow by category and jump into the service pages that usually connect
          to each technology.
        </p>
        <div className="flex flex-wrap gap-3">
          {technologies.map((technology) => (
            <span key={technology} className="theme-chip px-4 py-2 text-sm">
              {technology}
            </span>
          ))}
        </div>
      </section>

      <section className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
        {[
          "Cloud and Identity",
          "Infrastructure",
          "Networking and Wi-Fi",
          "Security and Compliance",
          "Cameras and Local AI",
        ].map((category) => (
          <div key={category} className="glass-panel border border-[var(--border)] p-6">
            <p className="theme-accent-strong mb-2 font-mono text-xs uppercase tracking-[0.24em]">
              {category}
            </p>
            <p className="theme-heading font-mono text-3xl font-bold">
              {technologyCatalog.filter((technology) => technology.category === category).length}
            </p>
          </div>
        ))}
      </section>

      <section className="mt-16">
        <TechnologiesFilterClient />
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

      <section className="glass-panel mt-16 border border-[var(--border)] p-8">
        <h2 className="theme-heading mb-4 font-mono text-2xl font-bold">
          Looking for a specific platform?
        </h2>
        <p className="theme-copy mb-6 leading-relaxed">
          If your environment includes a platform that is not listed here, that
          does not automatically make it a bad fit. The fastest way to verify fit
          is to send the current stack, location, and project goal through the
          contact page.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/contact/"
            className="button-primary inline-block rounded-full px-6 py-3 font-mono text-sm font-bold uppercase tracking-[0.2em]"
          >
            Start the Conversation
          </Link>
          <Link
            href="/project-fit/"
            className="button-secondary inline-block rounded-full px-6 py-3 font-mono text-sm font-bold uppercase tracking-[0.2em]"
          >
            Review Project Fit
          </Link>
        </div>
      </section>
    </div>
  );
}
