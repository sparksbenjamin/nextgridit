import { JsonLd } from "@/components/content/JsonLd";
import { ProjectCTA } from "@/components/content/ProjectCTA";
import { PageIntro } from "@/components/content/PageIntro";
import {
  createBreadcrumbSchema,
  createItemListSchema,
  createMetadata,
} from "@/lib/seo";

const processSteps = [
  {
    step: "01",
    title: "Intake and Environment Review",
    description:
      "Projects begin with a practical conversation about location, timeline, current systems, and the main operating problem that needs to be solved.",
    signal:
      "Best inputs here are the site location, approximate user count, current vendors, and the one issue that needs to be addressed first.",
  },
  {
    step: "02",
    title: "Technical Assessment and Priorities",
    description:
      "NextGridIT identifies the highest-value infrastructure, security, cloud, or support improvements first so the work stays grounded in operational value.",
    signal:
      "The goal is to identify the highest-value fixes first instead of treating every problem as equally urgent.",
  },
  {
    step: "03",
    title: "Remediation and Implementation",
    description:
      "The agreed project work is executed with attention to stability, documentation, and how the environment will be supported afterward.",
    signal:
      "That often means cleanup, network or Wi-Fi work, cloud hardening, camera deployment, or support-driven remediation.",
  },
  {
    step: "04",
    title: "Documentation and Handoff",
    description:
      "Each engagement should leave the client with better visibility, cleaner ownership, and more useful records than they had before.",
    signal:
      "A strong finish means the environment is easier to operate, easier to support, and less dependent on guesswork.",
  },
];

export const metadata = createMetadata({
  title: "Process",
  description:
    "Learn how NextGridIT approaches infrastructure hardening, exposure analysis, deployment execution, and documentation-driven handoff.",
  path: "/process/",
});

export default function ProcessPage() {
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Process", path: "/process/" },
  ]);
  const processSchema = createItemListSchema({
    name: "NextGridIT Project Process",
    path: "/process/",
    description:
      "The typical project flow used for intake, assessment, implementation, and documentation handoff.",
    items: processSteps.map((step) => ({
      name: `Step ${step.step}: ${step.title}`,
      description: step.description,
    })),
  });

  return (
    <div className="page-shell container mx-auto px-4 py-24 min-h-[70vh]">
      <JsonLd id="process-breadcrumb-schema" data={breadcrumbSchema} />
      <JsonLd id="process-itemlist-schema" data={processSchema} />
      <PageIntro
        eyebrow="How Work Starts"
        title="Good work."
        accent="No loose ends."
        description="NextGridIT uses a project-led process built around practical assessment, prioritized improvements, and a cleaner handoff at the end of the engagement."
      />

      <ol className="project-roadmap" role="list">
        {processSteps.map((step) => (
          <li key={step.step}>
            <span className="roadmap-index" aria-hidden="true">
              {step.step}
            </span>
            <div>
              <h2>{step.title}</h2>
              <p>{step.description}</p>
              <div className="roadmap-note">
                <span className="eyebrow">What matters here</span>
                <p>{step.signal}</p>
              </div>
            </div>
          </li>
        ))}
      </ol>
      <ProjectCTA title="Let’s work out a clear next step." />
    </div>
  );
}
