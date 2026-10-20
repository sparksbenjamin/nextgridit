import Link from "next/link";
import {
  IconArrowRight,
  IconArrowUpRight,
  IconCheck,
  IconKey,
  IconMapPin,
  IconNetwork,
  IconShieldCheck,
} from "@tabler/icons-react";
import { ProjectCTA } from "@/components/content/ProjectCTA";
import { caseStudies } from "@/lib/site-data";

const paths = [
  {
    title: "Own your environment.",
    description:
      "Move beyond vendor dependency with a plan that puts your organization in charge.",
    icon: IconKey,
    links: [
      ["MSP transition", "/services/msp-transition/"],
      ["Vendor lockout recovery", "/services/vendor-lockout-recovery/"],
    ],
    href: "/services/msp-transition/",
    label: "Take back control",
  },
  {
    title: "Understand your risk.",
    description:
      "Find the gaps that matter, prioritize the work, and make measurable improvements.",
    icon: IconShieldCheck,
    links: [
      ["HIPAA security assessments", "/services/hipaa-security-assessment/"],
      ["Vulnerability assessment", "/services/vulnerability-assessment/"],
    ],
    href: "/services/",
    label: "Explore security services",
  },
  {
    title: "Build for the everyday.",
    description:
      "Dependable infrastructure that fits the way your organization actually operates.",
    icon: IconNetwork,
    links: [
      ["Microsoft 365 & cloud", "/services/microsoft-365/"],
      ["Networks & Wi-Fi", "/services/network-wifi/"],
    ],
    href: "/services/network-wifi/",
    label: "Strengthen your systems",
  },
];
const steps = [
  [
    "01",
    "Understand",
    "A conversation about your systems, your goals, and what is getting in the way.",
  ],
  [
    "02",
    "Make a plan",
    "A practical scope, clear priorities, and agreed deliverables before work begins.",
  ],
  [
    "03",
    "Do the work",
    "Hands-on implementation with documentation built into the process.",
  ],
  [
    "04",
    "Hand it over",
    "Verified access, usable records, and a clear path for your team to move forward.",
  ],
];

