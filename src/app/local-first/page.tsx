import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { PageIntro } from "@/components/content/PageIntro";
import { createBreadcrumbSchema, createMetadata } from "@/lib/seo";

const principles = [
  {
    title: "Ownership close to the site",
    description:
      "When local-first is the right fit, systems stay easier to control, easier to understand, and less dependent on a third-party platform deciding how the environment should operate.",
  },
  {
    title: "Performance and resilience",
    description:
      "On-site recording, local processing, and practical infrastructure design can reduce unnecessary cloud dependency and make systems more predictable in the real world.",
  },
  {
    title: "Fit over hype",
    description:
      "Local-first does not mean rejecting every cloud tool. It means choosing the right balance between cloud convenience and on-site control for the project in front of us.",
  },
];

export const metadata: Metadata = createMetadata({
  title: "Local-First Systems",
  description:
    "Learn how NextGridIT approaches local-first infrastructure, camera systems, recording, and on-site AI-assisted processing for practical environments.",
  path: "/local-first/",
});

export default function LocalFirstPage() {
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Local-First Systems", path: "/local-first/" },
  ]);

  return (
    <div className="container mx-auto px-4 py-24 min-h-[70vh]">
      <Script
        id="local-first-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <PageIntro
        eyebrow="Operating Model"
        title="Local-First"
        accent="Systems"
        description="NextGridIT favors practical system ownership, local visibility, and on-site control whenever that creates a better operating outcome than defaulting everything into the cloud."
      />

      <section className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="glass-panel border border-[var(--border)] p-8">
          <h2 className="theme-heading mb-4 font-mono text-2xl font-bold">
            What local-first means here
          </h2>
          <div className="theme-copy space-y-4 leading-relaxed">
            <p>
              Local-first is a practical design bias, not a slogan. For
              NextGridIT, it usually means keeping core control, recording,
              visibility, and system ownership as close to the client
              environment as possible when that makes the deployment easier to
              run, easier to trust, and easier to support.
            </p>
            <p>
              This is especially relevant for camera systems, local NVR
              deployments, on-site image processing, edge infrastructure, and
              environments where connectivity is inconsistent or operational
              control matters more than trend-driven tooling.
            </p>
          </div>
        </div>

        <aside className="glass-panel border border-[var(--border)] p-8">
          <h2 className="theme-heading mb-4 font-mono text-2xl font-bold">
            Typical local-first project types
          </h2>
          <div className="space-y-4">
            {[
              "Camera systems with on-site recording and retention",
              "Custom local AI video workflows where cloud lock-in is a poor fit",
              "Property and campground environments with coverage and backhaul constraints",
              "Business and municipal deployments that need dependable local visibility",
            ].map((item) => (
              <div key={item} className="theme-chip px-5 py-4 leading-relaxed">
                {item}
              </div>
            ))}
          </div>
        </aside>
      </section>

      <section className="mt-16 grid gap-8 md:grid-cols-3">
        {principles.map((principle) => (
          <section key={principle.title} className="glass-panel border border-[var(--border)] p-8">
            <h2 className="theme-heading mb-4 font-mono text-2xl font-bold">
              {principle.title}
            </h2>
            <p className="theme-copy leading-relaxed">{principle.description}</p>
          </section>
        ))}
      </section>

      <section className="glass-panel mt-16 border border-[var(--border)] p-8">
        <h2 className="theme-heading mb-4 font-mono text-2xl font-bold">
          Related pages
        </h2>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {[
            { label: "Camera Systems", href: "/services/camera-systems/" },
            { label: "Network and Wi-Fi", href: "/services/network-wifi/" },
            { label: "Technologies", href: "/technologies/" },
            { label: "Compliance", href: "/compliance/" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block rounded-2xl border border-[var(--border)] bg-[var(--surface-strong)] px-4 py-4 text-sm theme-copy hover:border-[var(--border-strong)]"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
