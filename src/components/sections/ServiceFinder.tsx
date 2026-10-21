"use client";

import { useId, useRef, useState, type KeyboardEvent } from "react";
import Link from "next/link";
import { IconArrowRight, IconCheck } from "@tabler/icons-react";

const options = [
  {
    tab: "Connect",
    label: "Networks, cabling & cloud",
    title: "A better foundation for your workday.",
    description:
      "Unreliable Wi-Fi. A new office. Microsoft 365 that needs attention. Get the physical connections and digital systems working together.",
    steps: ["Plan the connections", "Build and configure", "Test and document"],
    links: [
      ["Networks, Wi-Fi & cabling", "/services/network-wifi/"],
      ["Microsoft 365 & cloud", "/services/microsoft-365/"],
      ["Camera systems", "/services/camera-systems/"],
    ],
    illustration: ["Your people", "Your network", "Your systems"],
  },
  {
    tab: "Protect",
    label: "Security & practical risk",
    title: "Know where you stand. Know what to fix.",
    description:
      "Understand the weaknesses in your environment, what they mean for the business, and which improvements deserve attention first.",
    steps: [
      "Assess the environment",
      "Prioritize the findings",
      "Plan the improvements",
    ],
    links: [
      ["Vulnerability assessments", "/services/vulnerability-assessment/"],
      ["HIPAA security assessments", "/services/hipaa-security-assessment/"],
      ["Infrastructure hardening", "/services/infrastructure-hardening/"],
    ],
    illustration: ["Understand", "Prioritize", "Strengthen"],
  },
  {
    tab: "Take control",
    label: "Transitions & ownership",
    title: "Your technology. The keys in your hands.",
    description:
      "Changing providers or recovering access should end with an environment your organization can understand, operate, and own.",
    steps: [
      "Map access and ownership",
      "Coordinate the transition",
      "Verify the handoff",
    ],
    links: [
      ["Changing IT providers", "/services/msp-transition/"],
      ["Vendor lockout recovery", "/services/vendor-lockout-recovery/"],
      ["Our project process", "/process/"],
    ],
    illustration: ["Access", "Documentation", "Ownership"],
  },
];

export function ServiceFinder() {
  const [selected, setSelected] = useState(0);
  const id = useId();
  const buttons = useRef<(HTMLButtonElement | null)[]>([]);
  function move(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let next = index;
    if (event.key === "ArrowRight") next = (index + 1) % options.length;
    else if (event.key === "ArrowLeft")
      next = (index + options.length - 1) % options.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = options.length - 1;
    else return;
    event.preventDefault();
    setSelected(next);
    buttons.current[next]?.focus();
  }
  return (
    <div className="service-finder">
      <div
        className="finder-tabs"
        role="tablist"
        aria-label="What do you need help with?"
      >
        {options.map((option, index) => (
          <button
            key={option.tab}
            ref={(element) => {
              buttons.current[index] = element;
            }}
            type="button"
            role="tab"
            id={`${id}-tab-${index}`}
            aria-selected={selected === index}
            aria-controls={`${id}-panel-${index}`}
            tabIndex={selected === index ? 0 : -1}
            onClick={() => setSelected(index)}
            onKeyDown={(event) => move(event, index)}
          >
            <span>{option.tab}</span>
            <IconArrowRight size={19} aria-hidden="true" />
          </button>
        ))}
      </div>
      {options.map((option, index) => (
        <div
          key={option.tab}
          className="finder-panel"
          role="tabpanel"
          id={`${id}-panel-${index}`}
          aria-labelledby={`${id}-tab-${index}`}
          hidden={selected !== index}
          tabIndex={0}
        >
          <div className="finder-copy">
            <p className="eyebrow">{option.label}</p>
            <h3>{option.title}</h3>
            <p>{option.description}</p>
            <ul className="finder-checks">
              {option.steps.map((step) => (
                <li key={step}>
                  <IconCheck size={17} aria-hidden="true" />
                  {step}
                </li>
              ))}
            </ul>
          </div>
          <div className="finder-paths">
            <div className="connection-path" aria-hidden="true">
              {option.illustration.map((label, step) => (
                <div key={label}>
                  <span>{String(step + 1).padStart(2, "0")}</span>
                  <strong>{label}</strong>
                </div>
              ))}
            </div>
            <div className="finder-links">
              {option.links.map(([label, href]) => (
                <Link key={href} href={href}>
                  {label}
                  <IconArrowRight size={18} aria-hidden="true" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
