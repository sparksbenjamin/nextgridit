const artworks = {
  networks: {
    src: "/images/infrastructure-studio",
    alt: "Illustrated network switch, patch panel, security gateway, and neatly connected green Ethernet cables.",
    caption: "Connected. Protected. Yours.",
    label: "Infrastructure illustration",
  },
  security: {
    src: "/images/service-security",
    alt: "Brushed-metal shield, magnifying glass, and a sealed report with a green wax seal on a dark green studio background.",
    caption: "Found. Explained. Fixed.",
    label: "Security assessment illustration",
  },
  handoff: {
    src: "/images/service-handoff",
    alt: "A ring of keys beside a polished lock cylinder on a dark green studio background.",
    caption: "Access. Ownership. Yours.",
    label: "Handover illustration",
  },
} as const;

export type ServiceArtworkVariant = keyof typeof artworks;

export function ServiceArtwork({
  variant = "networks",
  className = "",
  priority = false,
  sizes = "(max-width: 850px) calc(100vw - 5rem), (min-width: 1376px) 536px, calc(46vw - 5rem)",
}: {
  variant?: ServiceArtworkVariant;
  className?: string;
  priority?: boolean;
  sizes?: string;
}) {
  const art = artworks[variant];
  return (
    <figure className={`infrastructure-artwork ${className}`}>
      {/* Static export serves these optimized, authored image variants directly. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`${art.src}.webp`}
        srcSet={`${art.src}-small.webp 720w, ${art.src}-medium.webp 1080w, ${art.src}.webp 1440w`}
        sizes={sizes}
        width={1440}
        height={960}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        alt={art.alt}
      />
      <figcaption>
        <span>{art.caption}</span>
        <span>{art.label}</span>
      </figcaption>
    </figure>
  );
}
