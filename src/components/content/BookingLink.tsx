import type { ReactNode } from "react";
import { IconArrowUpRight } from "@tabler/icons-react";
import { siteConfig } from "@/lib/site-data";

export function BookingLink({
  className = "button-primary",
  children = "Book a consultation",
  onClick,
}: {
  className?: string;
  children?: ReactNode;
  onClick?: () => void;
}) {
  return (
    <a href={siteConfig.bookingUrl} className={className} onClick={onClick}>
      {children}
      <IconArrowUpRight size={18} aria-hidden="true" />
    </a>
  );
}
