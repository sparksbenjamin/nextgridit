import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { IconBug, IconCertificate, IconNetwork, IconShieldCheck, IconWorld } from "@tabler/icons-react";
import { createBreadcrumbSchema, createMetadata } from "@/lib/seo";

const aboutHighlights = [
  {
    title: "Security and Vulnerability Research",
    description:
      "Active bug bounty researcher on Microsoft MSRC and HackerOne platforms. Daily work in vulnerability assessment, remediation prioritization, and security operations using Tenable.sc and enterprise compliance tooling.",
    icon: <IconBug className="theme-accent-alt h-6 w-6" />,
  },
  {
    title: "Network and Infrastructure",
    description:
      "Built on real-world experience with Microsoft 365 and Azure environments, Active Directory, SQL Server, virtualization, firewalls, BGP/MPLS, and multi-site networking — including a 4,000-account O365 migration with zero data loss.",
    icon: <IconNetwork className="theme-accent-strong h-6 w-6" />,
  },
  {
    title: "Compliance and Regulated Environments",
    description:
      "Daily experience in DHHS Medicaid compliance operations — HIPAA, PCI DSS, NIST 800-53, MARS-E, and FedRAMP. Has assessed 100+ medical offices and understands what auditors actually look for vs. what checkbox compliance misses.",
    icon: <IconCertificate className="theme-accent h-6 w-6" />,
  },
  {
    title: "Local and Travel-Ready",
    description:
      "Based in Seneca, SC. On-site work across Seneca, Clemson, Anderson, Easley, and Greenville. Remote and project-based work available nationwide — travel when the project requires it.",
    icon: <IconWorld className="theme-accent-alt h-6 w-6" />,
  },
];

export const metadata: Metadata = createMetadata({
  title: "About",
  description:
    "NextGridIT: IT security consulting in Upstate South Carolina. MSP transitions, vendor lockout recovery, HIPAA assessments, and vulnerability remediation from 20+ years of hands-on experience.",
  path: "/about/",
});

export default function AboutPage() {
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "About", path: "/about/" },
  ]);

  return (
    <div className="container mx-auto px-4 py-24 min-h-[70vh]">
      <Script
        id="about-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="mb-16">
        <h1 className="theme-heading mb-6 font-mono text-4xl font-bold uppercase tracking-wider md:text-5xl">
          About <span className="theme-accent-alt">NextGridIT</span>
        </h1>
        <div className="theme-rule mb-6 h-1 w-24" />
      </div>

      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="theme-copy space-y-6 font-sans text-lg leading-relaxed">
          <p>
            NextGridIT was built to bring experienced infrastructure, security, and operations support to organizations that need serious technical help without enterprise-sized overhead.
          </p>
          <p>
            The company draws on more than 20 years of hands-on IT experience across network engineering, systems administration, security research, support leadership, cloud migrations, compliance-aware environments, and multi-site operations. Over 100 certifications back that experience — not as wall decoration, but as proof of continuous learning across the domains that matter to clients.
          </p>
          <p>
            The work is grounded in practical outcomes: organizations that own their own IT, systems with documentation that actually exists, networks that stay up, and security postures based on real risk rather than theoretical severity.
          </p>
          <p className="theme-heading my-8 border-l-2 border-[var(--accent-alt)] py-2 pl-4 font-mono">
            NextGridIT exists to help businesses in Upstate South Carolina build technology environments that are stable, secure, and actually under their control.
          </p>
          <p>
            That means recommending the right level of infrastructure, security, and process for each organization instead of forcing every client into the same package. It also means doing the work that generic IT support can&apos;t or won&apos;t — like MSP transitions, vendor lockout recovery, and real compliance assessments.
          </p>
        </div>

        <div
          className="glass-panel relative overflow-hidden border p-8"
          style={{ borderColor: "var(--border)" }}
        >
          <div className="absolute right-0 top-0 h-32 w-32 rounded-full blur-3xl" style={{ backgroundColor: "var(--accent-alt-soft)" }} />

          <div className="space-y-8 relative z-10">
            {aboutHighlights.map((item) => (
              <div key={item.title} className="flex items-start gap-4">
                <div
                  className="mt-1 rounded-xl border p-3"
                  style={{
                    borderColor: "var(--border)",
                    backgroundColor: "var(--surface-strong)",
                  }}
                >
                  {item.icon}
                </div>
                <div>
                  <h3 className="theme-heading mb-1 font-mono text-xl font-bold">
                    {item.title}
                  </h3>
                  <p className="theme-copy font-sans text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <section id="case-studies" className="glass-panel mt-20 border border-[var(--border)] p-8 scroll-mt-28">
        <div className="max-w-3xl">
          <h2 className="theme-heading mb-4 font-mono text-2xl font-bold uppercase tracking-wider">
            Representative <span className="theme-accent-strong">Results</span>
          </h2>
          <div className="theme-copy space-y-4 leading-relaxed">
            <p>
              Work includes transitioning businesses away from MSPs they had outgrown, recovering
              access to city infrastructure after a vendor walked away, cleaning up Microsoft 365
              tenants that had drifted into unmanageable states, and delivering HIPAA security
              assessments for medical practices that needed findings prioritized by real risk.
            </p>
            <p>
              Because client environments are private, NextGridIT does not publicly identify clients
              or publish sensitive implementation details. Case studies on this site are sanitized
              but specific enough to show what actually happened and what the outcomes were.
            </p>
          </div>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link href="/case-studies/" className="button-secondary rounded-full px-6 py-3 font-mono text-sm font-bold uppercase tracking-[0.2em]">
              View Case Studies
            </Link>
            <Link href="/company-facts/" className="button-secondary rounded-full px-6 py-3 font-mono text-sm font-bold uppercase tracking-[0.2em]">
              Company Facts
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
