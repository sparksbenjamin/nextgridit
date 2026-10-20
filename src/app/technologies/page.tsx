import { JsonLd } from "@/components/content/JsonLd";
import { ProjectCTA } from "@/components/content/ProjectCTA";
import { PageIntro } from "@/components/content/PageIntro";
import { TechnologiesFilterClient } from "@/components/pages/TechnologiesFilterClient";
import {
  createBreadcrumbSchema,
  createCollectionPageSchema,
  createMetadata,
} from "@/lib/seo";
import { technologyCatalog } from "@/lib/site-data";

export const metadata = createMetadata({
  title: "Technologies",
  description:
    "See the platforms, infrastructure, and system types commonly involved in NextGridIT projects.",
  path: "/technologies/",
});

export default function TechnologiesPage() {
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Technologies", path: "/technologies/" },
  ]);
  const collectionSchema = createCollectionPageSchema({
    name: "NextGridIT Technologies",
    description:
      "Technology overview covering cloud platforms, infrastructure, networking, security tooling, and camera systems supported by NextGridIT.",
    path: "/technologies/",
    items: technologyCatalog.map((technology) => ({
      name: technology.name,
      description: technology.summary,
      path: `/technologies/${technology.slug}/`,
    })),
  });

  return (
    <div className="page-shell container">
      <JsonLd id="technologies-breadcrumb-schema" data={breadcrumbSchema} />
      <JsonLd id="technologies-collection-schema" data={collectionSchema} />
      <PageIntro
        eyebrow="Technology expertise"
        title="The right tools."
        accent="A supportable environment."
        description="Explore the platforms and infrastructure we work with. Filter by your industry or the service you need, then see how each technology fits into a practical project."
      />
      <TechnologiesFilterClient />
      <ProjectCTA title="Let’s find the right fit for your environment." />
    </div>
  );
}
