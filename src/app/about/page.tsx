import { BookingLink } from "@/components/content/BookingLink";
import type { Metadata } from "next";
import Link from "next/link";
import { IconArrowRight, IconCheck } from "@tabler/icons-react";
import { JsonLd } from "@/components/content/JsonLd";
import { PageIntro } from "@/components/content/PageIntro";
import { ProjectCTA } from "@/components/content/ProjectCTA";
import { createBreadcrumbSchema, createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "About",
  description:
    "NextGridIT: IT security consulting in Upstate South Carolina. MSP transitions, vendor lockout recovery, HIPAA assessments, and vulnerability remediation from 20+ years of hands-on experience.",
  path: "/about/",
});
const expertise = [
  [
    "Infrastructure & operations",
    "Network engineering, systems administration, Microsoft 365 and Azure, Active Directory, virtualization, and multi-site infrastructure. Professional experience includes a 4,000-account Microsoft 365 migration.",
  ],
  [
    "Security & research",
    "Vulnerability assessment, remediation planning, and security operations with Tenable.sc. Active research through Microsoft MSRC and HackerOne informs a practical approach to risk.",
  ],
  [
    "Regulated environments",
    "Hands-on experience with Medicaid compliance operations, HIPAA, PCI DSS, NIST 800-53, and MARS-E, including assessments of more than 100 medical offices.",
  ],
];
export default function AboutPage() {
  return (
    <div className="page-shell container">
      <JsonLd
        id="about-breadcrumb-schema"
        data={createBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "About", path: "/about/" },
        ])}
      />
      <PageIntro
        eyebrow="About NextGridIT"
        title="Independent thinking."
        accent="Hands-on experience."
        description="Experienced infrastructure, security, and operations support for organizations that need serious technical help—with clear scope, useful documentation, and ownership that stays with you."
      />
      <section className="detail-section founder-grid">
        <div className="founder-heading">
          <div className="about-signature" aria-hidden="true">
            bs.
          </div>
          <p className="eyebrow">The person behind the work</p>
          <h2>Benjamin Sparks</h2>
          <p className="theme-copy">
            IT consultant & senior security analyst
            <br />
            Based in Seneca, South Carolina
          </p>
          <BookingLink className="text-link" />
        </div>
        <div className="founder-bio">
          <p>
            NextGridIT draws on more than 20 years of professional experience
            across infrastructure, security, cloud migrations, support
            leadership, and compliance-aware operations.
          </p>
          <p>
            That breadth matters because most technology problems do not fit
            neatly into one category. A provider transition can become an
            identity problem. A camera deployment can expose a network problem.
            An assessment is only useful if there is a realistic way to act on
            it.
          </p>
          <p>
            The work is grounded in a simple principle: your organization should
            understand and control the systems it depends on. NextGridIT helps
            you get there through practical recommendations, hands-on work, and
            a documented handoff.
          </p>
          <div className="founder-name">
            <strong>20+ years of professional IT experience</strong>
            <span>
              100+ certifications across infrastructure, security, and
              operations.
            </span>
          </div>
        </div>
      </section>
      <section className="detail-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">A broad view of the environment</p>
            <h2>Experience that connects the pieces.</h2>
          </div>
        </div>
        <div className="related-grid">
          {expertise.map(([title, description]) => (
            <article className="related-link" key={title}>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>
      <section id="case-studies" className="detail-section detail-columns">
        <div>
          <p className="eyebrow mb-3">How that translates into work</p>
          <h2>Clear outcomes. Accountable delivery.</h2>
          <p className="theme-copy">
            Projects include helping businesses transition away from an MSP,
            recovering municipal infrastructure access after a vendor departure,
            strengthening Microsoft 365 environments, and prioritizing security
            findings for medical practices.
          </p>
          <Link href="/case-studies/" className="text-link mt-4">
            Read the sanitized case studies
            <IconArrowRight size={17} aria-hidden="true" />
          </Link>
        </div>
        <ul className="check-list">
          <li>
            <IconCheck size={19} aria-hidden="true" />
            <span>Scope and deliverables agreed before work begins.</span>
          </li>
          <li>
            <IconCheck size={19} aria-hidden="true" />
            <span>Documentation your team can use after the engagement.</span>
          </li>
          <li>
            <IconCheck size={19} aria-hidden="true" />
            <span>
              Private environments and client information treated with care.
            </span>
          </li>
          <li>
            <IconCheck size={19} aria-hidden="true" />
            <span>
              On-site work across the Upstate, with remote support and project
              travel when appropriate.
            </span>
          </li>
        </ul>
      </section>
      <ProjectCTA />
    </div>
  );
}
