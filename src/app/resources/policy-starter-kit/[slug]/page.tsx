import { JsonLd } from "@/components/content/JsonLd";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MarkdownContent } from "@/components/content/MarkdownContent";
import {
  formatPolicyDate,
  getAllPolicies,
  getPolicyBySlug,
} from "@/lib/policies";
import {
  createArticleSchema,
  createBreadcrumbSchema,
  createMetadata,
} from "@/lib/seo";

export const dynamic = "force-static";
export const dynamicParams = false;

type Params = {
  slug: string;
};

export function generateStaticParams() {
  return getAllPolicies().map((policy) => ({ slug: policy.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const policy = getPolicyBySlug(slug);

  if (!policy) {
    return {};
  }

  return createMetadata({
    title: policy.title,
    description: policy.summary,
    path: `/resources/policy-starter-kit/${policy.slug}/`,
  });
}

export default async function PolicyDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const policy = getPolicyBySlug(slug);
  const allPolicies = getAllPolicies().filter((item) => item.slug !== slug);

  if (!policy) {
    notFound();
  }

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Policy Starter Kit", path: "/resources/policy-starter-kit/" },
    { name: policy.title, path: `/resources/policy-starter-kit/${policy.slug}/` },
  ]);
  const articleSchema = createArticleSchema({
    title: policy.title,
    description: policy.summary,
    path: `/resources/policy-starter-kit/${policy.slug}/`,
    datePublished: policy.publishedAt,
    dateModified: policy.updatedAt ?? policy.publishedAt,
    keywords: policy.tags,
  });

  return (
    <div className="container mx-auto min-h-[70vh] px-4 py-24">
      <JsonLd id={`policy-breadcrumb-${policy.slug}`} data={breadcrumbSchema} />
      <JsonLd id={`policy-article-${policy.slug}`} data={articleSchema} />

      <div className="mb-14 max-w-4xl">
        {policy.eyebrow ? (
          <p className="theme-accent-strong mb-4 text-sm font-mono uppercase tracking-[0.3em]">
            {policy.eyebrow}
          </p>
        ) : null}
        <h1 className="theme-heading mb-6 font-mono text-4xl font-bold uppercase tracking-wider md:text-5xl">
          {policy.title}
        </h1>
        <div className="theme-rule mb-6 h-1 w-24" />
        <p className="theme-copy max-w-3xl text-lg leading-relaxed">
          {policy.summary}
        </p>
        <div className="theme-soft mt-6 flex flex-wrap gap-4 font-mono text-xs uppercase tracking-[0.18em]">
          <span>Published {formatPolicyDate(policy.publishedAt)}</span>
          <span>{policy.readingTimeMinutes} min read</span>
          {policy.updatedAt ? (
            <span>Updated {formatPolicyDate(policy.updatedAt)}</span>
          ) : null}
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          {policy.tags.map((tag) => (
            <span key={tag} className="theme-chip px-4 py-2 text-sm">
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-4">
          {policy.pdf ? (
            <a
              href={policy.pdf}
              className="button-primary inline-block rounded-full px-6 py-3 font-mono text-sm font-bold uppercase tracking-[0.2em]"
            >
              Download PDF
            </a>
          ) : null}
          <Link
            href="/resources/policy-starter-kit/"
            className="button-secondary inline-block rounded-full px-6 py-3 font-mono text-sm font-bold uppercase tracking-[0.2em]"
          >
            View Kit
          </Link>
        </div>
      </div>

      <section className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] xl:grid-cols-[minmax(0,1fr)_320px]">
        <article className="glass-panel border border-[var(--border)] p-8">
          <MarkdownContent content={policy.content} />
        </article>

        <aside className="space-y-8 lg:sticky lg:top-28 lg:self-start">
          {policy.headings.length > 0 ? (
            <section className="glass-panel border border-[var(--border)] p-8">
              <h2 className="theme-heading mb-4 font-mono text-xl font-bold">
                In this document
              </h2>
              <nav aria-label="Policy sections" className="space-y-3">
                {policy.headings.map((heading) => (
                  <a
                    key={`${heading.level}-${heading.id}`}
                    href={`#${heading.id}`}
                    className={`block text-sm leading-relaxed theme-copy hover:text-[var(--accent)] ${
                      heading.level === 3 ? "pl-4" : ""
                    }`}
                  >
                    {heading.text}
                  </a>
                ))}
              </nav>
            </section>
          ) : null}

          <section className="glass-panel border border-[var(--border)] p-8">
            <h2 className="theme-heading mb-4 font-mono text-xl font-bold">
              Related services
            </h2>
            <div className="grid gap-4">
              <Link
                href="/services/msp-transition/"
                className="block rounded-2xl border border-[var(--border)] bg-[var(--surface-strong)] px-4 py-4 text-sm theme-copy hover:border-[var(--border-strong)]"
              >
                MSP Transition
              </Link>
              <Link
                href="/services/vendor-lockout-recovery/"
                className="block rounded-2xl border border-[var(--border)] bg-[var(--surface-strong)] px-4 py-4 text-sm theme-copy hover:border-[var(--border-strong)]"
              >
                Vendor Lockout Recovery
              </Link>
              <Link
                href="/services/hipaa-security-assessment/"
                className="block rounded-2xl border border-[var(--border)] bg-[var(--surface-strong)] px-4 py-4 text-sm theme-copy hover:border-[var(--border-strong)]"
              >
                HIPAA Security Assessment
              </Link>
              <Link
                href="/contact/"
                className="block rounded-2xl border border-[var(--border)] bg-[var(--surface-strong)] px-4 py-4 text-sm theme-copy hover:border-[var(--border-strong)]"
              >
                Customize This Policy
              </Link>
            </div>
          </section>

          {allPolicies.length > 0 ? (
            <section className="glass-panel border border-[var(--border)] p-8">
              <h2 className="theme-heading mb-4 font-mono text-xl font-bold">
                More policies
              </h2>
              <div className="space-y-4">
                {allPolicies.slice(0, 4).map((relatedPolicy) => (
                  <Link
                    key={relatedPolicy.slug}
                    href={`/resources/policy-starter-kit/${relatedPolicy.slug}/`}
                    className="block rounded-2xl border border-[var(--border)] bg-[var(--surface-strong)] p-5 hover:border-[var(--border-strong)]"
                  >
                    <h3 className="theme-heading mb-2 font-mono text-lg font-bold">
                      {relatedPolicy.title}
                    </h3>
                    <p className="theme-copy text-sm leading-relaxed">
                      {relatedPolicy.summary}
                    </p>
                  </Link>
                ))}
              </div>
            </section>
          ) : null}
        </aside>
      </section>
    </div>
  );
}
