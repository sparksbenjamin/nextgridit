"use client";

import { BookingLink } from "@/components/content/BookingLink";

import { usePathname } from "next/navigation";
import { IconPhone } from "@tabler/icons-react";
import { siteConfig } from "@/lib/site-data";

export function MobileStickyBar() {
  const path = usePathname();
  if (path.startsWith("/contact") || path.startsWith("/aegis")) return null;
  return (
    <div className="mobile-contact-bar">
      <a href={`tel:${siteConfig.phone}`}>
        <IconPhone size={17} aria-hidden="true" />
        Call us
      </a>
      <BookingLink />
    </div>
  );
}
