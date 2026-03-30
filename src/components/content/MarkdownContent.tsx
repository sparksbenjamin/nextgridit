import type { HTMLAttributes, ReactNode } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { slugify } from "@/lib/guides";
import { cn } from "@/lib/utils";

function extractText(children: ReactNode): string {
  if (typeof children === "string" || typeof children === "number") {
    return String(children);
  }

  if (Array.isArray(children)) {
    return children.map(extractText).join("");
  }

  if (children && typeof children === "object" && "props" in children) {
    return extractText((children as { props?: { children?: ReactNode } }).props?.children);
  }

  return "";
}

function renderHeading(
  level: "h2" | "h3",
  props: HTMLAttributes<HTMLHeadingElement>,
) {
  const text = extractText(props.children);
  const id = slugify(text);
  const Tag = level;

  return (
    <Tag id={id} className={cn("scroll-mt-28", props.className)}>
      {props.children}
    </Tag>
  );
}

export function MarkdownContent({
  className,
  content,
}: {
  className?: string;
  content: string;
}) {
  return (
    <div className={cn("guide-markdown", className)}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h2: (props) => renderHeading("h2", props),
          h3: (props) => renderHeading("h3", props),
          a: ({ href, ...props }) => {
            const isExternal = href?.startsWith("http");

            return (
              <a
                href={href}
                rel={isExternal ? "noreferrer noopener" : undefined}
                target={isExternal ? "_blank" : undefined}
                {...props}
              />
            );
          },
          table: ({ children }) => (
            <div className="guide-table-wrapper">
              <table>{children}</table>
            </div>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
