import { ProjectCTA } from "@/components/content/ProjectCTA";
import { JsonLd } from "@/components/content/JsonLd";
import { PageIntro } from "@/components/content/PageIntro";
import {
  createBreadcrumbSchema,
  createFaqSchema,
  createMetadata,
} from "@/lib/seo";
import { faqs } from "@/lib/site-data";

export const metadata = createMetadata({
  title: "FAQ",
  description:
    "Answers to common questions about NextGridIT services, service areas, industries, and project approach.",
  path: "/faq/",
});

export default function FaqPage() {
  const faqSchema = createFaqSchema(faqs);
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "FAQ", path: "/faq/" },
  ]);

  return (
    <div className="page-shell container">
      <JsonLd id="faq-breadcrumb-schema" data={breadcrumbSchema} />
      <JsonLd id="faq-page-schema" data={faqSchema} />
      <PageIntro
        eyebrow="Common questions"
        title="Straight answers."
        accent="Useful next steps."
        description="What to expect from NextGridIT, which projects are a good fit, and how an engagement begins."
      />
      <div className="faq-list">
        {faqs.map((item) => (
          <details key={item.question}>
            <summary>{item.question}</summary>
            <p>{item.answer}</p>
          </details>
        ))}
      </div>
      <ProjectCTA title="Have a question about your environment?" />
    </div>
  );
}
