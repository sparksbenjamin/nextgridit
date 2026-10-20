import Link from "next/link";
import { IconArrowRight } from "@tabler/icons-react";

export function ProjectCTA({
  title = "A clearer path forward starts here.",
  description = "Tell us what is not working, what you need to own, or what you are preparing for. We will help you find the right next step.",
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
      <Link href="/contact/" className="button-primary">
        Discuss your project
        <IconArrowRight size={18} aria-hidden="true" />
      </Link>
    </section>
  );
}
