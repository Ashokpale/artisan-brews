import { useLayoutEffect, useRef } from "react";
import { gsap } from "../../lib/gsap";

type BlurWordsProps = {
  text: string;
  className?: string;
};

export function BlurWords({ text, className = "" }: BlurWordsProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const words = text.split(" ");

  useLayoutEffect(() => {
    const root = ref.current;
    if (!root) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const spans = root.querySelectorAll("span");
    const context = gsap.context(() => {
      gsap.from(spans, {
        y: 14,
        opacity: 0,
        filter: "blur(8px)",
        duration: 0.75,
        stagger: 0.035,
        ease: "power2.out",
        scrollTrigger: {
          trigger: root,
          start: "top 86%",
        },
      });
    });

    return () => context.revert();
  }, [text]);

  return (
    <p ref={ref} className={className}>
      {words.map((word, index) => (
        <span key={`${word}-${index}`} className="inline-block">
          {word}
          {index < words.length - 1 ? "\u00A0" : ""}
        </span>
      ))}
    </p>
  );
}
