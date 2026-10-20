import { JsonLd } from "@/components/content/JsonLd";
import type { Metadata } from "next";
import Link from "next/link";
import { IconArrowRight, IconDownload } from "@tabler/icons-react";
import { ProjectCTA } from "@/components/content/ProjectCTA";
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
    <div className="page-shell container">
      <JsonLd id="policy-kit-breadcrumb-schema" data={breadcrumbSchema} />
      <JsonLd id="policy-kit-collection-schema" data={collectionSchema} />
      <PageIntro
        eyebrow="Small business IT policy starter kit"
        title="Good practices."
        accent="Put into words."
        description="Plain-language starting points for AI use, devices, passwords, vendor access, and IT transitions. Read online, download a PDF, and adapt the documents to your organization."
      />
      <section className="detail-section detail-columns">
        <div>
          <h2>A useful starting point.</h2>
          <p className="theme-copy">
            Replace placeholders and tailor each document to your systems,
            contracts, and responsibilities. Have leadership, legal, or
            compliance review it before treating it as a final policy.
          </p>
        </div>
        <div>
          <p className="eyebrow">How to use the kit</p>
          <p className="theme-copy mt-3">
            Read → Adapt → Review → Share with your team
          </p>
        </div>
      </section>
      <div className="resource-grid">
        {policies.map((policy) => (
          <article className="resource-card" key={policy.slug}>
            <p className="resource-meta">
              {policy.readingTimeMinutes} min read
            </p>
            <h2>
              <Link href={`/resources/policy-starter-kit/${policy.slug}/`}>
                {policy.title}
              </Link>
            </h2>
            <p>{policy.summary}</p>
            <div className="mt-4 flex flex-wrap gap-4">
              <Link
                className="text-link"
                href={`/resources/policy-starter-kit/${policy.slug}/`}
              >
                Read the document
                <IconArrowRight size={17} aria-hidden="true" />
              </Link>
              {policy.pdf && (
                <a className="text-link" href={policy.pdf} download>
                  <IconDownload size={17} aria-hidden="true" />
                  Download PDF
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
      <ProjectCTA title="Need help putting policy into practice?" />
    </div>
  );
}
