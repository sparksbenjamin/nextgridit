import {
  acknowledgments,
  marqueeStripCount,
} from "@/lib/acknowledgments";

/**
 * Acknowledgment wall: a dark full-width band that lists companies the
 * consultant has reported vulnerabilities to and been acknowledged by.
 * Renders nothing while the acknowledgment list is empty — the band only
 * appears once there is something real and publicly verifiable to show.
 *
 * Accessibility follows the reference pattern: only the first logo strip
 * carries alt text; the seamless-loop duplicates are aria-hidden so each
 * company is announced exactly once. The marquee stops under
 * prefers-reduced-motion and degrades to a static logo row.
 */
export function AcknowledgmentWall() {
  if (acknowledgments.length === 0) return null;
  const strips = marqueeStripCount(acknowledgments.length);
  return (
    <section className="studio-ack-band" aria-labelledby="acknowledgment-heading">
      <div className="site-shell studio-ack-inner">
        <p className="eyebrow">Responsible disclosure</p>
        <h2 id="acknowledgment-heading">
          Reported to these companies, and acknowledged for it.
        </h2>
        <p className="studio-ack-lede">
          Credits from public vulnerability disclosure programs — each company
          publishes its own acknowledgment list.
        </p>
        <div
          className="ack-marquee"
          aria-label="Companies that have acknowledged vulnerability reports"
        >
          <ul className="ack-marquee-track">
            {Array.from({ length: strips }, (_, stripIndex) => (
              <li
                key={stripIndex}
                aria-hidden={stripIndex === 0 ? undefined : "true"}
              >
                {acknowledgments.map((entry) =>
                  stripIndex === 0 && entry.reference ? (
                    <a
                      key={entry.company}
                      href={entry.reference}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={entry.logo}
                        alt={entry.company}
                        width={entry.logoWidth}
                        height={entry.logoHeight}
                        loading="lazy"
                      />
                    </a>
                  ) : (
                    // eslint-disable-next-line @next/next/no-img-element -- fixed-size monochrome wordmarks with explicit dimensions; no loader needed
                    <img
                      key={entry.company}
                      src={entry.logo}
                      alt={stripIndex === 0 ? entry.company : ""}
                      width={entry.logoWidth}
                      height={entry.logoHeight}
                      loading="lazy"
                    />
                  ),
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
