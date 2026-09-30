import { quotes } from "../../data/testimonials";
import { useParallax } from "../../hooks/useParallax";
import { LineReveal } from "../motion/LineReveal";
import { Photo } from "../Photo";

export function Community() {
  const imageRef = useParallax<HTMLImageElement>(8);

  return (
    <section className="bg-cream">
      <div className="relative h-[78svh] min-h-[520px] overflow-hidden bg-espresso text-cream">
        <Photo
          ref={imageRef}
          id="1521017432531-fbd92d768814"
          alt="People gathered around coffee"
          sizes="100vw"
          className="absolute inset-0 h-[120%] w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-espresso/75 via-transparent to-espresso/20" />
        <div className="relative z-10 flex h-full flex-col justify-end px-page pb-12">
          <LineReveal
            lines={["Good coffee.", "Good people."]}
            className="type-display max-w-5xl text-[clamp(3.4rem,8vw,7.2rem)]"
          />
        </div>
      </div>

      <div className="grid gap-12 px-page py-16 lg:grid-cols-2 lg:gap-24 lg:py-24">
        {quotes.map((quote) => (
          <blockquote key={quote} className="max-w-md font-display text-[clamp(1.8rem,3vw,2.7rem)] leading-[1.15] font-medium tracking-[-0.03em]">
            “{quote}”
          </blockquote>
        ))}
      </div>
    </section>
  );
}
