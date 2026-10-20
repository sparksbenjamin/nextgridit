"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  IconArrowRight,
  IconChevronDown,
  IconMenu2,
  IconPhone,
  IconX,
} from "@tabler/icons-react"
import { ThemeToggle } from "@/components/theme/ThemeToggle"
import { siteConfig } from "@/lib/site-data"
import { cn } from "@/lib/utils"

type NavItem = {
  href: string
  label: string
  description: string
}

type NavGroup = {
  id: string
  label: string
  description: string
  overview: NavItem
  links: NavItem[]
  matchers: string[]
}

const navGroups: NavGroup[] = [
  {
    id: "services",
    label: "Services",
    description: "MSP transitions, vendor lockout recovery, HIPAA assessments, security, and infrastructure hardening.",
    overview: {
      href: "/services",
      label: "Browse all services",
      description: "See the full service lineup across security, compliance, and infrastructure.",
    },
    links: [
      {
        href: "/services/msp-transition",
        label: "MSP Transition",
        description: "Fire your MSP and take back control of your IT.",
      },
      {
        href: "/services/vendor-lockout-recovery",
        label: "Vendor Lockout Recovery",
        description: "Break back into systems you own when a provider walks away.",
      },
      {
        href: "/services/hipaa-security-assessment",
        label: "HIPAA Assessment",
        description: "Real security assessments for medical practices.",
      },
      {
        href: "/services/vulnerability-assessment",
        label: "Vulnerability Assessment",
        description: "Find and prioritize what's actually vulnerable in your environment.",
      },
      {
        href: "/services/infrastructure-hardening",
        label: "Infrastructure Hardening",
        description: "Close gaps in identity, mail, network edges, and inherited systems.",
      },
      {
        href: "/services/microsoft-365",
        label: "Microsoft 365",
        description: "Tenant cleanup, identity hardening, and migration support.",
      },
      {
        href: "/services/network-wifi",
        label: "Network & Wi-Fi",
        description: "Reliable network deployment and Wi-Fi for businesses.",
      },
      {
        href: "/services/security-audits-pentesting",
        label: "Penetration Testing",
        description: "Black box and trusted-access testing with remediation help.",
      },
      {
        href: "/services/camera-systems",
        label: "Camera Systems",
        description: "Local-first camera and surveillance infrastructure.",
      },
      {
        href: "/services/private-ai",
        label: "Private AI Consulting",
        description: "Guidance on local AI that keeps your data inside your environment.",
      },
    ],
    matchers: ["/services"],
  },
  {
    id: "solutions",
    label: "Solutions",
    description: "Industry-specific guidance, compliance programs, and local service coverage in Upstate SC.",
    overview: {
      href: "/industries",
      label: "Explore solutions",
      description: "Find the right fit for your industry, compliance needs, and location.",
    },
    links: [
      {
        href: "/industries",
        label: "Industries",
        description: "Medical, municipal, business, campground, and multi-site.",
      },
      {
        href: "/service-areas",
        label: "Service Areas",
        description: "Seneca, Clemson, Anderson, Easley, and Greenville, SC.",
      },
      {
        href: "/compliance",
        label: "Compliance",
        description: "HIPAA, PCI DSS, and NIST-informed implementation guidance.",
      },
      {
        href: "/project-fit",
        label: "Project Fit",
        description: "See which projects and operating environments are the strongest fit.",
      },
      {
        href: "/technologies",
        label: "Technologies",
        description: "Platforms, vendors, and systems NextGridIT supports.",
      },
    ],
    matchers: ["/industries", "/service-areas", "/compliance", "/project-fit", "/technologies"],
  },
  {
    id: "resources",
    label: "Resources",
    description: "Guides, policy starter kit, case studies, research, and answers to common questions.",
    overview: {
      href: "/guides",
      label: "Browse guides",
      description: "Field notes, explainers, and technical write-ups from real work.",
    },
    links: [
      {
        href: "/guides",
        label: "Guides",
        description: "Technical guides and how-to articles from the field.",
      },
      {
        href: "/resources/policy-starter-kit",
        label: "Policy Starter Kit",
        description: "AI, mobile, password, vendor access, offboarding, and MSP transition templates.",
      },
      {
        href: "/case-studies",
        label: "Case Studies",
        description: "Real examples of cleanup, redesign, and rollout work.",
      },
      {
        href: "/labs",
        label: "NextGrid Labs",
        description: "Security research, vulnerability discovery, and open source tools.",
      },
      {
        href: "/faq",
        label: "FAQ",
        description: "Quick answers about scope, geography, and how projects start.",
      },
      {
        href: "/local-first",
        label: "Local-First Systems",
        description: "Why ownership, on-site control, and practical fit matter.",
      },
    ],
    matchers: ["/labs", "/guides", "/resources", "/case-studies", "/faq", "/local-first"],
  },
]

const mobileMenuLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/industries", label: "Industries" },
  { href: "/service-areas", label: "Service Areas" },
  { href: "/resources/policy-starter-kit", label: "Policy Kit" },
  { href: "/guides", label: "Guides" },
  { href: "/labs", label: "Labs" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
]

const mobileMenuId = "mobile-navigation"
const desktopMenuId = "desktop-navigation"
const phoneHref = `tel:${siteConfig.phone.replace(/[^\d+]/g, "")}`
const surfaceScanHref = "/contact"

function normalizePath(path: string) {
  if (path !== "/" && path.endsWith("/")) {
    return path.slice(0, -1)
  }

  return path
}

function isPathActive(pathname: string, href: string) {
  const normalizedPathname = normalizePath(pathname)
  const normalizedHref = normalizePath(href)

  if (normalizedHref === "/") {
    return normalizedPathname === "/"
  }

  return (
    normalizedPathname === normalizedHref ||
    normalizedPathname.startsWith(`${normalizedHref}/`)
  )
}

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [activeDesktopGroupId, setActiveDesktopGroupId] = React.useState<string | null>(null)
  const headerRef = React.useRef<HTMLElement>(null)
  const pathname = normalizePath(usePathname())
  const activePathGroup = navGroups.find((group) =>
    group.matchers.some((matcher) => isPathActive(pathname, matcher))
  )
  const activeDesktopGroup =
    navGroups.find((group) => group.id === activeDesktopGroupId) ?? null

  const [previousPathname, setPreviousPathname] = React.useState(pathname)
  if (previousPathname !== pathname) {
    setPreviousPathname(pathname)
    setIsOpen(false)
    setActiveDesktopGroupId(null)
  }

  React.useEffect(() => {
    if (!isOpen) {
      return
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"

    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [isOpen])

  React.useEffect(() => {
    function handlePointerDown(event: PointerEvent) {
      if (!(event.target instanceof Node)) {
        return
      }

      if (!headerRef.current?.contains(event.target)) {
        setIsOpen(false)
        setActiveDesktopGroupId(null)
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        const expandedTrigger = headerRef.current?.querySelector<HTMLButtonElement>('button[aria-expanded="true"]')
        expandedTrigger?.focus()
        setIsOpen(false)
        setActiveDesktopGroupId(null)
      }
    }

    function handleFocusIn(event: FocusEvent) {
      if (event.target instanceof Node && !headerRef.current?.contains(event.target)) {
        setIsOpen(false)
        setActiveDesktopGroupId(null)
      }
    }

    document.addEventListener("focusin", handleFocusIn)
    document.addEventListener("pointerdown", handlePointerDown)
    document.addEventListener("keydown", handleKeyDown)

    return () => {
      document.removeEventListener("focusin", handleFocusIn)
      document.removeEventListener("pointerdown", handlePointerDown)
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [])

  React.useEffect(() => {
    const breakpoint = window.matchMedia("(min-width: 768px)")
    function handleBreakpointChange() {
      setIsOpen(false)
      setActiveDesktopGroupId(null)
    }
    breakpoint.addEventListener("change", handleBreakpointChange)
    return () => breakpoint.removeEventListener("change", handleBreakpointChange)
  }, [])

  function unlockHackerTheme(event: React.MouseEvent<HTMLDivElement>) {
    if (event.altKey && event.shiftKey) {
      try { window.localStorage.setItem("nextgridit-hacker-unlocked", "true") } catch { /* Storage is optional. */ }
      window.dispatchEvent(new Event("nextgridit:hacker-unlocked"))
    }
  }

  function closeMenus() {
    setIsOpen(false)
    setActiveDesktopGroupId(null)
  }

  function toggleDesktopGroup(groupId: string) {
    setIsOpen(false)
    setActiveDesktopGroupId((currentGroupId) =>
      currentGroupId === groupId ? null : groupId
    )
  }

  function toggleMobileMenu() {
    setActiveDesktopGroupId(null)
    setIsOpen((currentValue) => !currentValue)
  }

  return (
    <header
      ref={headerRef}
      className="site-header fixed top-0 z-50 w-full border-b border-[var(--border)] bg-[var(--background-elevated)]/95 backdrop-blur-xl transition-all duration-300"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 items-center justify-between gap-3 md:h-16 md:gap-4">
          <div className="flex-shrink-0">
            <Link href="/" onClick={closeMenus} className="flex items-center gap-2 group">
              <div
                onClick={unlockHackerTheme}
                className="brand-mark flex h-8 w-8 items-center justify-center rounded-xl duration-300 md:h-9 md:w-9"
                title="NextGridIT"
              >
                <span className="font-mono text-base font-bold leading-none md:text-lg">NX</span>
              </div>
              <span className="font-sans text-base font-bold tracking-[-0.04em] theme-heading sm:text-lg lg:text-xl">
                NEXT<span className="theme-accent-strong">GRID</span><span className="ml-1 text-sm theme-soft">IT</span>
              </span>
            </Link>
          </div>

          <nav aria-label="Primary" className="hidden min-w-0 items-center gap-1 md:flex">
            {navGroups.map((group) => {
              const isHighlighted =
                activePathGroup?.id === group.id || activeDesktopGroupId === group.id

              return (
                <button
                  key={group.id}
                  type="button"
                  aria-expanded={activeDesktopGroupId === group.id}
                  aria-controls={desktopMenuId}
                  onClick={() => toggleDesktopGroup(group.id)}
                  className={cn(
                    "relative inline-flex items-center gap-1 rounded-full px-3 py-2 font-sans text-sm font-medium transition-colors duration-200 lg:px-3.5",
                    isHighlighted
                      ? "theme-accent-strong bg-[var(--accent-soft)]"
                      : "theme-copy hover:bg-[var(--accent-soft)] hover:text-[var(--foreground)]"
                  )}
                >
                  <span>{group.label}</span>
                  <IconChevronDown
                    className={cn(
                      "h-3.5 w-3.5 transition-transform duration-200",
                      activeDesktopGroupId === group.id && "rotate-180"
                    )}
                  />
                  <span
                    className={cn(
                      "absolute inset-x-3 -bottom-px h-[2px] rounded-full transition-opacity duration-200",
                      isHighlighted
                        ? "bg-[var(--accent-strong)] opacity-100"
                        : "bg-[var(--accent)] opacity-0"
                    )}
                  />
                </button>
              )
            })}
            <span className="mx-1 h-5 w-px bg-[var(--border)]" />
            <Link
              href="/about"
              onClick={closeMenus}
              className={cn(
                "inline-flex items-center rounded-full px-3 py-2 font-sans text-sm font-medium transition-colors duration-200 lg:px-3.5",
                isPathActive(pathname, "/about") || isPathActive(pathname, "/process") || isPathActive(pathname, "/company-facts")
                  ? "theme-accent-strong bg-[var(--accent-soft)]"
                  : "theme-copy hover:bg-[var(--accent-soft)] hover:text-[var(--foreground)]"
              )}
            >
              About
            </Link>
            <Link
              href="/contact"
              onClick={closeMenus}
              className={cn(
                "inline-flex items-center rounded-full px-3 py-2 font-sans text-sm font-medium transition-colors duration-200 lg:px-3.5",
                isPathActive(pathname, "/contact")
                  ? "theme-accent-strong bg-[var(--accent-soft)]"
                  : "theme-copy hover:bg-[var(--accent-soft)] hover:text-[var(--foreground)]"
              )}
            >
              Contact
            </Link>
          </nav>

          <div className="flex items-center gap-2 md:gap-3">
            <div className="hidden sm:block">
              <ThemeToggle className="scale-90 origin-right sm:scale-100" />
            </div>
            <a
              href={phoneHref}
              className="hidden lg:inline-flex items-center gap-1.5 rounded-full border border-[var(--border-strong)] px-3 py-2 font-sans text-xs font-medium theme-copy hover:border-[var(--accent)] hover:bg-[var(--accent-soft)] hover:text-[var(--foreground)] transition-colors duration-200"
            >
              <IconPhone className="h-3.5 w-3.5" />
              <span>{siteConfig.phoneDisplay}</span>
            </a>
            <div className="hidden md:block">
              <Link
                href={surfaceScanHref}
                onClick={closeMenus}
                className="button-primary relative overflow-hidden rounded-full px-4 py-2 font-sans text-xs font-bold lg:px-5"
              >
                <span className="relative z-10">Free Assessment</span>
              </Link>
            </div>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <button
              type="button"
              onClick={toggleMobileMenu}
              aria-expanded={isOpen}
              aria-controls={mobileMenuId}
              aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--surface)] theme-copy shadow-sm hover:bg-[var(--accent-soft)] hover:text-[var(--foreground)]"
            >
              {isOpen ? <IconX className="h-5 w-5" /> : <IconMenu2 className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      <div
        id={desktopMenuId}
        className={cn(
          "absolute inset-x-0 top-full hidden border-b border-[var(--border)] bg-[var(--background-elevated)]/96 backdrop-blur-2xl transition-all duration-200 md:block",
          activeDesktopGroup
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-2 opacity-0"
        )}
      >
        {activeDesktopGroup ? (
          <div className="container mx-auto px-4 py-5 sm:px-6 lg:px-8">
            <div className="grid gap-4 lg:grid-cols-[minmax(0,20rem)_minmax(0,1fr)]">
              <section className="glass-panel rounded-[1.75rem] p-6">
                <p className="theme-soft font-mono text-xs uppercase tracking-[0.24em]">
                  Browse {activeDesktopGroup.label}
                </p>
                <h2 className="theme-heading mt-3 font-mono text-2xl font-bold">
                  {activeDesktopGroup.label}
                </h2>
                <p className="theme-copy mt-4 text-sm leading-6">
                  {activeDesktopGroup.description}
                </p>
                <Link
                  href={activeDesktopGroup.overview.href}
                  onClick={closeMenus}
                  className="button-secondary mt-6 inline-flex items-center gap-2 rounded-full px-5 py-3 font-mono text-xs font-bold uppercase tracking-[0.2em]"
                >
                  <span>{activeDesktopGroup.overview.label}</span>
                  <IconArrowRight className="h-4 w-4" />
                </Link>
              </section>

              <nav
                aria-label={`${activeDesktopGroup.label} links`}
                className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3"
              >
                {activeDesktopGroup.links.map((link) => {
                  const isActive = isPathActive(pathname, link.href)

                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={closeMenus}
                      className={cn(
                        "group rounded-[1.5rem] border bg-[var(--surface)] p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--border-strong)] hover:bg-[var(--surface-muted)]",
                        isActive
                          ? "border-[var(--accent)] bg-[var(--accent-soft)]"
                          : "border-[var(--border)]"
                      )}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <h3
                            className={cn(
                              "font-mono text-sm uppercase tracking-[0.18em] transition-colors duration-200",
                              isActive
                                ? "theme-accent-strong"
                                : "theme-heading group-hover:text-[var(--accent)]"
                            )}
                          >
                            {link.label}
                          </h3>
                          <p className="theme-copy mt-3 text-sm leading-6">
                            {link.description}
                          </p>
                        </div>
                        <IconArrowRight className="mt-0.5 h-4 w-4 shrink-0 theme-soft transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-[var(--accent)]" />
                      </div>
                    </Link>
                  )
                })}
              </nav>
            </div>
          </div>
        ) : null}
      </div>

      <div
        id={mobileMenuId}
        className={cn(
          "absolute inset-x-0 top-full origin-top overflow-hidden border-b border-[var(--border)] bg-[var(--background-elevated)]/95 transition-all duration-300 ease-in-out md:hidden",
          isOpen
            ? "pointer-events-auto max-h-[calc(100vh-3.5rem)] opacity-100"
            : "pointer-events-none max-h-0 opacity-0"
        )}
        aria-hidden={!isOpen}
        inert={!isOpen}
      >
        <div className="max-h-[calc(100vh-3.5rem)] overflow-y-auto px-3 pb-28 pt-3">
          <nav aria-label="Mobile" className="grid gap-2">
            {mobileMenuLinks.map((link) => {
              const isActive = isPathActive(pathname, link.href)

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={isActive && pathname === normalizePath(link.href) ? "page" : undefined}
                  onClick={closeMenus}
                  className={cn(
                    "flex min-h-12 items-center justify-between rounded-xl border px-4 py-3 font-mono text-sm font-bold uppercase tracking-[0.1em] transition-colors duration-200",
                    isActive
                      ? "border-[var(--accent)] bg-[var(--accent-soft)] theme-accent-strong"
                      : "border-[var(--border)] bg-[var(--surface)] theme-copy hover:border-[var(--border-strong)] hover:bg-[var(--surface-muted)]"
                  )}
                >
                  <span>{link.label}</span>
                  <IconArrowRight className="h-4 w-4 shrink-0 theme-soft" />
                </Link>
              )
            })}
          </nav>
        </div>
      </div>
    </header>
  )
}
