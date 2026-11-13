/**
 * Illustrative security-assessment finding shown on the homepage.
 *
 * This is a formatting example of how assessment findings are reported —
 * where the weakness is, what it means for the business, how it was
 * confirmed, and the fix — with names and hosts redacted. It is labeled as
 * an illustrative example on the page. Swap in a real sanitized finding
 * from an engagement whenever one is available; keep the same shape.
 */
export type SampleFinding = {
  id: string;
  severity: string;
  status: string;
  title: string;
  meta: Array<{ label: string; value: string }>;
  impact: string;
  confirmed: string;
  fix: string;
  caption: string;
};

export const sampleFinding: SampleFinding = {
  id: "NG-SA-2026-014 · 02",
  severity: "High",
  status: "Verified fixed",
  title: "Password reset codes allowed unlimited guesses",
  meta: [
    { label: "Where", value: "vpn.████████.com" },
    { label: "Weakness", value: "CWE-307 · No attempt limit" },
    { label: "Confirmed", value: "Day 3 of 5 · 10:26" },
    { label: "Retested", value: "No longer reproducible" },
  ],
  impact:
    "Anyone who knows a staff email address could keep guessing reset codes until one worked — with no lockout and no alert to your team. On a network that handles patient or financial records, that is a locked front door with an open window beside it.",
  confirmed:
    "In a controlled window, several thousand attempts were possible without throttling or a security alert — using the same path an attacker would.",
  fix: "Rate-limit the endpoint, expire codes in 15 minutes, and alert on repeated failures. Retested after the change: no longer reproducible.",
  caption:
    "Illustrative finding from a security assessment. Names and hosts redacted.",
};
