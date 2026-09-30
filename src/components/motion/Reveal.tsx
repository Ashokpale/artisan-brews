import { useEffect, useRef, type ReactNode } from "react";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";

type RevealProps = {
  children: ReactNode;
  className?: string;
  clip?: boolean;
  delay?: number;
};

export function Reveal({ children, className = "", clip = false, delay = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    if (reduced || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      element.dataset.visible = "true";
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          element.dataset.visible = "true";
          observer.disconnect();
        }
      },
      { threshold: 0.18, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [reduced]);

  return (
    <div
      ref={ref}
      data-reveal
      data-clip={clip ? "" : undefined}
      className={className}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
