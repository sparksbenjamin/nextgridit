import { IconArrowRight, IconCheck } from "@tabler/icons-react";
import Link from "next/link";
import { sampleFinding } from "@/lib/sample-finding";

/**
 * Proof artifact: an illustrative, sanitized assessment finding rendered as a
 * report card, paired with a link into the security services. Shows the
 * deliverable instead of describing it.
 */
export function SampleFindingSection() {
  const finding = sampleFinding;
  return (
    <section
      className="studio-section site-shell"
      id="what-a-finding-looks-like"
      aria-labelledby="sample-finding-heading"
    >
      <div className="studio-section-heading" data-reveal>
        <div>
          <p className="eyebrow">Security assessments</p>
          <h2 id="sample-finding-heading">What a finding looks like.</h2>
        </div>
        <p>
          Every finding comes with where it is, what it means for your
          business, and the fix — written so your team can act on it, not
          decode it.
        </p>
      </div>
      <div className="finding-card" data-reveal>
        <div className="finding-topline">
          <span className="finding-id">{finding.id}</span>
          <span className="finding-status">
            <IconCheck size={15} aria-hidden="true" />
            {finding.status}
          </span>
        </div>
        <div className="finding-title-row">
          <span className="finding-severity">{finding.severity}</span>
          <h3>{finding.title}</h3>
        </div>
        <dl className="finding-meta">
          {finding.meta.map((item) => (
            <div key={item.label}>
              <dt>{item.label}</dt>
              <dd>{item.value}</dd>
            </div>
          ))}
        </dl>
        <div className="finding-body">
          <p>
            <strong>What it means.</strong> {finding.impact}
          </p>
          <p>
            <strong>How it was confirmed.</strong> {finding.confirmed}
          </p>
          <p>
            <strong>The fix.</strong> {finding.fix}
          </p>
        </div>
        <p className="finding-caption">{finding.caption}</p>
      </div>
      <Link
        className="text-link studio-all-services"
        href="/services/security-audits-pentesting/"
      >
        Security assessment services
        <IconArrowRight />
      </Link>
    </section>
  );
}
