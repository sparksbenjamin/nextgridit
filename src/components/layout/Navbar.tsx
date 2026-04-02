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
    label: "Capabilities",
    description: "Infrastructure hardening, exposure research, sovereign AI, and deployment execution.",
    overview: {
      href: "/services",
      label: "Browse capabilities",
      description: "See the full service lineup across hardening, surveillance, labs research, and private AI.",
    },
    links: [
      {
        href: "/services/it-support",
        label: "Infrastructure Hardening",
        description: "Operator-led hardening, perimeter surveillance, and environment control.",
      },
      {
        href: "/services/microsoft-365",
        label: "Microsoft 365",
        description: "Tenant cleanup, identity work, and cloud administration help.",
      },
      {
        href: "/services/network-wifi",
        label: "Infrastructure Delivery",
        description: "Network operations, segmentation, and deployment execution across sites.",
      },
      {
        href: "/services/security-hardening",
        label: "Security",
        description: "Practical hardening, documentation, and compliance-aware support.",
      },
      {
        href: "/services/security-audits-pentesting",
        label: "Exposure Research",
        description: "Black box testing, surface analysis, and remediation guidance.",
      },
      {
        href: "/services/private-air-gapped-ai",
        label: "Private AI",
        description: "Air-gapped Qwen and Mistral deployments for coding and threat analysis.",
      },
      {
        href: "/services/camera-systems",
        label: "Perimeter Surveillance",
        description: "Sensor systems, local capture, and visibility infrastructure.",
      },
      {
        href: "/technologies",
        label: "Technologies",
        description: "Review the platforms, vendors, and systems NextGridIT supports.",
      },
    ],
    matchers: ["/services", "/technologies"],
  },
  {
    id: "fit",
    label: "Who We Help",
    description: "Distributed operators, regulated environments, and exposed environments that need sharper technical control.",
    overview: {
      href: "/industries",
      label: "Explore industries",
      description: "Start with the business types and environments the site is built for.",
    },
    links: [
      {
        href: "/industries",
        label: "Industries",
        description: "Medical, municipal, business, campground, and multi-site pages.",
      },
      {
        href: "/service-areas",
        label: "Service Areas",
        description: "Local coverage pages for Seneca, Clemson, Anderson, Easley, and Greenville.",
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
    ],
    matchers: ["/industries", "/service-areas", "/compliance", "/project-fit"],
  },
  {
    id: "resources",
    label: "Resources",
    description: "Research notes, labs output, planning material, FAQs, and technical briefings.",
    overview: {
      href: "/labs",
      label: "Visit NextGrid Labs",
      description: "See active research, telemetry concepts, and the surface scan experience.",
    },
    links: [
      {
        href: "/labs",
        label: "NextGrid Labs",
        description: "Vulnerability research, telemetry, and the surface scan endpoint.",
      },
      {
        href: "/guides",
        label: "Guides",
        description: "Field notes, explainers, and technical write-ups from real work.",
      },
      {
        href: "/case-studies",
        label: "Case Studies",
        description: "Sanitized examples of cleanup, redesign, and rollout work.",
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
    matchers: ["/labs", "/guides", "/case-studies", "/faq", "/local-first"],
  },
  {
    id: "company",
    label: "Company",
    description: "Background, delivery process, proof points, and how to get in touch.",
    overview: {
      href: "/about",
      label: "About NextGridIT",
      description: "Get the company overview, positioning, and local operating approach.",
    },
    links: [
      {
        href: "/about",
        label: "About",
        description: "Company background, focus, and operating style.",
      },
      {
        href: "/process",
        label: "Process",
        description: "How discovery, scope, and execution usually move forward.",
      },
      {
        href: "/company-facts",
        label: "Company Facts",
        description: "Quick facts, coverage, and supported technologies at a glance.",
      },
      {
        href: "/contact",
        label: "Contact",
        description: "Start the conversation and outline the project or environment.",
      },
    ],
    matchers: ["/about", "/process", "/company-facts", "/contact"],
  },
]

const mobileMenuId = "mobile-navigation"
const desktopMenuId = "desktop-navigation"
const phoneHref = `tel:${siteConfig.phone.replace(/[^\d+]/g, "")}`
const labsHref = "/labs"
const surfaceScanHref = "/#active-perimeter-intelligence"

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
  const [expandedMobileGroupId, setExpandedMobileGroupId] = React.useState<string | null>(
    navGroups[0]?.id ?? null
  )
  const headerRef = React.useRef<HTMLElement>(null)
  const pathname = normalizePath(usePathname())
  const activePathGroup = navGroups.find((group) =>
    group.matchers.some((matcher) => isPathActive(pathname, matcher))
  )
  const activeDesktopGroup =
    navGroups.find((group) => group.id === activeDesktopGroupId) ?? null
  const isLabsActive = isPathActive(pathname, labsHref)

  React.useEffect(() => {
    setIsOpen(false)
    setActiveDesktopGroupId(null)
    setExpandedMobileGroupId(activePathGroup?.id ?? navGroups[0]?.id ?? null)
  }, [activePathGroup?.id, pathname])

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
        setIsOpen(false)
        setActiveDesktopGroupId(null)
      }
    }

    document.addEventListener("pointerdown", handlePointerDown)
    document.addEventListener("keydown", handleKeyDown)

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown)
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [])

  function unlockHackerTheme(event: React.MouseEvent<HTMLDivElement>) {
    if (event.altKey && event.shiftKey) {
      window.localStorage.setItem("nextgridit-hacker-unlocked", "true")
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
    if (!isOpen) {
      setExpandedMobileGroupId(activePathGroup?.id ?? navGroups[0]?.id ?? null)
    }

    setActiveDesktopGroupId(null)
    setIsOpen((currentValue) => !currentValue)
  }

  return (
    <header
      ref={headerRef}
      className="fixed top-0 z-50 w-full border-b border-[var(--border)] bg-[var(--background-elevated)]/90 backdrop-blur-xl transition-all duration-300"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link href="/" onClick={closeMenus} className="flex items-center gap-2 group">
              <div
                onClick={unlockHackerTheme}
                className="brand-mark flex h-10 w-10 items-center justify-center rounded-xl duration-300"
                title="NextGridIT"
              >
                <span className="font-mono text-xl font-bold leading-none">NX</span>
              </div>
              <span className="font-mono text-xl font-bold tracking-wider theme-heading">
                NEXT<span className="theme-accent-strong">GRID</span><span className="ml-1 text-sm theme-soft">IT</span>
              </span>
            </Link>
          </div>

          <nav aria-label="Primary" className="hidden md:flex items-center gap-2">
            <Link
              href={labsHref}
              onClick={closeMenus}
              className={cn(
                "relative inline-flex items-center gap-1 rounded-full border px-4 py-3 font-mono text-sm uppercase tracking-[0.18em] transition-colors duration-200",
                isLabsActive
                  ? "border-[var(--accent)] theme-accent-strong bg-[var(--accent-soft)]"
                  : "border-[var(--border-strong)] theme-copy hover:border-[var(--accent)] hover:bg-[var(--accent-soft)] hover:text-[var(--foreground)]"
              )}
            >
              <span>NextGrid Labs</span>
              <span
                className={cn(
                  "absolute inset-x-4 -bottom-px h-[2px] rounded-full transition-opacity duration-200",
                  isLabsActive
                    ? "bg-[var(--accent-strong)] opacity-100"
                    : "bg-[var(--accent)] opacity-0"
                )}
              />
            </Link>
            {navGroups.map((group) => {
              const isHighlighted =
                activePathGroup?.id === group.id || activeDesktopGroupId === group.id

              return (
                <button
                  key={group.id}
                  type="button"
                  aria-expanded={activeDesktopGroupId === group.id}
                  aria-controls={desktopMenuId}
                  aria-haspopup="true"
                  onClick={() => toggleDesktopGroup(group.id)}
                  className={cn(
                    "relative inline-flex items-center gap-1 rounded-full px-4 py-3 font-mono text-sm uppercase tracking-[0.18em] transition-colors duration-200",
                    isHighlighted
                      ? "theme-accent-strong bg-[var(--accent-soft)]"
                      : "theme-copy hover:bg-[var(--accent-soft)] hover:text-[var(--foreground)]"
                  )}
                >
                  <span>{group.label}</span>
                  <IconChevronDown
                    className={cn(
                      "h-4 w-4 transition-transform duration-200",
                      activeDesktopGroupId === group.id && "rotate-180"
                    )}
                  />
                  <span
                    className={cn(
                      "absolute inset-x-4 -bottom-px h-[2px] rounded-full transition-opacity duration-200",
                      isHighlighted
                        ? "bg-[var(--accent-strong)] opacity-100"
                        : "bg-[var(--accent)] opacity-0"
                    )}
                  />
                </button>
              )
            })}
          </nav>

          <div className="flex items-center gap-2 md:gap-4">
            <ThemeToggle className="scale-90 origin-right sm:scale-100" />
            <div className="hidden md:block">
              <Link
                href={surfaceScanHref}
                onClick={closeMenus}
                className="button-primary relative overflow-hidden rounded-full px-6 py-2.5 font-mono text-sm font-bold uppercase tracking-[0.2em]"
              >
                <span className="relative z-10">RUN PERIMETER AUDIT</span>
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
              className="rounded-md p-2 theme-copy hover:bg-[var(--accent-soft)] hover:text-[var(--foreground)]"
            >
              {isOpen ? <IconX className="w-6 h-6" /> : <IconMenu2 className="w-6 h-6" />}
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
            ? "pointer-events-auto max-h-[calc(100vh-5rem)] opacity-100"
            : "pointer-events-none max-h-0 opacity-0"
        )}
        aria-hidden={!isOpen}
      >
        <div className="max-h-[calc(100vh-5rem)] overflow-y-auto px-4 pb-6 pt-3">
          <div className="grid grid-cols-2 gap-3 border-b border-[var(--border)] pb-4">
            <Link
              href={surfaceScanHref}
              onClick={closeMenus}
              className="button-primary inline-flex items-center justify-center rounded-2xl px-4 py-3 text-center font-mono text-xs font-bold uppercase tracking-[0.18em]"
            >
              Run Audit
            </Link>
            <a
              href={phoneHref}
              className="button-secondary inline-flex items-center justify-center gap-2 rounded-2xl px-4 py-3 text-center font-mono text-xs font-bold uppercase tracking-[0.18em]"
            >
              <IconPhone className="h-4 w-4" />
              <span>{siteConfig.phoneDisplay}</span>
            </a>
          </div>

          <div className="mt-4">
            <Link
              href={labsHref}
              onClick={closeMenus}
              className={cn(
                "button-secondary flex w-full items-center justify-center rounded-2xl px-4 py-3 text-center font-mono text-xs font-bold uppercase tracking-[0.18em]",
                isLabsActive && "border-[var(--accent)] bg-[var(--accent-soft)]"
              )}
            >
              NextGrid Labs
            </Link>
          </div>

          <nav aria-label="Mobile" className="mt-4 space-y-3">
            {navGroups.map((group) => {
              const isExpanded = expandedMobileGroupId === group.id
              const isGroupHighlighted = activePathGroup?.id === group.id

              return (
                <section
                  key={group.id}
                  className="overflow-hidden rounded-[1.5rem] border border-[var(--border)] bg-[var(--surface)]"
                >
                  <button
                    type="button"
                    onClick={() =>
                      setExpandedMobileGroupId((currentGroupId) =>
                        currentGroupId === group.id ? null : group.id
                      )
                    }
                    aria-expanded={isExpanded}
                    className="flex w-full items-start justify-between gap-4 px-4 py-4 text-left"
                  >
                    <div className="min-w-0">
                      <p
                        className={cn(
                          "font-mono text-sm uppercase tracking-[0.18em]",
                          isGroupHighlighted ? "theme-accent-strong" : "theme-heading"
                        )}
                      >
                        {group.label}
                      </p>
                      <p className="theme-copy mt-2 text-sm leading-6">
                        {group.description}
                      </p>
                    </div>
                    <IconChevronDown
                      className={cn(
                        "mt-0.5 h-5 w-5 shrink-0 theme-soft transition-transform duration-200",
                        isExpanded && "rotate-180"
                      )}
                    />
                  </button>

                  <div
                    className={cn(
                      "overflow-hidden transition-all duration-300",
                      isExpanded ? "max-h-[40rem]" : "max-h-0"
                    )}
                  >
                    <div className="space-y-3 border-t border-[var(--border)] px-4 pb-4 pt-4">
                      <Link
                        href={group.overview.href}
                        onClick={closeMenus}
                        className="button-secondary flex items-center justify-between rounded-2xl px-4 py-3 font-mono text-xs font-bold uppercase tracking-[0.18em]"
                      >
                        <span>{group.overview.label}</span>
                        <IconArrowRight className="h-4 w-4" />
                      </Link>

                      {group.links.map((link) => {
                        const isActive = isPathActive(pathname, link.href)

                        return (
                          <Link
                            key={link.href}
                            href={link.href}
                            onClick={closeMenus}
                            className={cn(
                              "block rounded-2xl border p-4 transition-colors duration-200",
                              isActive
                                ? "border-[var(--accent)] bg-[var(--accent-soft)]"
                                : "border-[var(--border)] bg-[var(--surface-strong)]"
                            )}
                          >
                            <span
                              className={cn(
                                "block font-mono text-sm uppercase tracking-[0.16em]",
                                isActive ? "theme-accent-strong" : "theme-heading"
                              )}
                            >
                              {link.label}
                            </span>
                            <span className="theme-copy mt-2 block text-sm leading-6">
                              {link.description}
                            </span>
                          </Link>
                        )
                      })}
                    </div>
                  </div>
                </section>
              )
            })}

            <Link
              href="/"
              onClick={closeMenus}
              className="button-secondary flex w-full items-center justify-center rounded-2xl px-6 py-3 text-center font-mono text-xs font-bold uppercase tracking-[0.18em]"
            >
              Back to Home
            </Link>

            <div className="border-t border-[var(--border)] pt-4">
              <Link
              href={surfaceScanHref}
              onClick={closeMenus}
              className="button-primary inline-block w-full rounded-full px-6 py-3 text-center font-mono text-sm font-bold uppercase tracking-[0.2em]"
            >
              RUN PERIMETER AUDIT
            </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}
