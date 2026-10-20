type Heading = { id: string; level: number; text: string };

export function ReadingContents({
  headings,
  title,
  label,
  mobile = false,
}: {
  headings: Heading[];
  title: string;
  label: string;
  mobile?: boolean;
}) {
  if (!headings.length) return null;
  const links = (
    <nav aria-label={label} className="reading-contents-links">
      {headings.map((heading) => (
        <a
          key={`${heading.level}-${heading.id}`}
          href={`#${heading.id}`}
          className={heading.level === 3 ? "reading-subsection" : undefined}
        >
          {heading.text}
        </a>
      ))}
    </nav>
  );
  if (mobile) {
    return (
      <details className="reading-contents-mobile">
        <summary>
          {title}<span aria-hidden="true">↓</span>
        </summary>
        {links}
      </details>
    );
  }
  return (
    <section className="reading-contents-desktop glass-panel p-8">
      <h2 className="theme-heading mb-4 text-xl font-bold">{title}</h2>
      {links}
    </section>
  );
}
