import { useLayoutEffect, useRef } from "react";
import { gsap } from "../lib/gsap";

export function useParallax<T extends HTMLElement>(distance = 8) {
  const ref = useRef<T>(null);

  useLayoutEffect(() => {
    const element = ref.current;
    const frame = element?.parentElement;
    if (!element || !frame) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const context = gsap.context(() => {
      gsap.fromTo(
        element,
        { yPercent: distance },
        {
          yPercent: -distance,
          ease: "none",
          scrollTrigger: {
            trigger: frame,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        },
      );
    });

    return () => context.revert();
  }, [distance]);

  return ref;
}
