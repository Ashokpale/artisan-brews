import { useLayoutEffect, useRef } from "react";
import { gsap } from "../../lib/gsap";
import { Photo } from "../Photo";

const lines = ["Coffee", "That", "Moves."];

export function Hero() {
  const rootRef = useRef<HTMLElement>(null);
  const mediaRef = useRef<HTMLDivElement>(null);
  const copyRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const root = rootRef.current;
    const media = mediaRef.current;
    const copy = copyRef.current;
    if (!root || !media || !copy) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const context = gsap.context(() => {
      const timeline = gsap.timeline({ defaults: { ease: "power3.out" } });
      timeline.fromTo(media, { scale: 1.14 }, { scale: 1, duration: 2.2, ease: "power2.out" }, 0);
      timeline.from("[data-hero-fade]", { y: 18, autoAlpha: 0, duration: 0.8 }, 0.4);
      timeline.from("[data-hero-line]", { yPercent: 110, duration: 1.05, stagger: 0.12 }, 0.55);
      timeline.from("[data-hero-support]", { y: 18, autoAlpha: 0, duration: 0.75 }, 1.15);
      timeline.from("[data-hero-cta]", { y: 14, autoAlpha: 0, duration: 0.7 }, 1.35);

      gsap.fromTo(
        media,
        { scale: 1 },
        {
          scale: 1.06,
          ease: "none",
          immediateRender: false,
          scrollTrigger: {
            trigger: root,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        },
      );

      gsap.to(copy, {
        y: -36,
        ease: "none",
        scrollTrigger: {
          trigger: root,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, root);

    return () => context.revert();
  }, []);

  return (
    <section id="top" ref={rootRef} className="relative h-svh min-h-[640px] overflow-hidden bg-espresso text-cream">
      <div className="absolute inset-0 overflow-hidden">
        <div ref={mediaRef} className="hero-image h-full w-full">
          <Photo
            id="1495474472287-4d71bcdd2085"
            alt="Espresso pouring into a cup"
            priority
            sizes="100vw"
            className="h-full w-full object-cover object-center"
          />
        </div>
      </div>
      <div className="hero-scrim pointer-events-none absolute inset-0" />

      <div ref={copyRef} className="relative z-10 flex h-full flex-col justify-end px-page pt-24 pb-10 lg:pb-14">
        <div className="w-full text-left">
          <p data-hero-fade className="hero-fade type-label">
            Artisan Brews
            <span className="mt-2 block text-honey">Mobile coffee co.</span>
          </p>

          <h1 className="type-display mt-5 text-left text-[clamp(3.15rem,8.6vw,7.4rem)] leading-[0.9]">
            {lines.map((line) => (
              <span key={line} className="block overflow-hidden">
                <span data-hero-line className="hero-line block">
                  {line}
                </span>
              </span>
            ))}
          </h1>

          <p data-hero-support className="hero-fade mt-6 max-w-xs text-lg leading-snug text-cream/90 sm:text-xl">
            Handcrafted coffee,
            <br />
            wherever the day takes us.
          </p>

          <div data-hero-cta className="hero-fade mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
            <a href="#menu" className="link-arrow text-honey">
              Explore menu <span aria-hidden="true">→</span>
            </a>
            <a href="#location" className="link-arrow text-cream">
              Find the truck
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
