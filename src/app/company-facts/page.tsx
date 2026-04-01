import Script from "next/script";
import { PageIntro } from "@/components/content/PageIntro";
import { createBreadcrumbSchema, createMetadata } from "@/lib/seo";
import { siteConfig, technologies } from "@/lib/site-data";

const facts = [
  `Business name: ${siteConfig.name}`,
  `Legal name: ${siteConfig.legalName}`,
  `Website: ${siteConfig.url}`,
  `Contact email: ${siteConfig.email}`,
  `Contact phone: ${siteConfig.phoneDisplay}`,
  `Primary region: ${siteConfig.region}`,
  `Primary cities served: ${siteConfig.serviceArea.join(", ")}, South Carolina`,
  "Core service categories: managed security and infrastructure, Microsoft 365, deployment logistics, public Wi-Fi, exposure research, camera systems, and private AI workflows",
  "Primary industries: medical offices, small businesses, municipalities, campgrounds, multi-site properties",
  "Engagement model: project-led, business-first, intelligence-led, and local-first where practical",
];

export const metadata = createMetadata({
  title: "Company Facts",
  description:
    "A clean summary of company, service, contact, and operating model facts for NextGridIT.",
  path: "/company-facts/",
});

export default function CompanyFactsPage() {
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Company Facts", path: "/company-facts/" },
  ]);

  return (
    <div className="container mx-auto px-4 py-24 min-h-[70vh]">
      <Script
        id="company-facts-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <PageIntro
        eyebrow="Canonical Facts"
        title="Company"
        accent="Facts"
        description="This page is intentionally plain and explicit. It gives a stable summary of what NextGridIT is, what it offers, and how it operates."
      />

      <section className="glass-panel border border-[var(--border)] p-8">
        <div className="space-y-4">
          {facts.map((fact) => (
            <p key={fact} className="theme-copy leading-relaxed">
              {fact}
            </p>
          ))}
        </div>
      </section>

      <section className="glass-panel mt-16 border border-[var(--border)] p-8">
        <h2 className="theme-heading mb-4 font-mono text-2xl font-bold">
          Technologies frequently referenced
        </h2>
        <div className="flex flex-wrap gap-3">
          {technologies.map((technology) => (
            <span key={technology} className="theme-chip px-4 py-2 text-sm">
              {technology}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}
