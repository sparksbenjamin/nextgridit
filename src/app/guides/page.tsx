import { JsonLd } from "@/components/content/JsonLd";
import type { Metadata } from "next";
import Link from "next/link";
import { IconArrowRight } from "@tabler/icons-react";
import { ProjectCTA } from "@/components/content/ProjectCTA";
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
    <div className="page-shell container">
      <JsonLd id="guides-breadcrumb-schema" data={breadcrumbSchema} />
      <JsonLd id="guides-collection-schema" data={collectionSchema} />
      <PageIntro
        eyebrow="Guides & field notes"
        title="A clearer view of"
        accent="your technology."
        description="Practical explanations of security, infrastructure, and the operational details that make business technology more dependable."
      />
      {featuredGuide && (
        <article className="featured-guide">
          <div>
            <p className="eyebrow">Start here</p>
            <p className="resource-meta mt-3">
              {featuredGuide.readingTimeMinutes} min read
            </p>
          </div>
          <div>
            <h2>{featuredGuide.title}</h2>
            <p>{featuredGuide.summary}</p>
            <Link
              className="text-link mt-3"
              href={`/guides/${featuredGuide.slug}/`}
            >
              Read the guide
              <IconArrowRight size={17} aria-hidden="true" />
            </Link>
          </div>
        </article>
      )}
      <section aria-label="All guides" className="resource-grid">
        {additionalGuides.map((guide) => (
          <article className="resource-card" key={guide.slug}>
            <div className="resource-meta">
              <span>{formatGuideDate(guide.publishedAt)}</span>
              <span>{guide.readingTimeMinutes} min read</span>
            </div>
            <h2>
              <Link href={`/guides/${guide.slug}/`}>{guide.title}</Link>
            </h2>
            <p>{guide.summary}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {guide.tags.map((tag) => (
                <span className="theme-chip px-2 py-1 text-xs" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
            <Link className="text-link mt-3" href={`/guides/${guide.slug}/`}>
              Read the guide
              <IconArrowRight size={17} aria-hidden="true" />
            </Link>
          </article>
        ))}
      </section>
      <ProjectCTA title="Ready to put the ideas into practice?" />
    </div>
  );
}
