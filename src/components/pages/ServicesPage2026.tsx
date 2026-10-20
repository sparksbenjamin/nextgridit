import Link from "next/link";
import { IconArrowRight } from "@tabler/icons-react";
import { PageIntro } from "@/components/content/PageIntro";
import { ProjectCTA } from "@/components/content/ProjectCTA";
import { services } from "@/lib/site-data";

const groups = [
  {
    label: "Ownership",
    title: "Get your environment back under your control.",
    slugs: ["msp-transition", "vendor-lockout-recovery"],
  },
  {
    label: "Security",
    title: "Understand the risk. Make a practical plan.",
    slugs: [
      "hipaa-security-assessment",
      "vulnerability-assessment",
      "infrastructure-hardening",
      "security-audits-pentesting",
    ],
  },
  {
    label: "Infrastructure",
    title: "A dependable foundation for the work ahead.",
    slugs: ["microsoft-365", "network-wifi", "camera-systems", "private-ai"],
  },
];
export function ServicesPage2026() {
  return (
    <div className="page-shell container">
      <PageIntro
        eyebrow="Our expertise"
        title="Technical work."
        accent="Practical outcomes."
        description="Recover access, strengthen security, or build more dependable infrastructure. Find the service that fits the problem you need solved."
      />
      {groups.map((group) => (
        <section key={group.label} className="service-group">
          <div className="service-group-heading">
            <p className="eyebrow">{group.label}</p>
            <h2>{group.title}</h2>
          </div>
          <div className="service-catalog">
            {group.slugs.map((slug) => {
              const service = services.find((item) => item.slug === slug)!;
              return (
                <Link
                  className="service-card"
                  href={`/services/${slug}/`}
                  key={slug}
                >
                  <h3>{service.title}</h3>
                  <p>{service.summary}</p>
                  <span className="text-link">
                    Explore this service
                    <IconArrowRight size={17} aria-hidden="true" />
                  </span>
                </Link>
              );
            })}
          </div>
        </section>
      ))}
      <ProjectCTA
        title="Not sure which service fits?"
        description="Start with your environment and the problem in front of you. We will help identify a useful next step."
      />
    </div>
  );
}
