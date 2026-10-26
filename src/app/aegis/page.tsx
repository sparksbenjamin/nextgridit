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
  IconTerminal2,
  IconLock,
} from "@tabler/icons-react";
import { JsonLd } from "@/components/content/JsonLd";
import {
  AegisQuickstart,
  AegisShowcase,
} from "@/components/sections/AegisShowcase";
import { createBreadcrumbSchema, createMetadata } from "@/lib/seo";
import "./aegis.css";

const repo = "https://github.com/nextgridit-team/Aegis-WAF";
const docs = `${repo}/blob/main/docs`;
const description =
  "Meet Aegis, an open-source, self-hosted web application firewall and reverse proxy with Coraza, OWASP CRS, automatic TLS, traffic visibility, and scoped agent access.";
const base = createMetadata({
  title: "Aegis — Self-Hosted Web Application Firewall",
  description,
  path: "/aegis/",
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
        alt: "Aegis: self-hosted application protection by NextGridIT",
      },
    ],
  },
  twitter: { ...base.twitter, images: ["/aegis/social.png"] },
};
const features = [
  {
    icon: IconShieldCheck,
    title: "Protection per application",
    text: "Combine Coraza and OWASP CRS signatures with custom rules, reusable policies, and targeted exclusions.",
    href: "managed-signatures.md",
  },
  {
    icon: IconCertificate,
    title: "TLS without the separate workflow",
    text: "Issue and renew ACME certificates through HTTP-01 or Cloudflare DNS-01. Import existing PEM certificates when needed.",
    href: "certificates.md",
  },
  {
    icon: IconAdjustments,
    title: "Tuning you can understand",
    text: "Start custom policies in Observe. Choose a sensitivity level, curate detection sets, and review pinned source updates.",
    href: "managed-signatures.md#sensitivity-and-curated-sets",
  },
  {
    icon: IconActivity,
    title: "Visibility beyond a block count",
    text: "Investigate recorded requests and matched rules. Add alerts, structured JSON events, and authenticated Prometheus metrics.",
    href: "observability.md",
  },
  {
    icon: IconServer,
    title: "Your infrastructure, your deployment",
    text: "One application container plus PostgreSQL by default. Keep inspection within your environment and configuration under your control.",
    href: "deployment.md",
  },
  {
    icon: IconTerminal2,
    title: "Bring your own agent",
    text: "Connect an external agent over optional MCP. Use scoped keys, disabled drafts, and required impact simulation before live protection changes.",
    href: "agent-access.md",
  },
];
const faq = [
  [
    "Is Aegis free to use?",
    "Aegis application code is open source under the MIT license. You provide the infrastructure and operate the deployment. Dependencies retain their own licenses.",
  ],
  [
    "What do I need to run it?",
    "The documented quickstart uses Linux/amd64, Docker with Compose v2+, Git, Python 3, and ports 80/443 available for the default mappings. The standard deployment runs Aegis plus PostgreSQL.",
  ],
  [
    "Does Aegis include an AI model?",
    "No. Agent integration is optional and disabled by default. Your agent and model run outside Aegis. Scoped MCP keys govern access; protection changes require the permitted key and a fresh offline impact simulation receipt.",
  ],
  [
    "Does it replace updates or upstream DDoS protection?",
    "No. WAF signatures and community mitigations supplement application maintenance. Inspection has documented size and protocol limits, and network-layer DDoS protection belongs in your surrounding infrastructure.",
  ],
  [
    "Can NextGridIT help with deployment?",
    "Yes. If you need help assessing fit, planning network placement, configuring certificates, or tuning policies for your applications, contact NextGridIT to discuss a scoped project.",
  ],
];
export default function AegisPage() {
  return (
    <div className="aegis-page">
      <JsonLd
        id="aegis-breadcrumb-schema"
        data={createBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Aegis WAF", path: "/aegis/" },
        ])}
      />
      <JsonLd
        id="aegis-software-schema"
        data={{
          "@context": "https://schema.org",
          "@type": "SoftwareSourceCode",
          name: "Aegis WAF",
          description,
          url: "https://www.nextgridit.com/aegis/",
          codeRepository: repo,
          license: `${repo}/blob/main/LICENSE`,
          programmingLanguage: ["Go", "TypeScript"],
          runtimePlatform: "Docker on Linux/amd64",
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
                Protect the apps
                <br />
                <span>you host.</span>
              </h1>
            </div>
            <div className="aegis-hero-copy">
              <p>
                Application protection, automatic TLS, and a clear view of your
                traffic. One gateway. On infrastructure you control.
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
        <a href="#how-it-works">How it works</a>
        <a href="#capabilities">Capabilities</a>
        <a href="#agent-access">Agent access</a>
        <a href="#performance">Performance</a>
        <a href="#get-started">Get started</a>
      </nav>
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
            Aegis sits in front of your HTTP(S) applications. It terminates TLS,
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
              alt="Clients connect to Aegis for TLS and configured policy checks; accepted requests reach your application, while blocked requests stop at the gateway. PostgreSQL stores configuration and persistent state, with management separate from public traffic."
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
              <strong>A small default footprint</strong>Aegis and PostgreSQL.
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
                Protection is only useful
                <br />
                when you can operate it.
              </h2>
            </div>
            <p>
              Manage the request path, certificates, policy decisions, and
              investigations from a browser-based workspace.
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
            Let your own agent investigate telemetry and prepare changes. Aegis
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
      <section className="aegis-performance" id="performance">
        <div className="site-shell aegis-performance-layout">
          <div>
            <p className="aegis-kicker">Published measurements, with context</p>
            <h2>
              See the numbers.
              <br />
              Read the workload.
            </h2>
            <p>
              The repository publishes its benchmark methodology and raw
              results. In the October 25 small-request lab run, the bundled CRS
              baseline added approximately <strong>0.45 ms</strong> to mean
              latency over the direct upstream.
            </p>
            <a href={`${docs}/benchmarks.md`} className="text-link">
              Methodology & raw reports
              <IconArrowUpRight size={18} aria-hidden="true" />
            </a>
          </div>
          <figure className="aegis-benchmark">
            <figcaption>Mean request latency · milliseconds</figcaption>
            {[
              ["Direct upstream", "1.025", "68%"],
              ["Aegis · no rules", "1.218", "81%"],
              ["Aegis · CRS baseline", "1.471", "98%"],
            ].map(([label, value, width]) => (
              <div className="aegis-benchmark-row" key={label}>
                <div>
                  <span>{label}</span>
                  <strong>
                    {value} <small>ms</small>
                  </strong>
                </div>
                <span className="aegis-benchmark-track">
                  <span style={{ width }} />
                </span>
              </div>
            ))}
            <p>Published lab reference · October 25, 2026</p>
            <a href={`${docs}/benchmarks/platform-hardening-20261025.json`}>
              View source data
              <IconArrowUpRight size={15} aria-hidden="true" />
            </a>
          </figure>
        </div>
        <p className="aegis-benchmark-context site-shell">
          Single Docker host, Ryzen 9 7950X3D, 64,000 small HTTP/1.1 keep-alive
          GETs per phase, 16 client threads. Logging and instrumentation on;
          evidence capture, response inspection, and bot/flood controls off. CRS
          Block mode, PL1, threshold 5. These are published workload-specific
          results, not production capacity or a new independent benchmark.
        </p>
      </section>
      <section
        className="aegis-section site-shell aegis-start"
        id="get-started"
      >
        <div>
          <p className="aegis-kicker">Run it on your infrastructure</p>
          <h2>
            From repository
            <br />
            to your first application.
          </h2>
          <p>
            Start with a Linux/amd64 Docker host, Compose v2+, Git, and Python
            3. The default public mappings need ports 80 and 443 available.
          </p>
          <ol className="aegis-start-steps">
            <li>Start the containers and open the local dashboard.</li>
            <li>Create your administrator using the generated setup code.</li>
            <li>
              Add a certificate, connect your upstream, and assign a policy.
            </li>
          </ol>
          <a href={`${repo}#quickstart`} className="text-link">
            Follow the complete quickstart
            <IconArrowUpRight size={18} aria-hidden="true" />
          </a>
        </div>
        <div>
          <AegisQuickstart />
          <p className="aegis-setup-note">
            Dashboard: <code>http://localhost:9090</code> on the Docker host. No
            default credentials. Use the deployment guide for remote HTTPS
            management and backups.
          </p>
          <a href={`${docs}/deployment.md`} className="text-link">
            Deployment guide
            <IconArrowUpRight size={18} aria-hidden="true" />
          </a>
        </div>
      </section>
      <section className="aegis-boundaries site-shell">
        <div>
          <p className="aegis-kicker">
            A practical fit starts with clear limits
          </p>
          <h2>
            Know what sits
            <br />
            inside the boundary.
          </h2>
        </div>
        <div>
          <p>
            Aegis is under active development. Request inspection is bounded;
            response inspection is optional. WebSocket frames and binary gRPC
            bodies are not inspected. It complements application updates and
            surrounding network protections.
          </p>
          <p>
            Administrator MFA and automatic access/audit-log retention are not
            yet implemented. Review the security model and current limitations
            before deployment.
          </p>
          <div className="aegis-actions">
            <a href={`${docs}/limitations.md`} className="text-link">
              Current limitations
              <IconArrowUpRight size={17} aria-hidden="true" />
            </a>
            <a href={`${docs}/security.md`} className="text-link">
              Security model
              <IconArrowUpRight size={17} aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>
      <section className="aegis-section site-shell aegis-faq">
        <div>
          <p className="aegis-kicker">Before you deploy</p>
          <h2>A few useful answers.</h2>
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
            Put Aegis in front
            <br />
            of your applications.
          </h2>
          <p>
            Explore the source, read the docs, and decide how it fits your
            environment.
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
