export function InfrastructureArtwork({
  className = "",
  priority = false,
  sizes = "(max-width: 850px) calc(100vw - 5rem), (min-width: 1376px) 536px, calc(46vw - 5rem)",
}: {
  className?: string;
  priority?: boolean;
  sizes?: string;
}) {
  return (
    <figure className={`infrastructure-artwork ${className}`}>
      {/* Static export serves these optimized, authored image variants directly. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/infrastructure-studio.webp"
        srcSet="/images/infrastructure-studio-small.webp 720w, /images/infrastructure-studio-medium.webp 1080w, /images/infrastructure-studio.webp 1440w"
        sizes={sizes}
        width={1440}
        height={960}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        alt="Illustrated network switch, patch panel, security gateway, and neatly connected green Ethernet cables."
      />
      <figcaption>
        <span>Connected. Protected. Yours.</span>
        <span>Infrastructure illustration</span>
      </figcaption>
    </figure>
  );
}
