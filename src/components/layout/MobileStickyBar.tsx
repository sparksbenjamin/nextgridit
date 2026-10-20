"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { IconArrowRight, IconPhone } from "@tabler/icons-react";
import { siteConfig } from "@/lib/site-data";

export function MobileStickyBar() {
  const path = usePathname();
  if (path.startsWith("/contact")) return null;
  return (
    <div className="mobile-contact-bar">
      <a href={`tel:${siteConfig.phone}`}>
        <IconPhone size={17} aria-hidden="true" />
        Call us
      </a>
      <Link href="/contact/">
        Discuss your project
        <IconArrowRight size={17} aria-hidden="true" />
      </Link>
    </div>
  );
}
