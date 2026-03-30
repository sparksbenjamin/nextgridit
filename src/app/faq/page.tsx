import Script from "next/script";
import { PageIntro } from "@/components/content/PageIntro";
import { createBreadcrumbSchema, createFaqSchema, createMetadata } from "@/lib/seo";
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
    <div className="container mx-auto px-4 py-24 min-h-[70vh]">
      <Script
        id="faq-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="faq-page-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <PageIntro
        eyebrow="Questions"
        title="Frequently Asked"
        accent="Questions"
        description="Straight answers about how NextGridIT works, what kinds of projects are a fit, and how engagements typically begin."
      />

      <div className="space-y-5">
        {faqs.map((item) => (
          <section key={item.question} className="glass-panel border border-[var(--border)] p-8">
            <h2 className="theme-heading mb-3 font-mono text-2xl font-bold">
              {item.question}
            </h2>
            <p className="theme-copy leading-relaxed">{item.answer}</p>
          </section>
        ))}
      </div>
    </div>
  );
}
