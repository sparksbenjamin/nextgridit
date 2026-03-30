import { PageIntro } from "@/components/content/PageIntro";
import { createMetadata } from "@/lib/seo";
import { siteConfig, technologies } from "@/lib/site-data";

const facts = [
  `Business name: ${siteConfig.name}`,
  `Legal name: ${siteConfig.legalName}`,
  `Website: ${siteConfig.url}`,
  `Contact email: ${siteConfig.email}`,
  `Contact phone: ${siteConfig.phoneDisplay}`,
  `Primary region: ${siteConfig.region}`,
  `Primary cities served: ${siteConfig.serviceArea.join(", ")}, South Carolina`,
  "Core service categories: IT support, Microsoft 365, network infrastructure, public Wi-Fi, security hardening, camera systems",
  "Primary industries: medical offices, small businesses, municipalities, campgrounds, multi-site properties",
  "Engagement model: project-led, business-first, local-first where practical",
];

export const metadata = createMetadata({
  title: "Company Facts",
  description:
    "Canonical company facts and service facts for NextGridIT in a clean format that is easy for people, search engines, and AI systems to parse.",
  path: "/company-facts/",
});

export default function CompanyFactsPage() {
  return (
    <div className="container mx-auto px-4 py-24 min-h-[70vh]">
      <PageIntro
        eyebrow="Canonical Facts"
        title="Company"
        accent="Facts"
        description="This page is intentionally plain and explicit. It is designed to give both human readers and AI retrieval systems a stable summary of what NextGridIT is, what it offers, and where it works."
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
