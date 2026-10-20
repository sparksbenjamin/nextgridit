import { JsonLd } from "@/components/content/JsonLd";
import { IconCheck } from "@tabler/icons-react";
import { ProjectCTA } from "@/components/content/ProjectCTA";
import { PageIntro } from "@/components/content/PageIntro";
import { createBreadcrumbSchema, createMetadata } from "@/lib/seo";
import { caseStudies } from "@/lib/site-data";

export const metadata = createMetadata({
  title: "Case Studies",
  description:
    "Representative examples of the kinds of infrastructure, cloud, camera, and security outcomes NextGridIT works toward.",
  path: "/case-studies/",
});

export default function CaseStudiesPage() {
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Case Studies", path: "/case-studies/" },
  ]);

  return (
    <div className="page-shell container">
      <JsonLd id="case-studies-breadcrumb-schema" data={breadcrumbSchema} />
      <PageIntro
        eyebrow="From the project files"
        title="Real problems."
        accent="Clearer outcomes."
        description="A look at the infrastructure, access, and security challenges NextGridIT helps resolve. These client examples are sanitized to protect private environments."
      />
      {caseStudies.map((study, index) => (
        <section id={study.slug} className="detail-section" key={study.slug}>
          <p className="eyebrow mb-3">
            Project {String(index + 1).padStart(2, "0")} / Sanitized client
            example
          </p>
          <h2 className="mb-8 max-w-3xl">{study.title}</h2>
          <div className="detail-columns">
            <div>
              <h3 className="mb-3 text-lg">The challenge</h3>
              <p className="theme-copy mb-6">{study.challenge}</p>
              <h3 className="mb-3 text-lg">The work</h3>
              <p className="theme-copy">{study.approach}</p>
            </div>
            <aside className="detail-outcomes">
              <h3 className="mb-5 text-lg">What changed</h3>
              <ul className="check-list text-sm">
                {study.outcomes.map((item) => (
                  <li key={item}>
                    <IconCheck size={18} aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </section>
      ))}
      <ProjectCTA title="Have a similar challenge?" />
    </div>
  );
}
