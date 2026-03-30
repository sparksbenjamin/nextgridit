import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { notFound } from "next/navigation";
import { MarkdownContent } from "@/components/content/MarkdownContent";
import {
  formatGuideDate,
  getAllGuides,
  getGuideBySlug,
  getRelatedGuides,
} from "@/lib/guides";
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
  return getAllGuides().map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);

  if (!guide) {
    return {};
  }

  return createMetadata({
    title: guide.title,
    description: guide.summary,
    path: `/guides/${guide.slug}/`,
  });
}

export default async function GuideDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);

  if (!guide) {
    notFound();
  }

  const relatedGuides = getRelatedGuides(guide.slug);
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Guides", path: "/guides/" },
    { name: guide.title, path: `/guides/${guide.slug}/` },
  ]);
  const articleSchema = createArticleSchema({
    title: guide.title,
    description: guide.summary,
    path: `/guides/${guide.slug}/`,
    datePublished: guide.publishedAt,
    dateModified: guide.updatedAt ?? guide.publishedAt,
    keywords: guide.tags,
  });

  return (
    <div className="container mx-auto min-h-[70vh] px-4 py-24">
      <Script
        id={`guide-breadcrumb-${guide.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id={`guide-article-${guide.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <div className="mb-14 max-w-4xl">
        {guide.eyebrow ? (
          <p className="theme-accent-strong mb-4 text-sm font-mono uppercase tracking-[0.3em]">
            {guide.eyebrow}
          </p>
        ) : null}
        <h1 className="theme-heading mb-6 font-mono text-4xl font-bold uppercase tracking-wider md:text-5xl">
          {guide.title}
        </h1>
        <div className="theme-rule mb-6 h-1 w-24" />
        <p className="theme-copy max-w-3xl text-lg leading-relaxed">{guide.summary}</p>
        <div className="theme-soft mt-6 flex flex-wrap gap-4 font-mono text-xs uppercase tracking-[0.18em]">
          <span>Published {formatGuideDate(guide.publishedAt)}</span>
          <span>{guide.readingTimeMinutes} min read</span>
          {guide.updatedAt ? <span>Updated {formatGuideDate(guide.updatedAt)}</span> : null}
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          {guide.tags.map((tag) => (
            <span key={tag} className="theme-chip px-4 py-2 text-sm">
              {tag}
            </span>
          ))}
        </div>
      </div>

      <section className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] xl:grid-cols-[minmax(0,1fr)_320px]">
        <article className="glass-panel border border-[var(--border)] p-8">
          <MarkdownContent content={guide.content} />
        </article>

        <aside className="space-y-8 lg:sticky lg:top-28 lg:self-start">
          {guide.headings.length > 0 ? (
            <section className="glass-panel border border-[var(--border)] p-8">
              <h2 className="theme-heading mb-4 font-mono text-xl font-bold">
                In this guide
              </h2>
              <nav aria-label="Guide sections" className="space-y-3">
                {guide.headings.map((heading) => (
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
              Related pages
            </h2>
            <div className="grid gap-4">
              <Link
                href="/services/network-wifi/"
                className="block rounded-2xl border border-[var(--border)] bg-[var(--surface-strong)] px-4 py-4 text-sm theme-copy hover:border-[var(--border-strong)]"
              >
                Network and Wi-Fi Services
              </Link>
              <Link
                href="/local-first/"
                className="block rounded-2xl border border-[var(--border)] bg-[var(--surface-strong)] px-4 py-4 text-sm theme-copy hover:border-[var(--border-strong)]"
              >
                Local-First Systems
              </Link>
              <Link
                href="/compliance/"
                className="block rounded-2xl border border-[var(--border)] bg-[var(--surface-strong)] px-4 py-4 text-sm theme-copy hover:border-[var(--border-strong)]"
              >
                Compliance and Frameworks
              </Link>
            </div>
          </section>

          {relatedGuides.length > 0 ? (
            <section className="glass-panel border border-[var(--border)] p-8">
              <h2 className="theme-heading mb-4 font-mono text-xl font-bold">
                More guides
              </h2>
              <div className="space-y-4">
                {relatedGuides.map((relatedGuide) => (
                  <Link
                    key={relatedGuide.slug}
                    href={`/guides/${relatedGuide.slug}/`}
                    className="block rounded-2xl border border-[var(--border)] bg-[var(--surface-strong)] p-5 hover:border-[var(--border-strong)]"
                  >
                    <h3 className="theme-heading mb-2 font-mono text-lg font-bold">
                      {relatedGuide.title}
                    </h3>
                    <p className="theme-copy text-sm leading-relaxed">
                      {relatedGuide.summary}
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
