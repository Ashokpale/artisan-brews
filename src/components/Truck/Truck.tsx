import { route } from "../../data/locations";
import { useParallax } from "../../hooks/useParallax";
import { LineReveal } from "../motion/LineReveal";
import { Photo } from "../Photo";

export function Truck() {
  const imageRef = useParallax<HTMLImageElement>(6);

  return (
    <section id="truck" className="bg-cream">
      <div className="relative h-[88svh] min-h-[560px] overflow-hidden bg-espresso text-cream">
        <Photo
          ref={imageRef}
          id="1442512595331-e89e73853f31"
          alt="Coffee served in warm daylight"
          sizes="100vw"
          className="absolute inset-0 h-[120%] w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-espresso/15 to-espresso/30" />
        <div className="relative z-10 flex h-full flex-col justify-end px-page pb-12 lg:pb-16">
          <LineReveal
            lines={["We don't", "stay put."]}
            className="type-display max-w-5xl text-[clamp(4rem,11vw,9rem)]"
          />
        </div>
      </div>

      <div className="px-page py-16 lg:py-28">
        <p className="max-w-md text-2xl leading-snug">
          Markets.
          <br />
          Events.
          <br />
          Neighborhoods.
          <br />
          Your street.
        </p>

        <ol className="mt-14 flex flex-col gap-5 md:mt-16 md:flex-row md:flex-wrap md:items-center md:gap-y-6">
          {route.map((stop, index) => (
            <li key={stop} className="flex items-center">
              <span className="type-display text-[clamp(1.8rem,3vw,2.8rem)]">{stop}</span>
              {index < route.length - 1 ? (
                <span className="px-4 text-3xl text-honey md:px-6" aria-hidden="true">
                  →
                </span>
              ) : null}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
