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
    <div className="max-w-4xl mb-14">
      {eyebrow ? (
        <p className="theme-accent-strong mb-4 text-sm font-mono uppercase tracking-[0.3em]">
          {eyebrow}
        </p>
      ) : null}
      <h1 className="theme-heading mb-6 font-mono text-4xl font-bold uppercase tracking-wider md:text-5xl">
        {title}{" "}
        {accent ? <span className="theme-accent">{accent}</span> : null}
      </h1>
      <div className="theme-rule mb-6 h-1 w-24" />
      <p className="theme-copy text-lg leading-relaxed">{description}</p>
    </div>
  );
}
