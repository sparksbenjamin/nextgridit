import Link from "next/link";
import { IconArrowRight } from "@tabler/icons-react";

export default function NotFound() {
  return (
    <div className="page-shell container">
      <div className="page-intro">
        <p className="eyebrow">404 / Page not found</p>
        <h1>Let’s get you back on track.</h1>
        <p className="intro-description">
          This page may have moved, or the address may be incomplete. Explore
          our services or get in touch and we will help you find the right next
          step.
        </p>
        <div className="intro-actions">
          <Link href="/services/" className="button-primary">
            Explore our services
            <IconArrowRight size={17} aria-hidden="true" />
          </Link>
          <Link href="/" className="button-secondary">
            Back to home
          </Link>
          <Link href="/contact/" className="text-link">
            Contact NextGridIT
            <IconArrowRight size={17} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </div>
  );
}
