import { useLayoutEffect, useRef } from "react";
import { journey } from "../../data/journey";
import { gsap } from "../../lib/gsap";
import { LineReveal } from "../motion/LineReveal";
import { Photo } from "../Photo";

export function CoffeeJourney() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const context = gsap.context(() => {
      const media = gsap.matchMedia();
      media.add("(min-width: 1024px) and (prefers-reduced-motion: no-preference)", () => {
        const distance = () => Math.max(0, track.scrollWidth - window.innerWidth);
        gsap.to(track, {
          x: () => -distance(),
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: () => `+=${distance()}`,
            pin: true,
            scrub: 0.65,
            invalidateOnRefresh: true,
            anticipatePin: 1,
          },
        });
      });
    }, section);

    return () => context.revert();
  }, []);

  return (
    <section className="relative z-10 bg-cream pt-16 lg:pt-28">
      <div ref={sectionRef} className="overflow-hidden">
      <div
        ref={trackRef}
        className="flex w-full flex-col lg:h-svh lg:w-max lg:flex-row"
      >
        <div className="flex w-full items-end px-page pb-6 pt-8 lg:h-full lg:w-screen lg:items-center lg:pb-0">
          <div>
            <p className="type-label text-forest">The ritual</p>
            <LineReveal
              lines={["From bean", "to cup."]}
              className="type-display mt-6 text-[clamp(3.8rem,9vw,8.4rem)]"
            />
          </div>
        </div>

        {journey.map((stage) => (
          <article
            key={stage.number}
            className="flex w-full flex-col justify-center gap-6 px-page py-12 lg:h-full lg:w-[78vw] lg:flex-row lg:items-center lg:gap-12 lg:py-0"
          >
            <div className="aspect-[4/5] w-full overflow-hidden bg-sage/35 lg:h-[70vh] lg:w-auto lg:max-w-[48vh] lg:shrink-0">
              <Photo
                id={stage.imageId}
                alt={stage.alt}
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="lg:max-w-xs">
              <p className="type-display text-[clamp(4.5rem,8vw,7rem)] text-sage">{stage.number}</p>
              <h3 className="type-display mt-2 text-4xl">{stage.title}</h3>
              <p className="mt-4 text-lg leading-relaxed text-espresso/80">{stage.description}</p>
            </div>
          </article>
        ))}
      </div>
      </div>
    </section>
  );
}
