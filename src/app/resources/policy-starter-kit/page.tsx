import { JsonLd } from "@/components/content/JsonLd";
import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/content/PageIntro";
import { getAllPolicies } from "@/lib/policies";
import {
  createBreadcrumbSchema,
  createCollectionPageSchema,
  createMetadata,
} from "@/lib/seo";

export const dynamic = "force-static";

const title = "Small Business IT Policy Starter Kit";
const description =
  "Practical AI, device, password, vendor access, offboarding, and MSP transition policy documents for small businesses.";

export const metadata: Metadata = createMetadata({
  title,
  description,
  path: "/resources/policy-starter-kit/",
});

export default function PolicyStarterKitPage() {
  const policies = getAllPolicies();
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Resources", path: "/resources/policy-starter-kit/" },
    { name: "Policy Starter Kit", path: "/resources/policy-starter-kit/" },
  ]);
  const collectionSchema = createCollectionPageSchema({
    name: title,
    description,
    path: "/resources/policy-starter-kit/",
    items: policies.map((policy) => ({
      name: policy.title,
      description: policy.summary,
      path: `/resources/policy-starter-kit/${policy.slug}/`,
    })),
  });

  return (
    <div className="container mx-auto min-h-[70vh] px-4 py-24">
      <JsonLd id="policy-kit-breadcrumb-schema" data={breadcrumbSchema} />
      <JsonLd id="policy-kit-collection-schema" data={collectionSchema} />

      <PageIntro
        eyebrow="Resource Center"
        title="Policy Starter"
        accent="Kit"
        description="Short, practical IT and security policy documents for small businesses that need better controls without enterprise paperwork."
      />

      <section className="mb-12 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <article className="glass-panel border border-[var(--border)] p-8">
          <p className="theme-accent-strong mb-3 font-mono text-xs uppercase tracking-[0.28em]">
            Open source source files
          </p>
          <h2 className="theme-heading mb-4 font-mono text-3xl font-bold">
            Browse online, download as PDF, adapt to your environment.
          </h2>
          <p className="theme-copy max-w-3xl text-lg leading-relaxed">
            These starter documents cover the gaps that show up constantly in small
            business IT: AI use, mobile devices, company computers, passwords and MFA,
            vendor access, offboarding, and MSP transitions. They are intentionally
            plain-language so owners, managers, and employees can actually use them.
          </p>
        </article>

        <aside className="glass-panel border border-[var(--border)] p-8">
          <h2 className="theme-heading mb-4 font-mono text-2xl font-bold">
            How to use them
          </h2>
          <div className="space-y-3">
            {[
              "Read the browsable page first.",
              "Download the PDF for staff review or internal discussion.",
              "Replace placeholders and adapt the language to your tools, contracts, and regulatory obligations.",
              "Have legal, compliance, or leadership review before treating a starter document as final policy.",
            ].map((item) => (
              <div key={item} className="theme-chip px-4 py-4 leading-relaxed">
                {item}
              </div>
            ))}
          </div>
        </aside>
      </section>

      <section className="glass-panel border border-[var(--border)] p-8">
        <h2 className="theme-heading mb-6 font-mono text-2xl font-bold">
          Starter documents
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {policies.map((policy) => (
            <article
              key={policy.slug}
              className="rounded-3xl border border-[var(--border)] bg-[var(--surface-strong)] p-6"
            >
              <div className="theme-soft mb-3 flex flex-wrap gap-3 font-mono text-xs uppercase tracking-[0.16em]">
                <span>{policy.readingTimeMinutes} min read</span>
                <span>{policy.eyebrow ?? "Policy"}</span>
              </div>
              <h3 className="theme-heading mb-3 font-mono text-2xl font-bold">
                {policy.title}
              </h3>
              <p className="theme-copy mb-5 leading-relaxed">{policy.summary}</p>
              <div className="mb-6 flex flex-wrap gap-2">
                {policy.tags.map((tag) => (
                  <span key={tag} className="theme-chip px-3 py-2 text-xs">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-3">
                <Link
                  href={`/resources/policy-starter-kit/${policy.slug}/`}
                  className="button-primary inline-block rounded-full px-5 py-3 font-mono text-sm font-bold uppercase tracking-[0.2em]"
                >
                  Browse
                </Link>
                {policy.pdf ? (
                  <a
                    href={policy.pdf}
                    className="button-secondary inline-block rounded-full px-5 py-3 font-mono text-sm font-bold uppercase tracking-[0.2em]"
                  >
                    PDF
                  </a>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
