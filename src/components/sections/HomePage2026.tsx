import Link from "next/link"
import { caseStudies } from "@/lib/site-data"

const pillars = [
  {
    number: "01 / OWNERSHIP",
    title: "Take back control from your MSP.",
    description:
      "Transition planning, vendor independence, credential recovery, and documentation that leaves your organization in charge.",
    href: "/services/msp-transition/",
    tone: "green",
  },
  {
    number: "02 / SECURITY",
    title: "Know what is actually at risk.",
    description:
      "HIPAA assessments, vulnerability reviews, and remediation plans prioritized around real business impact.",
    href: "/services/hipaa-security-assessment/",
    tone: "sage",
  },
  {
    number: "03 / INFRASTRUCTURE",
    title: "Build systems people can rely on.",
    description:
      "Cloud, hybrid, network, Wi-Fi, and local-first infrastructure designed for visibility, resilience, and growth.",
    href: "/services/network-wifi/",
    tone: "blue",
  },
] as const

const processSteps = [
  ["01", "Understand", "We start with the environment, the business pressure, and what ownership needs to look like."],
  ["02", "Prioritize", "We identify the highest-impact risks and define a practical sequence of work."],
  ["03", "Execute", "We implement, clean up, recover, or transition with the right documentation as we go."],
  ["04", "Hand off", "You receive a clearer environment, a usable record, and control that stays with you."],
] as const

export function HomePage2026() {
  const featuredCase = caseStudies[0]

  return (
    <div className="home-2026">
      <section className="home-hero">
        <div className="home-shell home-hero-grid">
          <div className="home-hero-copy">
            <div className="home-kicker"><span /> IT that shows up</div>
            <h1>Make your IT a <em>business advantage.</em></h1>
            <p className="home-lede">
              NextGridIT helps Upstate South Carolina organizations take control of the systems they depend on—through better infrastructure, stronger security, and clear ownership.
            </p>
            <div className="home-actions">
              <Link className="home-button home-button-dark" href="/contact/">Book a project conversation</Link>
              <Link className="home-text-link" href="#home-services">Explore how we help <span>↗</span></Link>
            </div>
          </div>

          <div className="home-hero-art" aria-label="Abstract illustration of connected infrastructure">
            <span className="home-art-label">Ownership / Visibility / Resilience</span>
            <div className="home-orb" />
            <div className="home-art-note"><strong>01—03</strong><small>Secure systems. Clear handoff. No lock-in.</small></div>
          </div>
        </div>
      </section>

      <section className="home-proof" aria-label="NextGridIT experience">
        <div className="home-shell home-proof-grid">
          <div className="home-proof-lead"><strong>Built on real experience.</strong>Practical work for organizations that need a partner who can see the whole environment.</div>
          <div className="home-stat"><b>20+</b><span>Years in IT</span></div>
          <div className="home-stat"><b>100+</b><span>Certifications</span></div>
          <div className="home-stat"><b>100+</b><span>Medical offices assessed</span></div>
        </div>
      </section>

      <section className="home-section" id="home-services">
        <div className="home-shell">
          <div className="home-section-head">
            <div><div className="home-eyebrow">What we solve</div><h2>The work that makes ownership possible.</h2></div>
            <p>Focused engagements for organizations dealing with inherited complexity, vendor dependency, or security gaps.</p>
          </div>
          <div className="home-pillars">
            {pillars.map((pillar) => (
              <Link key={pillar.number} className={`home-pillar home-pillar-${pillar.tone}`} href={pillar.href}>
                <div><span className="home-number">{pillar.number}</span><h3>{pillar.title}</h3><p>{pillar.description}</p></div><span className="home-arrow">↗</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="home-ownership">
        <div className="home-shell home-ownership-grid">
          <div>
            <div className="home-eyebrow">A different kind of IT partner</div>
            <h2>You should never be a guest in your own environment.</h2>
            <p>We do the work, document the work, and hand ownership back in a form your team can actually use. No mystery access. No dependency theater. No report that sits on a shelf.</p>
            <Link className="home-button home-button-green" href="/project-fit/">See if we&apos;re a fit</Link>
          </div>
          <div className="home-review-panel">
            <header><span>NextGridIT / Ownership review</span><span>Seneca, SC</span></header>
            {["Identity & access|Documented / controlled", "Infrastructure|Mapped / prioritized", "Security posture|Measured / actionable", "Handoff|Clear / complete"].map((row) => {
              const [label, value] = row.split("|")
              return <div className="home-review-row" key={label}><strong>{label}</strong><span>{value}</span></div>
            })}
          </div>
        </div>
      </section>

      <section className="home-section">
        <div className="home-shell">
          <div className="home-section-head">
            <div><div className="home-eyebrow">Proof, not posturing</div><h2>Recent work with a clear finish line.</h2></div>
            <p>Sanitized examples of the problems we help organizations solve—and what better looked like afterward.</p>
          </div>
          <article className="home-case">
            <div className="home-case-aside"><b>01</b><p>MSP transition / vendor independence</p></div>
            <div className="home-case-main">
              <h3>From “our provider manages it” to “we own it.”</h3>
              <p>{featuredCase.approach}</p>
              <div className="home-outcomes">{featuredCase.outcomes.map((outcome) => <span key={outcome}><i />{outcome}</span>)}</div>
              <Link className="home-text-link" href="/case-studies/msp-transition/">Read the case study <span>↗</span></Link>
            </div>
          </article>
        </div>
      </section>

      <section className="home-process" id="home-process">
        <div className="home-shell home-section">
          <div className="home-section-head">
            <div><div className="home-eyebrow">How it works</div><h2>A project should get clearer as it moves.</h2></div>
            <p>Every engagement is scoped around the next useful decision—not a generic package.</p>
          </div>
          <div className="home-process-grid">{processSteps.map(([number, title, copy]) => <div className="home-step" key={number}><b>{number}</b><h3>{title}</h3><p>{copy}</p></div>)}</div>
        </div>
      </section>

      <section className="home-cta" id="home-contact">
        <div className="home-shell home-cta-grid">
          <div><div className="home-eyebrow">Start with the real problem</div><h2>Let&apos;s make your next IT decision a confident one.</h2></div>
          <div><p>Tell us what is not working, what you need to own, or what you are preparing for.</p><Link className="home-button home-button-dark" href="/contact/">Start a conversation ↗</Link></div>
        </div>
      </section>
    </div>
  )
}
