/**
 * Acknowledgment wall data.
 *
 * Each entry becomes one logo in the "reported to these companies" band on
 * the homepage. Add an entry ONLY when the acknowledgment is real and
 * publicly verifiable — for example, the company's own security researcher
 * acknowledgment list, a CVE entry credited to you, or a public hall of fame.
 * Never imply these companies are clients; the wall copy says "reported to
 * and acknowledged by", which is a different claim.
 *
 * Logo files live in `public/acknowledgments/`. Use a monochrome wordmark
 * SVG (single color, `#f4f7ef`-on-transparent is ideal because the band is
 * dark green) and commit the file yourself so the license is clean. Provide
 * explicit width/height attributes so the marquee causes zero layout shift.
 *
 * The homepage section renders only when this list is non-empty, so
 * shipping with an empty list is safe: nothing shows until you add entries.
 */
export type Acknowledgment = {
  /** Company name, shown to screen readers as the logo alt text. */
  company: string;
  /** Path under /acknowledgments/, e.g. "/acknowledgments/example.svg". */
  logo: string;
  /** Intrinsic logo width in pixels (used for the width attribute). */
  logoWidth: number;
  /** Intrinsic logo height in pixels (used for the height attribute). */
  logoHeight: number;
  /** Optional public proof URL (researcher list, CVE, hall of fame). */
  reference?: string;
};

export const acknowledgments: Acknowledgment[] = [
  {
    company: "Microsoft",
    logo: "/acknowledgments/microsoft.svg",
    logoWidth: 220,
    logoHeight: 56,
    // Credited in Microsoft's own advisory data as "Ben Sparks"
    // (document.acknowledgments), verified against the CSAF record.
    reference:
      "https://msrc.microsoft.com/update-guide/vulnerability/CVE-2025-33051",
  },
];

/**
 * How many copies of the logo strip the marquee needs so one half of the
 * scrolling track is wide enough to cover a desktop viewport and the loop
 * stays seamless. Even count required: the track translates by -50%.
 */
export function marqueeStripCount(entryCount: number): number {
  if (entryCount <= 0) return 0;
  // Target ~10 logo slots per track so one half covers a wide viewport;
  // even count required: the track translates by -50%.
  const target = Math.max(2, Math.ceil(10 / entryCount));
  return target % 2 === 0 ? target : target + 1;
}
