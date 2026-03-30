import Link from "next/link";
import { PageIntro } from "@/components/content/PageIntro";
import { createMetadata } from "@/lib/seo";

const processSteps = [
  {
    title: "1. Intake and Environment Review",
    description:
      "Projects begin with a practical conversation about location, timeline, current systems, and the main operating problem that needs to be solved.",
  },
  {
    title: "2. Technical Assessment and Priorities",
    description:
      "NextGridIT identifies the highest-value infrastructure, security, cloud, or support improvements first so the work stays grounded in operational value.",
  },
  {
    title: "3. Remediation and Implementation",
    description:
      "The agreed project work is executed with attention to stability, documentation, and how the environment will be supported afterward.",
  },
  {
    title: "4. Documentation and Handoff",
    description:
      "Each engagement should leave the client with better visibility, cleaner ownership, and more useful records than they had before.",
  },
];

export const metadata = createMetadata({
  title: "Process",
  description:
    "Learn how NextGridIT approaches IT support, infrastructure projects, security hardening, and documentation-driven handoff.",
  path: "/process/",
});

export default function ProcessPage() {
  return (
    <div className="container mx-auto px-4 py-24 min-h-[70vh]">
      <PageIntro
        eyebrow="How Work Starts"
        title="Project"
        accent="Process"
        description="NextGridIT uses a project-led process built around practical assessment, prioritized improvements, and a cleaner handoff at the end of the engagement."
      />

      <div className="grid gap-8 md:grid-cols-2">
        {processSteps.map((step) => (
          <section key={step.title} className="glass-panel border border-[var(--border)] p-8">
            <h2 className="theme-heading mb-4 font-mono text-2xl font-bold">
              {step.title}
            </h2>
            <p className="theme-copy leading-relaxed">{step.description}</p>
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
