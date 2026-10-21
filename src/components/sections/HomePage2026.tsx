import Link from "next/link";
import {
  IconArrowRight,
  IconArrowUpRight,
  IconCheck,
  IconMapPin,
} from "@tabler/icons-react";
import { BookingLink } from "@/components/content/BookingLink";
import { NetworkGlobe } from "@/components/sections/NetworkGlobe";
import { ProjectCTA } from "@/components/content/ProjectCTA";
import { ServiceFinder } from "@/components/sections/ServiceFinder";
import { getAllGuides } from "@/lib/guides";
import { caseStudies } from "@/lib/site-data";

export function HomePage2026() {
  const study = caseStudies[0];
  const guides = getAllGuides().slice(0, 2);
  return (
    <div className="studio-home">
      <section className="connected-hero">
        <div className="site-shell connected-hero-layout">
          <div className="studio-hero-copy">
            <p className="eyebrow">Independent IT consulting · Seneca, SC</p>
            <h1>
              Make your IT
              <br />
              <span>work together.</span>
            </h1>
            <p className="studio-hero-description">
              From the cable in the wall to the systems in the cloud. Networks,
              Microsoft 365, and security that fit your business—with a clear
              plan and ownership that stays with you.
            </p>
            <div className="studio-hero-actions">
              <BookingLink />
              <a href="#find-your-fit" className="text-link">
                Find your next step
                <IconArrowRight size={18} aria-hidden="true" />
              </a>
            </div>
            <p className="studio-location">
              <IconMapPin size={15} aria-hidden="true" />
              Based in Seneca. Working across the Upstate and beyond.
            </p>
          </div>
          <NetworkGlobe />
        </div>
        <div className="connected-service-strip site-shell">
          <Link href="/services/network-wifi/">
            <span>01</span> Networks & cabling{" "}
            <IconArrowUpRight size={20} aria-hidden="true" />
          </Link>
          <Link href="/services/microsoft-365/">
            <span>02</span> Microsoft 365 & cloud{" "}
            <IconArrowUpRight size={20} aria-hidden="true" />
          </Link>
          <Link href="/services/">
            <span>03</span> Security & ownership{" "}
            <IconArrowUpRight size={20} aria-hidden="true" />
          </Link>
        </div>
      </section>

      <div
        className="studio-credentials site-shell"
        aria-label="Professional experience"
      >
        <p>
          Independent advice.
          <br />
          <strong>Hands-on delivery.</strong>
        </p>
        <div>
          <strong>
            20<span>+</span>
          </strong>
          <span>years of professional IT experience</span>
        </div>
        <div>
          <strong>
            100<span>+</span>
          </strong>
          <span>medical offices assessed</span>
        </div>
        <Link href="/about/" className="text-link">
          Meet your technical partner
          <IconArrowRight size={18} aria-hidden="true" />
        </Link>
      </div>

      <section className="studio-section site-shell" id="find-your-fit">
        <div className="studio-section-heading" data-reveal>
          <div>
            <p className="eyebrow">Start with what is getting in your way</p>
            <h2>
              What needs to
              <br />
              work better?
            </h2>
          </div>
          <p>
            Whether you need a stronger network, a clearer view of your
            security, or a fresh start with your IT, there is a practical way
            forward.
          </p>
        </div>
        <ServiceFinder />
        <Link href="/services/" className="text-link studio-all-services">
          Explore all services
          <IconArrowRight size={18} aria-hidden="true" />
        </Link>
      </section>

      <section className="studio-case">
        <div className="site-shell" data-reveal>
          <div className="studio-case-intro">
            <p className="eyebrow">Selected work · IT provider transition</p>
            <span>Sanitized client example</span>
          </div>
          <div className="studio-case-grid">
            <div>
              <h2>
                A fresh start.
                <br />
                <span className="connected-highlight">
                  With the keys included.
                </span>
              </h2>
              <p>{study.challenge}</p>
              <Link className="text-link" href={`/case-studies/#${study.slug}`}>
                Read the project story
                <IconArrowRight size={19} aria-hidden="true" />
              </Link>
            </div>
            <div
              className="handoff-illustration"
              aria-label="A documented handoff includes access, systems knowledge, and usable records."
            >
              <div className="handoff-topline">
                <span>THE HANDOFF</span>
                <IconArrowUpRight size={20} aria-hidden="true" />
              </div>
              <div className="handoff-mark" aria-hidden="true">
                N<span>↗</span>
              </div>
              <div className="handoff-record">
                <IconCheck size={20} aria-hidden="true" />
                <span>Access & ownership</span>
              </div>
              <div className="handoff-record">
                <IconCheck size={20} aria-hidden="true" />
                <span>Systems & knowledge</span>
              </div>
              <div className="handoff-record">
                <IconCheck size={20} aria-hidden="true" />
                <span>Documentation & next steps</span>
              </div>
              <p>A finish your team can build on.</p>
            </div>
          </div>
          <div className="studio-case-outcomes">
            {study.outcomes.map((outcome, index) => (
              <div key={outcome}>
                <span>0{index + 1}</span>
                <p>{outcome}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="studio-section site-shell studio-person" data-reveal>
        <div className="studio-person-intro">
          <p className="eyebrow">Experienced. Independent. Accountable.</p>
          <h2>
            The whole environment.
            <br />
            One technical partner.
          </h2>
          <p>
            Infrastructure, security, cloud, and operations rarely stay in their
            own lanes. Work with someone who understands how the pieces fit
            together.
          </p>
          <Link href="/about/" className="text-link">
            More about Benjamin
            <IconArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>
        <div className="consultant-card">
          <div className="consultant-card-top">
            <span className="consultant-monogram" aria-hidden="true">
              bs.
            </span>
            <span>
              Independent expertise.
              <br />
              Local understanding.
            </span>
          </div>
          <h3>Benjamin Sparks</h3>
          <p>IT consultant & senior security analyst</p>
          <p className="consultant-note">
            More than 20 years of professional experience across infrastructure,
            security, and compliance-aware operations.
          </p>
          <div className="consultant-card-links">
            <Link href="/about/">
              Experience & approach
              <IconArrowUpRight size={17} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section className="studio-process-band">
        <div className="site-shell studio-process-layout" data-reveal>
          <div>
            <p className="eyebrow">A clear finish line</p>
            <h2>
              Built properly.
              <br />
              Handed over completely.
            </h2>
            <Link href="/process/" className="text-link">
              How projects work
              <IconArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
          <ol className="studio-process-list">
            {[
              [
                "Understand",
                "Start with your environment, the problem, and what a useful result looks like.",
              ],
              [
                "Make a plan",
                "Agree on a clear scope, priorities, and deliverables before work begins.",
              ],
              [
                "Do the work",
                "Implement, test, and document with the handoff built into the project.",
              ],
              [
                "Hand it over",
                "Leave with verified access, usable records, and a clear way forward.",
              ],
            ].map(([title, description], index) => (
              <li key={title}>
                <span>0{index + 1}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="studio-section site-shell">
        <div className="studio-section-heading" data-reveal>
          <div>
            <p className="eyebrow">Practical advice for business owners</p>
            <h2>A clearer view of your IT.</h2>
          </div>
          <Link className="text-link" href="/guides/">
            All guides
            <IconArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>
        <div className="studio-notes-grid">
          {guides.map((guide) => (
            <Link
              className="studio-note"
              href={`/guides/${guide.slug}/`}
              key={guide.slug}
            >
              <div>
                <span>{guide.readingTimeMinutes} min read</span>
                <IconArrowUpRight size={24} aria-hidden="true" />
              </div>
              <h3>{guide.title}</h3>
              <p>{guide.summary}</p>
              <span className="text-link">
                Read the guide
                <IconArrowRight size={17} aria-hidden="true" />
              </span>
            </Link>
          ))}
        </div>
      </section>
      <div className="site-shell">
        <ProjectCTA
          title="What is getting in your way?"
          description="Tell us about your environment and what needs to work better. Start with a conversation about your project, the fit, and a practical next step."
        />
      </div>
    </div>
  );
}
