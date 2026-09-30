import { Photo } from "../Photo";
import { useParallax } from "../../hooks/useParallax";
import { LineReveal } from "../motion/LineReveal";

export function Story() {
  const imageRef = useParallax<HTMLImageElement>(10);

  return (
    <section id="story" className="bg-cream px-page pb-28 pt-24 lg:pb-40 lg:pt-36">
      <p className="type-label text-forest">Our story</p>
      <LineReveal
        lines={["We don't have", "a store."]}
        className="type-display mt-8 max-w-6xl text-[clamp(3.8rem,11vw,9.2rem)]"
      />

      <div className="mt-16 ml-auto w-full overflow-hidden md:w-[82%] lg:mt-24 lg:w-[70%]">
        <div className="relative aspect-[16/10] overflow-hidden bg-sage/40">
          <Photo
            ref={imageRef}
            id="1498804103079-a6351b050096"
            alt="Someone enjoying coffee in warm daylight"
            sizes="(min-width: 1024px) 70vw, 100vw"
            className="absolute inset-x-0 top-0 h-[120%] w-full object-cover object-[center_22%]"
          />
        </div>
      </div>

      <LineReveal
        lines={["We bring", "the coffee", "to you."]}
        className="type-display mt-16 max-w-6xl text-[clamp(3.8rem,11vw,9.2rem)] lg:mt-28 lg:ml-[6%]"
      />
      <p className="mt-8 max-w-sm text-lg leading-relaxed text-espresso/80 lg:ml-[6%]">
        Great coffee doesn't need a coffee shop. The bar opens wherever people gather.
      </p>
    </section>
  );
}
