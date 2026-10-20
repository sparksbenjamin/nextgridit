import Link from "next/link";
import { BookingLink } from "@/components/content/BookingLink";

export function ProjectCTA({
  title = "A clearer path forward starts here.",
  description = "Choose a time to discuss your IT challenge, project fit, and practical next steps. Prefer to start by email? Send a few details instead.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="project-cta">
      <div>
        <p className="eyebrow">Let’s work through it</p>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div className="project-cta-actions">
        <BookingLink />
        <Link href="/contact/#project-details" className="text-link">
          Send project details
        </Link>
      </div>
    </section>
  );
}
