import { useLayoutEffect, useRef } from "react";
import { gsap } from "../../lib/gsap";

type LineRevealProps = {
  lines: string[];
  className?: string;
  as?: "h1" | "h2";
};

export function LineReveal({ lines, className = "", as = "h2" }: LineRevealProps) {
  const ref = useRef<HTMLHeadingElement>(null);

  useLayoutEffect(() => {
    const root = ref.current;
    if (!root) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const rows = root.querySelectorAll<HTMLElement>("[data-line]");
    const context = gsap.context(() => {
      gsap.from(rows, {
        yPercent: 110,
        duration: 1.05,
        stagger: 0.09,
        ease: "power3.out",
        scrollTrigger: {
          trigger: root,
          start: "top 84%",
        },
      });
    });

    return () => context.revert();
  }, []);

  const Tag = as;

  return (
    <Tag ref={ref} className={className}>
      {lines.map((line, index) => (
        <span key={`${line}-${index}`} className="block overflow-hidden py-[0.06em]">
          <span data-line className="block">
            {line}
          </span>
        </span>
      ))}
    </Tag>
  );
}
