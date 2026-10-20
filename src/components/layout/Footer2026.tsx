import Link from "next/link";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
  IconPhone,
} from "@tabler/icons-react";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { siteConfig } from "@/lib/site-data";

const columns = [
  {
    title: "Expertise",
    links: [
      ["All services", "/services/"],
      ["MSP transition", "/services/msp-transition/"],
      ["Security assessments", "/services/vulnerability-assessment/"],
      ["Microsoft 365", "/services/microsoft-365/"],
      ["Networks & Wi-Fi", "/services/network-wifi/"],
      ["Technology platforms", "/technologies/"],
    ],
  },
  {
    title: "NextGridIT",
    links: [
      ["About", "/about/"],
      ["Our work", "/case-studies/"],
      ["Who we help", "/industries/"],
      ["Service areas", "/service-areas/"],
      ["Our process", "/process/"],
      ["Company facts", "/company-facts/"],
    ],
  },
  {
    title: "Resources",
    links: [
      ["Guides & field notes", "/guides/"],
      ["IT policy starter kit", "/resources/policy-starter-kit/"],
      ["Compliance", "/compliance/"],
      ["Local-first systems", "/local-first/"],
      ["Project fit", "/project-fit/"],
      ["Common questions", "/faq/"],
      ["NextGrid Labs", "/labs/"],
    ],
  },
];
export function Footer2026() {
  return (
    <footer className="site-footer">
      <div className="site-shell">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link href="/" className="wordmark">
              <span>
                Next<span className="brand-green">Grid</span>IT.
              </span>
            </Link>
            <p>
              Practical IT. Stronger security.
              <br />
              Clear ownership of what comes next.
            </p>
            <p>
              Based in Seneca, South Carolina.
              <br />
              Serving the Upstate and beyond.
            </p>
            <div className="footer-socials">
              <a
                href={`mailto:${siteConfig.email}`}
                aria-label="Email NextGridIT"
              >
                <IconMail size={19} />
              </a>
              <a href={`tel:${siteConfig.phone}`} aria-label="Call NextGridIT">
                <IconPhone size={19} />
              </a>
              <a
                href={siteConfig.sameAs[1]}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="NextGridIT on LinkedIn"
              >
                <IconBrandLinkedin size={19} />
              </a>
              <a
                href={siteConfig.sameAs[0]}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="NextGridIT on GitHub"
              >
                <IconBrandGithub size={19} />
              </a>
            </div>
          </div>
          {columns.map((column) => (
            <div key={column.title}>
              <h2 className="footer-heading">{column.title}</h2>
              <nav className="footer-links" aria-label={column.title}>
                {column.links.map(([label, href]) => (
                  <Link key={href} href={href}>
                    {label}
                  </Link>
                ))}
              </nav>
            </div>
          ))}
        </div>
        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} {siteConfig.legalName}
          </p>
          <div className="footer-utility">
            <Link href="/contact/">Contact</Link>
            <Link href="/privacy/">Privacy</Link>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </footer>
  );
}
