import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Privacy Policy",
  description:
    "Review the NextGridIT privacy policy for how inquiry and project information is handled.",
  path: "/privacy/",
});

export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 py-24 min-h-[70vh]">
      <div className="max-w-3xl">
        <h1 className="theme-heading mb-6 font-mono text-4xl font-bold uppercase tracking-wider md:text-5xl">
          Privacy <span className="theme-accent">Policy</span>
        </h1>
        <div className="theme-rule mb-6 h-1 w-24" />
        <div className="theme-copy space-y-6 leading-relaxed">
          <p>
            NextGridIT collects only the information needed to respond to inquiries, discuss potential projects, and provide requested services. We do not sell or rent contact information.
          </p>
          <p>
            If you contact NextGridIT by email, phone, or through the website, we may keep your name, company name, email address, phone number, and project details so we can respond, prepare estimates, and maintain business records related to active conversations or engagements.
          </p>
          <p>
            Information shared with NextGridIT is treated as confidential business information and is not publicly disclosed. We do not publish client names, project details, or environment-specific information without explicit written permission.
          </p>
          <p>
            Inquiry information may be stored in email, notes, or future business systems used to manage communication and project follow-up. Access is limited to what is reasonably necessary to operate the business and deliver services.
          </p>
          <p>
            If you would like to request deletion of information you previously shared, contact <a className="theme-link" href="mailto:contact@nextgridit.com">contact@nextgridit.com</a>. Certain records may be retained when necessary for legal, accounting, security, or business continuity purposes.
          </p>
          <p>
            This privacy policy may be updated from time to time as business processes and tooling evolve.
          </p>
        </div>
      </div>
    </div>
  );
}