export function HomePage2026() {
  const study = caseStudies[0];
  return (
    <div className="consulting-home">
      <section className="home-hero">
        <div className="site-shell home-hero-grid">
          <div>
            <p className="eyebrow">
              Independent IT consulting · Upstate South Carolina
            </p>
            <h1>
              Your technology.
              <br />
              <span>Under your control.</span>
            </h1>
            <p className="hero-description">
              From an MSP transition to a more resilient network, get
              experienced help—and leave with systems, access, and documentation
              your team owns.
            </p>
            <div className="hero-actions">
              <Link className="button-primary" href="/contact/">
                Discuss your project
                <IconArrowRight size={18} aria-hidden="true" />
              </Link>
              <Link className="text-link" href="/services/">
                See how we can help
                <IconArrowUpRight size={18} aria-hidden="true" />
              </Link>
            </div>
            <p className="hero-location">
              <IconMapPin size={15} aria-hidden="true" />
              Based in Seneca. Working across the Upstate and beyond.
            </p>
          </div>
          <div>
            <article className="project-record">
              <div className="record-topline">
                <span>From the project files</span>
                <IconArrowUpRight size={18} aria-hidden="true" />
              </div>
              <h2>
                A clean break.
                <br />A stronger foundation.
              </h2>
              <p>
                Helping a growing business move from an inherited MSP
                relationship to an IT environment of its own.
              </p>
              <div className="record-steps">
                {[
                  [
                    "01",
                    "Know what you own",
                    "Audit systems, access, and provider dependencies.",
                  ],
                  [
                    "02",
                    "Make the transition",
                    "Coordinate the cutover and support the internal IT hire.",
                  ],
                  [
                    "03",
                    "Verify the handoff",
                    "Reset credentials, revoke old access, and deliver documentation.",
                  ],
                ].map(([index, title, description]) => (
                  <div className="record-step" key={index}>
                    <span>{index}</span>
                    <div>
                      <strong>{title}</strong>
                      <p>{description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link className="text-link" href={`/case-studies/#${study.slug}`}>
                Read the project story
                <IconArrowRight size={17} aria-hidden="true" />
              </Link>
            </article>
            <div className="record-caption">
              <span>MSP transition / business IT</span>
              <span>Sanitized client example</span>
            </div>
          </div>
        </div>
      </section>
      <section className="experience-bar" aria-label="Consultant experience">
        <div className="site-shell experience-inner">
          <p>
            Technical depth earned through hands-on professional experience.
          </p>
          <div className="experience-stat">
            <strong>20+</strong>
            <span>years in IT</span>
          </div>
          <div className="experience-stat">
            <strong>100+</strong>
            <span>professional certifications</span>
          </div>
          <div className="experience-stat">
            <strong>100+</strong>
            <span>medical offices assessed</span>
          </div>
        </div>
      </section>
      <section className="home-section">
        <div className="site-shell">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Where we can help</p>
              <h2>
                Start with the problem.
                <br />
                Build toward a better outcome.
              </h2>
            </div>
            <p>
              Focused projects for businesses, medical practices,
              municipalities, and organizations that need a dependable technical
              partner.
            </p>
          </div>
          <div className="service-paths">
            {paths.map((path) => (
              <article className="service-path" key={path.title}>
                <path.icon size={27} stroke={1.5} aria-hidden="true" />
                <h3>{path.title}</h3>
                <p>{path.description}</p>
                <ul>
                  {path.links.map(([label, href]) => (
                    <li key={href}>
                      <Link href={href}>{label}</Link>
                    </li>
                  ))}
                </ul>
                <Link className="text-link" href={path.href}>
                  {path.label}
                  <IconArrowRight size={17} aria-hidden="true" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="case-band home-section">
        <div className="site-shell featured-case">
          <div>
            <p className="eyebrow">Work with a clear finish line</p>
            <h2>From “our provider manages it” to “we own it.”</h2>
            <p>{study.challenge}</p>
            <Link href={`/case-studies/#${study.slug}`} className="text-link">
              Explore the case study
              <IconArrowRight size={17} aria-hidden="true" />
            </Link>
          </div>
          <div>
            <p className="eyebrow">What changed</p>
            <ul className="case-outcomes">
              {study.outcomes.map((outcome) => (
                <li className="case-outcome" key={outcome}>
                  <IconCheck size={19} aria-hidden="true" />
                  <span>{outcome}</span>
                </li>
              ))}
            </ul>
            <p className="theme-soft mt-4 text-xs">
              Client details are withheld to protect private environments.
            </p>
          </div>
        </div>
      </section>
      <section className="home-section">
        <div className="site-shell founder-grid">
          <div className="founder-heading">
            <p className="eyebrow">Experienced. Independent. Accountable.</p>
            <h2>A technical partner who sees the whole environment.</h2>
            <Link className="text-link" href="/about/">
              Meet NextGridIT
              <IconArrowRight size={17} aria-hidden="true" />
            </Link>
          </div>
          <div className="founder-bio">
            <p>
              NextGridIT brings together infrastructure, security, and
              operations experience to solve the problems that sit between
              systems, vendors, and teams.
            </p>
            <p>
              The approach is straightforward: understand the environment, make
              practical recommendations, do the work, and hand it over in a form
              your organization can use.
            </p>
            <div className="founder-name">
              <strong>Benjamin Sparks</strong>
              <span>IT consultant & security analyst · Seneca, SC</span>
            </div>
          </div>
        </div>
      </section>
      <section className="site-shell home-section border-t border-[var(--border)]">
        <div className="section-heading">
          <div>
            <p className="eyebrow">How we work</p>
            <h2>Clarity at every step.</h2>
          </div>
          <Link className="text-link" href="/process/">
            Our approach
            <IconArrowRight size={17} aria-hidden="true" />
          </Link>
        </div>
        <div className="process-grid">
          {steps.map(([number, title, description]) => (
            <div className="process-item" key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          ))}
        </div>
      </section>
      <div className="site-shell">
        <ProjectCTA />
      </div>
    </div>
  );
}
