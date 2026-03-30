import Script from "next/script";
import { PageIntro } from "@/components/content/PageIntro";
import { createFaqSchema, createMetadata } from "@/lib/seo";
import { faqs } from "@/lib/site-data";

export const metadata = createMetadata({
  title: "FAQ",
  description:
    "Answers to common questions about NextGridIT services, service areas, industries, and project approach.",
  path: "/faq/",
});

export default function FaqPage() {
  const faqSchema = createFaqSchema(faqs);

  return (
    <div className="container mx-auto px-4 py-24 min-h-[70vh]">
      <Script
        id="faq-page-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <PageIntro
        eyebrow="Questions"
        title="Frequently Asked"
        accent="Questions"
        description="This page gives search engines, AI systems, and prospective clients a clean answer set about what NextGridIT does, who it supports, and where it works."
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
