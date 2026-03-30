import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { PageIntro } from "@/components/content/PageIntro";
import { formatGuideDate, getAllGuides } from "@/lib/guides";
import {
  createBreadcrumbSchema,
  createCollectionPageSchema,
  createMetadata,
} from "@/lib/seo";

export const dynamic = "force-static";

const title = "Guides and Field Notes";
const description =
  "Practical write-ups from NextGridIT on local-first networking, DNS, security baselines, and the infrastructure details that keep environments stable.";

export const metadata: Metadata = createMetadata({
  title,
  description,
  path: "/guides/",
});

export default function GuidesPage() {
  const guides = getAllGuides();
  const featuredGuide = guides[0];
  const additionalGuides = guides.slice(1);

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Guides", path: "/guides/" },
  ]);

  const collectionSchema = createCollectionPageSchema({
    name: title,
    description,
    path: "/guides/",
    items: guides.map((guide) => ({
      name: guide.title,
      description: guide.summary,
      path: `/guides/${guide.slug}/`,
    })),
  });

  return (
    <div className="container mx-auto min-h-[70vh] px-4 py-24">
      <Script
        id="guides-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="guides-collection-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />

      <PageIntro
        eyebrow="Resource Center"
        title="Guides"
        accent="and Field Notes"
        description="These write-ups explain the local-first networking, security, and operations concepts that usually matter before a project ever starts."
      />

      <section className="mb-16 grid gap-8 lg:grid-cols-[1.25fr_0.75fr]">
        {featuredGuide ? (
          <article className="glass-panel border border-[var(--border)] p-8">
            <p className="theme-accent-strong mb-3 font-mono text-xs uppercase tracking-[0.28em]">
              Featured guide
            </p>
            <h2 className="theme-heading mb-4 font-mono text-3xl font-bold">
              {featuredGuide.title}
            </h2>
            <p className="theme-copy mb-6 max-w-3xl text-lg leading-relaxed">
              {featuredGuide.summary}
            </p>
            <div className="theme-soft mb-6 flex flex-wrap gap-4 font-mono text-xs uppercase tracking-[0.18em]">
              <span>{formatGuideDate(featuredGuide.publishedAt)}</span>
              <span>{featuredGuide.readingTimeMinutes} min read</span>
            </div>
            <div className="mb-8 flex flex-wrap gap-3">
              {featuredGuide.tags.map((tag) => (
                <span key={tag} className="theme-chip px-4 py-2 text-sm">
                  {tag}
                </span>
              ))}
            </div>
            <Link
              href={`/guides/${featuredGuide.slug}/`}
              className="button-primary inline-block rounded-full px-6 py-3 font-mono text-sm font-bold uppercase tracking-[0.2em]"
            >
              Read Guide
            </Link>
          </article>
        ) : null}

        <aside className="space-y-8">
          <section className="glass-panel border border-[var(--border)] p-8">
            <h2 className="theme-heading mb-4 font-mono text-2xl font-bold">
              What this section is for
            </h2>
            <div className="space-y-3">
              {[
                "Explaining why local DNS, NTP, segmentation, and documentation matter",
                "Giving prospects a clearer picture of how local-first infrastructure works",
                "Creating evergreen resources that support service conversations and search traffic",
              ].map((item) => (
                <div key={item} className="theme-chip px-4 py-4 leading-relaxed">
                  {item}
                </div>
              ))}
            </div>
          </section>

          <section className="glass-panel border border-[var(--border)] p-8">
            <h2 className="theme-heading mb-4 font-mono text-2xl font-bold">
              Start with
            </h2>
            <div className="grid gap-4">
              <Link
                href="/local-first/"
                className="block rounded-2xl border border-[var(--border)] bg-[var(--surface-strong)] px-4 py-4 text-sm theme-copy hover:border-[var(--border-strong)]"
              >
                Local-First Systems
              </Link>
              <Link
                href="/services/network-wifi/"
                className="block rounded-2xl border border-[var(--border)] bg-[var(--surface-strong)] px-4 py-4 text-sm theme-copy hover:border-[var(--border-strong)]"
              >
                Network and Wi-Fi Services
              </Link>
              <Link
                href="/contact/"
                className="block rounded-2xl border border-[var(--border)] bg-[var(--surface-strong)] px-4 py-4 text-sm theme-copy hover:border-[var(--border-strong)]"
              >
                Start a Project Conversation
              </Link>
            </div>
          </section>
        </aside>
      </section>

      {additionalGuides.length > 0 ? (
        <section className="glass-panel border border-[var(--border)] p-8">
          <h2 className="theme-heading mb-6 font-mono text-2xl font-bold">
            More guides
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {additionalGuides.map((guide) => (
              <article
                key={guide.slug}
                className="rounded-3xl border border-[var(--border)] bg-[var(--surface-strong)] p-6"
              >
                <div className="theme-soft mb-3 flex flex-wrap gap-3 font-mono text-xs uppercase tracking-[0.16em]">
                  <span>{formatGuideDate(guide.publishedAt)}</span>
                  <span>{guide.readingTimeMinutes} min read</span>
                </div>
                <h3 className="theme-heading mb-3 font-mono text-2xl font-bold">
                  {guide.title}
                </h3>
                <p className="theme-copy mb-5 leading-relaxed">{guide.summary}</p>
                <div className="mb-6 flex flex-wrap gap-2">
                  {guide.tags.map((tag) => (
                    <span key={tag} className="theme-chip px-3 py-2 text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
                <Link
                  href={`/guides/${guide.slug}/`}
                  className="button-secondary inline-block rounded-full px-5 py-3 font-mono text-sm font-bold uppercase tracking-[0.2em]"
                >
                  Read Guide
                </Link>
              </article>
            ))}
          </div>
        </section>
      ) : null}
    </div>
  );
}
