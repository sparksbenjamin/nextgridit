"use client";

import { BookingLink } from "@/components/content/BookingLink";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  IconArrowRight,
  IconArrowUpRight,
  IconChevronDown,
  IconMenu2,
  IconPhone,
  IconX,
} from "@tabler/icons-react";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { siteConfig } from "@/lib/site-data";

const groups = [
  {
    id: "services",
    label: "Services",
    href: "/services/",
    description: "Practical help. Clear ownership.",
    links: [
      ["MSP transition", "/services/msp-transition/"],
      ["Vendor lockout recovery", "/services/vendor-lockout-recovery/"],
      ["HIPAA security assessments", "/services/hipaa-security-assessment/"],
      ["Vulnerability assessments", "/services/vulnerability-assessment/"],
      ["NIST 800-171 readiness", "/services/nist-800-171-readiness/"],
      ["Infrastructure hardening", "/services/infrastructure-hardening/"],
      ["Penetration testing", "/services/security-audits-pentesting/"],
      ["Microsoft 365 & cloud", "/services/microsoft-365/"],
      ["Networks, Wi-Fi & cabling", "/services/network-wifi/"],
      ["Camera systems", "/services/camera-systems/"],
      ["Private AI", "/services/private-ai/"],
    ],
  },
  {
    id: "industries",
    label: "Who we help",
    href: "/industries/",
    description: "Technical depth. Local understanding.",
    links: [
      ["Small businesses", "/industries/small-business/"],
      ["Medical practices", "/industries/medical-offices/"],
      ["Manufacturers & defense", "/industries/manufacturing-defense/"],
      ["Municipalities", "/industries/municipalities/"],
      ["Campgrounds", "/industries/campgrounds/"],
      ["Multi-site properties", "/industries/multi-site-properties/"],
      ["Upstate service areas", "/service-areas/"],
    ],
  },
  {
    id: "resources",
    label: "Resources",
    href: "/guides/",
    description: "A clearer view of your technology.",
    links: [
      ["Guides & field notes", "/guides/"],
      ["IT policy starter kit", "/resources/policy-starter-kit/"],
      ["Our process", "/process/"],
      ["Project fit", "/project-fit/"],
      ["Common questions", "/faq/"],
      ["Compliance", "/compliance/"],
      ["Technology expertise", "/technologies/"],
      ["Local-first systems", "/local-first/"],
      ["Aegis WAF · open source", "/aegis/"],
      ["NextGrid Labs", "/labs/"],
      ["Company facts", "/company-facts/"],
    ],
  },
] as const;

