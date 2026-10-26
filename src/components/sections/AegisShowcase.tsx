"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import { IconArrowUpRight, IconCheck, IconCopy } from "@tabler/icons-react";

const repository = "https://github.com/nextgridit-team/Aegis-WAF";
const screens = [
  {
    id: "traffic",
    label: "Traffic visibility",
    image: "live-traffic-map",
    title: "See the traffic reaching your applications.",
    description:
      "Follow recorded requests, distinguish allowed and blocked traffic, and investigate individual events.",
    alt: "Aegis live traffic map and request log from the repository's isolated test deployment",
    height: 1000,
  },
  {
    id: "policies",
    label: "Policy control",
    image: "curated-set-builder",
    title: "Choose the detections your application needs.",
    description:
      "Build reusable, pinned signature sets from installed CRS rules, then tune sensitivity and exclusions in a policy.",
    alt: "Aegis curated signature set builder with synthetic policy configuration",
    height: 1000,
  },
  {
    id: "certificates",
    label: "TLS certificates",
    image: "certificates-current",
    title: "Manage certificates alongside protection.",
    description:
      "Request and renew ACME certificates, including Cloudflare DNS-01 wildcards, or upload your existing PEM certificate and key.",
    alt: "Aegis certificate inventory showing automatic ACME and manually uploaded example certificates",
    height: 1000,
  },
] as const;

export function AegisShowcase() {
  const [selected, setSelected] = useState(0);
  const buttons = useRef<(HTMLButtonElement | null)[]>([]);
  const screen = screens[selected];
  function onKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let next = index;
    if (event.key === "ArrowRight") next = (index + 1) % screens.length;
    else if (event.key === "ArrowLeft")
      next = (index + screens.length - 1) % screens.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = screens.length - 1;
    else return;
    event.preventDefault();
    setSelected(next);
    buttons.current[next]?.focus();
  }
  return (
    <section
      className="aegis-showcase"
      aria-label="Explore the Aegis interface"
    >
      <div
        className="aegis-screen-tabs"
        role="tablist"
        aria-label="Product screenshots"
      >
        {screens.map((item, index) => (
          <button
            key={item.id}
            ref={(element) => {
              buttons.current[index] = element;
            }}
            type="button"
            role="tab"
            id={`aegis-tab-${item.id}`}
            aria-controls={`aegis-panel-${item.id}`}
            aria-selected={selected === index}
            tabIndex={selected === index ? 0 : -1}
            onClick={() => setSelected(index)}
            onKeyDown={(event) => onKeyDown(event, index)}
          >
            {item.label}
            <span aria-hidden="true">0{index + 1}</span>
          </button>
        ))}
      </div>
      <div
        role="tabpanel"
        id={`aegis-panel-${screen.id}`}
        aria-labelledby={`aegis-tab-${screen.id}`}
        tabIndex={0}
      >
        <div className="aegis-screen-frame">
          {/* Repository screenshots are displayed as images, not a simulated working dashboard. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`/aegis/${screen.image}.webp`}
            srcSet={`/aegis/${screen.image}-small.webp 720w, /aegis/${screen.image}.webp 1440w`}
            sizes="(min-width: 1376px) 1280px, calc(100vw - 3rem)"
            width="1440"
            height={screen.height}
            alt={screen.alt}
            fetchPriority={selected === 0 ? "high" : "auto"}
          />
        </div>
        <div className="aegis-screen-description">
          <div>
            <h2>{screen.title}</h2>
            <p>{screen.description}</p>
          </div>
          <a
            href={`${repository}/blob/main/docs/screenshots/${screen.image}.png`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Open full-size screenshot
            <IconArrowUpRight size={17} aria-hidden="true" />
          </a>
        </div>
      </div>
      <p className="aegis-provenance">
        Actual application screenshots from isolated test deployments, using
        example domains and synthetic data.{" "}
        <a href={`${repository}/blob/main/docs/screenshots/README.md`}>
          Capture notes
        </a>
      </p>
    </section>
  );
}

export const aegisQuickstart = `git clone https://github.com/nextgridit-team/Aegis-WAF.git
cd Aegis-WAF
python3 scripts/bootstrap-secrets.py
docker compose up -d --wait`;

export function AegisQuickstart() {
  const [status, setStatus] = useState<"idle" | "copied" | "failed">("idle");
  async function copy() {
    try {
      await navigator.clipboard.writeText(aegisQuickstart);
      setStatus("copied");
    } catch {
      setStatus("failed");
    }
  }
  return (
    <div className="aegis-terminal">
      <div className="aegis-terminal-top">
        <span>Docker Compose · quickstart</span>
        <button type="button" onClick={copy}>
          {status === "copied" ? (
            <IconCheck size={16} aria-hidden="true" />
          ) : (
            <IconCopy size={16} aria-hidden="true" />
          )}
          {status === "copied" ? "Copied" : "Copy commands"}
        </button>
      </div>
      <pre tabIndex={0} aria-label="Aegis installation commands">
        <code>{aegisQuickstart}</code>
      </pre>
      <p role="status" aria-live="polite">
        {status === "copied"
          ? "Commands copied to clipboard."
          : status === "failed"
            ? "Clipboard unavailable. Select and copy the commands above."
            : "Run on your own Docker host."}
      </p>
    </div>
  );
}
