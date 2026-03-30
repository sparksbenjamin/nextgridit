import Link from "next/link";
import Script from "next/script";
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
    "Learn how NextGridIT approaches IT support, infrastructure projects, security hardening, and documentation-driven handoff.",
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
    <div className="container mx-auto px-4 py-24 min-h-[70vh]">
      <Script
        id="process-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="process-itemlist-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(processSchema) }}
      />
      <PageIntro
        eyebrow="How Work Starts"
        title="Project"
        accent="Process"
        description="NextGridIT uses a project-led process built around practical assessment, prioritized improvements, and a cleaner handoff at the end of the engagement."
      />

      <div className="relative grid gap-6">
        {processSteps.map((step) => (
          <section
            key={step.step}
            className="glass-panel grid gap-6 border border-[var(--border)] p-8 lg:grid-cols-[84px_1fr_320px]"
          >
            <div className="flex lg:justify-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[var(--border-strong)] bg-[var(--surface-strong)]">
                <span className="theme-heading font-mono text-base font-bold tracking-[0.2em]">
                  {step.step}
                </span>
              </div>
            </div>

            <div>
              <p className="theme-accent-strong mb-2 font-mono text-xs uppercase tracking-[0.26em]">
                Stage {step.step}
              </p>
              <h2 className="theme-heading mb-4 font-mono text-2xl font-bold">
                {step.title}
              </h2>
              <p className="theme-copy leading-relaxed">{step.description}</p>
            </div>

            <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface-strong)] p-5">
              <p className="theme-accent-alt mb-3 font-mono text-xs uppercase tracking-[0.24em]">
                What matters here
              </p>
              <p className="theme-copy text-sm leading-relaxed">{step.signal}</p>
            </div>
          </section>
        ))}
      </div>

      <section className="glass-panel mt-16 border border-[var(--border)] p-8">
        <h2 className="theme-heading mb-4 font-mono text-2xl font-bold">
          What the process is designed to avoid
        </h2>
        <p className="theme-copy mb-6 leading-relaxed">
          The goal is to avoid vague support relationships, undocumented changes, and technical work
          that creates more confusion than it solves. NextGridIT is designed for clients that want
          clear action, realistic recommendations, and systems that are easier to operate after the
          work is complete.
        </p>
        <Link href="/contact/" className="button-primary inline-block rounded-full px-6 py-3 font-mono text-sm font-bold uppercase tracking-[0.2em]">
          Start the Intake
        </Link>
      </section>
    </div>
  );
}