function active(path: string, href: string) {
  return (
    path.replace(/\/$/, "") === href.replace(/\/$/, "") || path.startsWith(href)
  );
}

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [desktopGroup, setDesktopGroup] = useState<string | null>(null);
  const [lastDesktopGroup, setLastDesktopGroup] = useState("services");
  const header = useRef<HTMLElement>(null);
  const mobileTrigger = useRef<HTMLButtonElement>(null);
  const [previousPath, setPreviousPath] = useState(pathname);
  if (previousPath !== pathname) {
    setPreviousPath(pathname);
    setIsOpen(false);
    setDesktopGroup(null);
  }
  // Retain the panel content during its closing transition. Inert removes it
  // from interaction immediately; CSS handles the brief visual exit.
  const selected = groups.find((group) => group.id === (desktopGroup ?? lastDesktopGroup));
  function toggleGroup(id: string) {
    setLastDesktopGroup(id);
    setDesktopGroup(desktopGroup === id ? null : id);
    setIsOpen(false);
  }
  function close() {
    setIsOpen(false);
    setDesktopGroup(null);
  }

  useEffect(() => {
    if (!header.current || !mobileTrigger.current) return;
    const trigger = mobileTrigger.current;
    let compact = getComputedStyle(trigger).display !== "none";
    const reset = () => {
      const nextCompact = getComputedStyle(trigger).display !== "none";
      if (nextCompact === compact) return;
      compact = nextCompact;
      setIsOpen(false);
      setDesktopGroup(null);
    };
    // Observe actual layout so text resizing also releases an open menu's
    // background lock when the header returns to its desktop arrangement.
    const observer = new ResizeObserver(reset);
    observer.observe(header.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const outside = [
      ...document.querySelectorAll<HTMLElement>(
        "main, footer, .mobile-contact-bar",
      ),
    ];
    const previous = outside.map((element) => element.inert);
    outside.forEach((element) => {
      element.inert = true;
    });
    return () => {
      document.body.style.overflow = overflow;
      outside.forEach((element, index) => {
        element.inert = previous[index];
      });
    };
  }, [isOpen]);

  useEffect(() => {
    function pointer(event: PointerEvent) {
      if (
        event.target instanceof Node &&
        !header.current?.contains(event.target)
      )
        close();
    }
    function key(event: KeyboardEvent) {
      if (event.key === "Escape") {
        const trigger = header.current?.querySelector<HTMLButtonElement>(
          'button[aria-expanded="true"]',
        );
        trigger?.focus();
        close();
      }
      if (event.key === "Tab" && isOpen) {
        const focusable = [
          ...(header.current?.querySelectorAll<HTMLElement>(
            "a[href],button:not([disabled]),summary",
          ) ?? []),
        ].filter(
          (element) =>
            element.getClientRects().length && element.tabIndex >= 0 &&
            getComputedStyle(element).visibility !== "hidden" && !element.closest("[inert]"),
        );
        const first = focusable[0],
          last = focusable.at(-1);
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last?.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first?.focus();
        }
      }
    }
    function focus(event: FocusEvent) {
      if (
        !isOpen &&
        event.target instanceof Node &&
        !header.current?.contains(event.target)
      )
        setDesktopGroup(null);
    }
    document.addEventListener("pointerdown", pointer);
    document.addEventListener("keydown", key);
    document.addEventListener("focusin", focus);
    return () => {
      document.removeEventListener("pointerdown", pointer);
      document.removeEventListener("keydown", key);
      document.removeEventListener("focusin", focus);
    };
  }, [isOpen]);

  return (
    <header ref={header} className="site-header">
      <div className="site-shell header-row">
        <Link href="/" className="wordmark" onClick={close}>
          <span className="brand-symbol" aria-hidden="true">
            N<IconArrowUpRight size={13} aria-hidden="true" />
          </span>
          <span>
            Next<span className="brand-green">Grid</span>IT
            <span className="wordmark-dot">.</span>
          </span>
        </Link>
        <nav className="desktop-nav" aria-label="Primary">
          {groups.slice(0, 2).map((group) => (
            <button
              key={group.id}
              type="button"
              aria-expanded={desktopGroup === group.id}
              aria-controls="desktop-navigation"
              className={
                active(pathname, group.href) ? "nav-link is-active" : "nav-link"
              }
              onClick={() => toggleGroup(group.id)}
            >
              {group.label}
              <IconChevronDown size={14} aria-hidden="true" />
            </button>
          ))}
          <Link
            className={`nav-link ${active(pathname, "/case-studies/") ? "is-active" : ""}`}
            href="/case-studies/"
            onClick={close}
          >
            Our work
          </Link>
          <button
            type="button"
            className={`nav-link ${groups[2].links.some(([, href]) => active(pathname, href)) || active(pathname, "/resources/") ? "is-active" : ""}`}
            aria-expanded={desktopGroup === "resources"}
            aria-controls="desktop-navigation"
            onClick={() => toggleGroup("resources")}
          >
            Resources
            <IconChevronDown size={14} aria-hidden="true" />
          </button>
          <Link
            className={`nav-link ${active(pathname, "/about/") ? "is-active" : ""}`}
            href="/about/"
            onClick={close}
          >
            About
          </Link>
        </nav>
        <a className="header-phone" href={`tel:${siteConfig.phone}`}>
          <IconPhone size={16} aria-hidden="true" />
          {siteConfig.phoneDisplay}
        </a>
        <BookingLink className="button-primary header-cta" onClick={close} />
        <button
          ref={mobileTrigger}
          className="menu-trigger"
          type="button"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          onClick={() => {
            setIsOpen(!isOpen);
            setDesktopGroup(null);
          }}
        >
          {isOpen ? <IconX size={22} /> : <IconMenu2 size={22} />}
        </button>
      </div>
      <div
        id="desktop-navigation"
        className="nav-panel"
        data-open={desktopGroup !== null}
        aria-hidden={desktopGroup === null}
        inert={desktopGroup === null}
      >
        {selected && (
          <div className="site-shell nav-panel-inner">
            <div>
              <p className="eyebrow">{selected.label}</p>
              <h2>{selected.description}</h2>
              <Link className="text-link" href={selected.href} onClick={close}>
                Explore {selected.label.toLowerCase()}
                <IconArrowRight size={17} />
              </Link>
            </div>
            <div className="nav-panel-links">
              {selected.links.map(([label, href]) => (
                <Link href={href} key={href} onClick={close}>
                  {label}
                  <IconArrowRight size={16} aria-hidden="true" />
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
      <nav
        id="mobile-navigation"
        className="mobile-navigation"
        aria-label="Mobile primary"
        data-open={isOpen}
        aria-hidden={!isOpen}
        inert={!isOpen}
      >
        <div className="mobile-nav-content">
          <Link href="/" className="mobile-main-link" onClick={close}>
            Home
            <IconArrowRight size={18} />
          </Link>
          {groups.map((group) => (
            <details key={group.id}>
              <summary>
                {group.label}
                <IconChevronDown size={18} />
              </summary>
              <div>
                <Link href={group.href} onClick={close}>
                  View all {group.label.toLowerCase()}
                </Link>
                {group.links.map(([label, href]) => (
                  <Link href={href} key={href} onClick={close}>
                    {label}
                  </Link>
                ))}
              </div>
            </details>
          ))}
          <Link
            href="/case-studies/"
            className="mobile-main-link"
            onClick={close}
          >
            Our work
            <IconArrowRight size={18} />
          </Link>
          <Link href="/about/" className="mobile-main-link" onClick={close}>
            About NextGridIT
            <IconArrowRight size={18} />
          </Link>
          <BookingLink className="button-primary" onClick={close} />
          <div className="mobile-nav-utility">
            <span>Appearance</span>
            <ThemeToggle />
          </div>
        </div>
      </nav>
    </header>
  );
}
