import type { ReactNode } from "react";

type PageIntroProps = {
  eyebrow?: string;
  title: string;
  accent?: string;
  description: string;
  children?: ReactNode;
};
export function PageIntro({
  eyebrow,
  title,
  accent,
  description,
  children,
}: PageIntroProps) {
  return (
    <div className="page-intro">
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h1>
        {title}
        {accent && (
          <>
            {" "}
            <span className="theme-accent">{accent}</span>
          </>
        )}
      </h1>
      <p className="intro-description">{description}</p>
      {children && <div className="intro-actions">{children}</div>}
    </div>
  );
}
