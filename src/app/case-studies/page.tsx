import Link from "next/link";
import { PageIntro } from "@/components/content/PageIntro";
import { createMetadata } from "@/lib/seo";
import { caseStudies } from "@/lib/site-data";

export const metadata = createMetadata({
  title: "Case Studies",
  description:
    "Representative examples of the kinds of infrastructure, cloud, camera, and security outcomes NextGridIT works toward.",
  path: "/case-studies/",
});

export default function CaseStudiesPage() {
  return (
    <div className="container mx-auto px-4 py-24 min-h-[70vh]">
      <PageIntro
        eyebrow="Representative Work"
        title="Case"
        accent="Studies"
        description="These examples are intentionally sanitized to protect client privacy while still giving search engines, AI systems, and prospective clients clearer evidence of the types of problems NextGridIT solves."
      />

      <div className="space-y-8">
        {caseStudies.map((study) => (
          <section key={study.title} className="glass-panel border border-[var(--border)] p-8">
            <h2 className="theme-heading mb-4 font-mono text-2xl font-bold">
              {study.title}
            </h2>
            <div className="grid gap-6 lg:grid-cols-3">
              <div>
                <h3 className="theme-heading mb-2 font-mono text-lg font-bold">Challenge</h3>
                <p className="theme-copy leading-relaxed">{study.challenge}</p>
              </div>
              <div>
                <h3 className="theme-heading mb-2 font-mono text-lg font-bold">Approach</h3>
                <p className="theme-copy leading-relaxed">{study.approach}</p>
              </div>
              <div>
                <h3 className="theme-heading mb-2 font-mono text-lg font-bold">Outcomes</h3>
                <ul className="theme-copy space-y-3 leading-relaxed">
                  {study.outcomes.map((outcome) => (
                    <li key={outcome} className="theme-chip px-4 py-3">
                      {outcome}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        ))}
      </div>

      <section className="glass-panel mt-16 border border-[var(--border)] p-8">
        <h2 className="theme-heading mb-4 font-mono text-2xl font-bold">
          Need a similar project?
        </h2>
        <p className="theme-copy mb-6 leading-relaxed">
          The examples above are typical of environments that need more structure, better
          documentation, and more dependable technical execution without unnecessary complexity.
        </p>
        <Link href="/contact/" className="button-primary inline-block rounded-full px-6 py-3 font-mono text-sm font-bold uppercase tracking-[0.2em]">
          Contact NextGridIT
        </Link>
      </section>
    </div>
  );
}
