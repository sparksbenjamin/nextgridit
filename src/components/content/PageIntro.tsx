type PageIntroProps = {
  eyebrow?: string;
  title: string;
  accent?: string;
  description: string;
};

export function PageIntro({
  eyebrow,
  title,
  accent,
  description,
}: PageIntroProps) {
  return (
    <div className="page-intro mb-14 max-w-4xl">
      {eyebrow ? (
        <p className="theme-accent-strong mb-4 font-mono text-xs font-semibold uppercase tracking-[0.22em]">
          {eyebrow}
        </p>
      ) : null}
      <h1 className="theme-heading mb-6 text-4xl font-bold leading-[1.02] tracking-[-0.06em] md:text-6xl">
        {title}{" "}
        {accent ? <span className="theme-accent">{accent}</span> : null}
      </h1>
      <div className="page-intro-rule mb-6 h-1 w-16" />
      <p className="theme-copy max-w-3xl text-lg leading-relaxed">{description}</p>
    </div>
  );
}
