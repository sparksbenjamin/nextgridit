import type { Metadata } from "next";
import Link from "next/link";
import {
  IconArrowRight,
  IconArrowUpRight,
  IconBrandGithub,
  IconShieldCheck,
  IconCertificate,
  IconAdjustments,
  IconActivity,
  IconServer,
  IconLock,
} from "@tabler/icons-react";
import { JsonLd } from "@/components/content/JsonLd";
import { AegisShowcase } from "@/components/sections/AegisShowcase";
import { createBreadcrumbSchema, createMetadata } from "@/lib/seo";
import "./aegis.css";

const repo = "https://github.com/nextgridit-team/Aegis-WAF";
const docs = `${repo}/blob/main/docs`;
const description =
  "Aegis WAF is an open-source, self-hosted web application firewall. Protect websites and APIs with OWASP CRS, automatic TLS, and application-specific policies.";
const base = createMetadata({
  title: "Aegis WAF — Open-Source Web Application Firewall",
  description,
  path: "/aegis/WAF/",
});
export const metadata: Metadata = {
  ...base,
  openGraph: {
    ...base.openGraph,
    images: [
      {
        url: "/aegis/social.png",
        width: 1200,
        height: 630,
        alt: "Aegis WAF: open-source web application firewall by NextGridIT",
      },
    ],
  },
  twitter: { ...base.twitter, images: ["/aegis/social.png"] },
};
const features = [
  {
    icon: IconShieldCheck,
    title: "Give every application its own policy",
    text: "Your public website and your internal tools have different traffic patterns. Apply Coraza and OWASP Core Rule Set protection per application, with reusable policies and targeted exclusions.",
    href: "managed-signatures.md",
  },
  {
    icon: IconAdjustments,
    title: "Tune protection around real traffic",
    text: "A blocked request needs an explanation. Review matched rules, start custom policies in Observe, and adjust detection sensitivity before deciding what to enforce.",
    href: "managed-signatures.md#sensitivity-and-curated-sets",
  },
  {
    icon: IconCertificate,
    title: "Keep certificates and routing together",
    text: "Manage HTTPS where requests enter your environment. Automatic certificate issuance and renewal sit alongside upstream routing and application protection in the same dashboard.",
    href: "certificates.md",
  },
  {
    icon: IconActivity,
    title: "Get from a traffic spike to a request",
    text: "Use the live traffic view to spot activity, then investigate recorded requests and rule matches. Connect alerts and metrics to the monitoring workflow your team already uses.",
    href: "observability.md",
  },
];
const useCases = [
  {
    title: "Self-hosted websites",
    text: "Add an inspection point in front of the sites and tools you publish. Keep certificates, routing, and security policy together as your application inventory grows.",
  },
  {
    title: "HTTP APIs and streaming services",
    text: "Choose endpoint behavior that fits the client. API and SSE modes return JSON denials without browser CAPTCHA, while policies let you tune protection for each upstream.",
  },
  {
    title: "IT teams managing multiple apps",
    text: "Reuse protection policies across applications and investigate traffic from one workspace. Keep inspection on your infrastructure while retaining control of rules and deployment.",
  },
];
const faq = [
  [
    "What is Aegis WAF?",
    "Aegis WAF is NextGridIT’s open-source web application firewall and reverse proxy for HTTP(S) applications. It brings application-specific security policies, TLS certificates, and traffic investigation into one self-hosted dashboard. Its source repository is nextgridit-team/Aegis-WAF on GitHub.",
  ],
  [
    "How does Aegis WAF differ from a reverse proxy?",
    "A reverse proxy routes incoming requests to your applications. Aegis WAF also checks requests against configured security policies using Coraza and OWASP Core Rule Set signatures. You decide which policies apply to each application and whether custom policies observe or block matching traffic.",
  ],
  [
    "Is Aegis WAF free to use?",
    "Aegis WAF application code is available under the MIT license. You supply and operate the hosting infrastructure; dependencies retain their own licenses. NextGridIT can separately help you plan and configure a deployment.",
  ],
  [
    "Can I protect both websites and APIs?",
    "Yes. Aegis WAF supports HTTP(S) upstreams with Website, API, and SSE/streaming endpoint modes. API and SSE modes use JSON denials without browser CAPTCHA. Inspection is bounded, and WebSocket frames and binary gRPC bodies are outside body-inspection coverage.",
  ],
  [
    "Do I need an AI agent to use Aegis WAF?",
    "No. The firewall runs without an AI model. Optional MCP access lets an external agent investigate telemetry and prepare policy changes. Scoped permissions and an offline impact simulation are required before live protection changes.",
  ],
  [
    "What should I evaluate before deployment?",
    "Start with one representative application and test legitimate traffic, rule matches, and performance in your environment. The project is under active development; administrator MFA and automatic access/audit-log retention are not yet implemented. A WAF complements application updates and upstream network protection. Review the linked deployment guide, security model, and current limitations as part of your evaluation.",
  ],
];
export default function AegisWafPage() {
  return (
    <div className="aegis-page">
      <JsonLd
        id="aegis-breadcrumb-schema"
        data={createBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Aegis WAF", path: "/aegis/WAF/" },
        ])}
      />
      <JsonLd
        id="aegis-software-schema"
        data={{
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "Aegis WAF",
          description,
          url: "https://www.nextgridit.com/aegis/WAF/",
          sameAs: repo,
          applicationCategory: "SecurityApplication",
          operatingSystem: "Linux",
          license: `${repo}/blob/main/LICENSE`,
          author: {
            "@type": "Organization",
            name: "nextgridit-team",
            url: "https://github.com/nextgridit-team",
          },
          image: "https://www.nextgridit.com/aegis/social.png",
        }}
      />
      <section className="aegis-hero">
        <div className="site-shell">
          <div className="aegis-product-line">
            <span className="aegis-wordmark">
              <IconShieldCheck size={30} aria-hidden="true" />
              Aegis<span>WAF</span>
            </span>
            <span className="aegis-byline">Open source from NextGridIT</span>
          </div>
          <div className="aegis-hero-grid">
            <div>
              <p className="aegis-kicker">
                Self-hosted web application firewall
              </p>
              <h1>
                Aegis WAF.
                <br />
                <span>Your apps.
                <br />Your control.</span>
              </h1>
            </div>
            <div className="aegis-hero-copy">
              <p>
                An open-source web application firewall for the websites and
                APIs you run. Decide what reaches each application, understand
                why requests are blocked, and manage HTTPS from one dashboard.
                Hosted on your infrastructure.
              </p>
              <div className="aegis-actions">
                <a href={repo} className="aegis-primary">
                  <IconBrandGithub size={20} aria-hidden="true" />
                  Explore on GitHub
                  <IconArrowUpRight size={18} aria-hidden="true" />
                </a>
                <a href="#get-started" className="aegis-secondary">
                  Get started
                  <IconArrowRight size={18} aria-hidden="true" />
                </a>
              </div>
              <ul className="aegis-facts" aria-label="Project facts">
                <li>MIT licensed</li>
                <li>Coraza + OWASP CRS</li>
                <li>Docker + PostgreSQL</li>
              </ul>
            </div>
          </div>
          <AegisShowcase />
        </div>
      </section>
      <nav
        className="aegis-section-nav site-shell"
        aria-label="On this product page"
      >
        <a href="#use-cases">Who it’s for</a>
        <a href="#how-it-works">How it works</a>
        <a href="#capabilities">Capabilities</a>
        <a href="#agent-access">Agent access</a>
        <a href="#get-started">Evaluate Aegis WAF</a>
      </nav>
      <section className="aegis-section site-shell" id="use-cases">
        <div className="aegis-section-heading">
          <div>
            <p className="aegis-kicker">Who Aegis WAF is for</p>
            <h2>A self-hosted WAF for the services you run.</h2>
          </div>
          <p>
            When you operate the application, you need a way to understand and
            control the requests reaching it. Aegis WAF gives developers and IT
            teams a shared place to manage that work.
          </p>
        </div>
        <div className="aegis-feature-grid aegis-use-cases">
          {useCases.map(({ title, text }) => (
            <article key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="aegis-section site-shell" id="how-it-works">
        <div className="aegis-section-heading">
          <div>
            <p className="aegis-kicker">Inside your environment</p>
            <h2>
              A clear path between
              <br />
              the internet and your app.
            </h2>
          </div>
          <p>
            Aegis WAF sits in front of your HTTP(S) applications. It terminates TLS,
            applies the protection you configure, and forwards accepted traffic
            to the appropriate upstream.
          </p>
        </div>
        <figure className="aegis-flow-figure">
          <picture>
            <source
              media="(max-width: 639px)"
              srcSet="/aegis/request-path-mobile.svg"
              width="600"
              height="1040"
            />
            <img
              src="/aegis/request-path.svg"
              width="1200"
              height="540"
              alt="Clients connect to Aegis WAF for TLS and configured policy checks; accepted requests reach your application, while blocked requests stop at the gateway. PostgreSQL stores configuration and persistent state, with management separate from public traffic."
              loading="lazy"
            />
          </picture>
          <figcaption>
            Original architecture illustration based on the shipped deployment.{" "}
            <a href={`${docs}/architecture.md`}>
              Read the architecture
              <IconArrowUpRight size={15} aria-hidden="true" />
            </a>
          </figcaption>
        </figure>
        <div className="aegis-architecture-notes">
          <p>
            <IconLock size={20} aria-hidden="true" />
            <span>
              <strong>Separate management access</strong>Dashboard and API
              access stay apart from public application traffic.
            </span>
          </p>
          <p>
            <IconServer size={20} aria-hidden="true" />
            <span>
              <strong>A small default footprint</strong>Aegis WAF and PostgreSQL.
              Redis/Dragonfly is optional for shared rate budgets.
            </span>
          </p>
        </div>
      </section>
      <section className="aegis-capabilities" id="capabilities">
        <div className="site-shell">
          <div className="aegis-section-heading">
            <div>
              <p className="aegis-kicker">
                Built for the work of running applications
              </p>
              <h2>
                Application security
                <br />
                you can work with.
              </h2>
            </div>
            <p>
              A useful WAF helps you answer everyday questions: which rule
              matched, which application is affected, and what should change?
            </p>
          </div>
          <div className="aegis-feature-grid">
            {features.map(({ icon: Icon, title, text, href }) => (
              <article key={title}>
                <Icon size={26} stroke={1.5} aria-hidden="true" />
                <h3>{title}</h3>
                <p>{text}</p>
                <a href={`${docs}/${href}`}>
                  Read the guide
                  <IconArrowUpRight size={16} aria-hidden="true" />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section
        className="aegis-section site-shell aegis-agent"
        id="agent-access"
      >
        <div>
          <p className="aegis-kicker">Optional MCP integration</p>
          <h2>
            Your agent.
            <br />
            <span>Your boundaries.</span>
          </h2>
          <p>
            Let your own agent investigate telemetry and prepare changes. Aegis WAF
            keeps access scoped and requires an offline impact simulation before
            live protection changes.
          </p>
          <p className="aegis-muted">
            No built-in model. No inference dependency in the request path. You
            choose the external agent and its approval process.
          </p>
          <a className="text-link" href={`${docs}/agent-access.md`}>
            Explore agent access
            <IconArrowUpRight size={18} aria-hidden="true" />
          </a>
        </div>
        <figure className="aegis-agent-figure">
          <ol>
            {[
              ["Read", "Scoped access to permitted telemetry and operations."],
              ["Draft", "Proposed rules begin as disabled drafts."],
              [
                "Simulate",
                "Test the exact change against evidence and test cases.",
              ],
              [
                "Enforce",
                "An explicitly permitted key and a fresh simulation receipt are required.",
              ],
            ].map(([title, detail], index) => (
              <li key={title}>
                <span aria-hidden="true">0{index + 1}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{detail}</p>
                </div>
                {index < 3 && <IconArrowRight size={18} aria-hidden="true" />}
              </li>
            ))}
          </ol>
          <figcaption>
            Illustrated management workflow. Simulation results depend on the
            supplied evidence and tests; they do not guarantee safe policy
            changes.
          </figcaption>
        </figure>
      </section>
      <section
        className="aegis-section site-shell aegis-start"
        id="get-started"
      >
        <div>
          <p className="aegis-kicker">Find your fit</p>
          <h2>Start with one application.</h2>
          <p>
            Evaluate Aegis WAF against traffic you understand. Choose a
            representative website or API, connect it in a test environment,
            and use a custom policy in Observe to review matches before
            enabling blocking.
          </p>
          <p>
            The standard deployment uses Docker on Linux/amd64 with PostgreSQL.
            The repository has the current installation steps and operating
            requirements.
          </p>
          <a href={`${repo}#quickstart`} className="text-link">
            Install Aegis WAF
            <IconArrowUpRight size={18} aria-hidden="true" />
          </a>
        </div>
        <div className="aegis-evaluation">
          <h3>Make the decision with your own workload.</h3>
          <p>
            Check normal user journeys, API clients, and rule matches. Measure
            latency with the policies and inspection settings you intend to use.
            Published benchmarks provide a starting point for your evaluation.
          </p>
          <div className="aegis-evaluation-links">
            <a href={`${docs}/benchmarks.md`} className="text-link">Review performance measurements <IconArrowUpRight size={17} aria-hidden="true" /></a>
            <a href={`${docs}/deployment.md`} className="text-link">Plan your deployment <IconArrowUpRight size={17} aria-hidden="true" /></a>
            <a href={`${docs}/security.md`} className="text-link">Understand the security model <IconArrowUpRight size={17} aria-hidden="true" /></a>
            <a href={`${docs}/limitations.md`} className="text-link">Check current limitations <IconArrowUpRight size={17} aria-hidden="true" /></a>
          </div>
        </div>
      </section>
      <section className="aegis-section site-shell aegis-faq">
        <div>
          <p className="aegis-kicker">Before you deploy</p>
          <h2>Aegis WAF questions, answered.</h2>
        </div>
        <div>
          {faq.map(([question, answer]) => (
            <details key={question}>
              <summary>{question}</summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </section>
      <section className="aegis-final">
        <div className="site-shell">
          <IconShieldCheck size={42} stroke={1.5} aria-hidden="true" />
          <h2>
            Put Aegis WAF in front
            <br />
            of your applications.
          </h2>
          <p>
            Try the open-source project on your own, or talk with NextGridIT
            about application fit, network placement, and policy tuning.
          </p>
          <div className="aegis-actions">
            <a href={repo} className="aegis-primary">
              <IconBrandGithub size={19} aria-hidden="true" />
              Explore on GitHub
              <IconArrowUpRight size={18} aria-hidden="true" />
            </a>
            <Link href="/contact/" className="aegis-secondary">
              Discuss deployment help
              <IconArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
          <a href={`${repo}/issues`} className="aegis-issues">
            Questions or feature ideas? Open an issue on GitHub.
            <IconArrowUpRight size={15} aria-hidden="true" />
          </a>
        </div>
      </section>
    </div>
  );
}
