import { JsonLd } from "@/components/content/JsonLd";
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
  "Core service categories: MSP transition and vendor independence, vendor lockout recovery, HIPAA security assessment, vulnerability assessment and remediation, infrastructure hardening, Microsoft 365 and hybrid cloud, network and Wi-Fi, penetration testing, camera systems, private AI consulting",
  "Primary industries: medical offices, small businesses, municipalities, campgrounds, multi-site properties",
  "Engagement model: project-led, business-first, deployment-model aware across cloud, hybrid, on-prem, and local-first systems, remote and travel available",
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
    <div className="page-shell container mx-auto px-4 py-24 min-h-[70vh]">
      <JsonLd id="company-facts-breadcrumb-schema" data={breadcrumbSchema} />
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
        <h2 className="theme-heading mb-4  text-2xl font-bold">
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
