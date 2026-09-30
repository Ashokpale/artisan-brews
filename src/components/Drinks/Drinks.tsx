import { useState } from "react";
import { drinks } from "../../data/drinks";
import { formatPrice } from "../../lib/format";
import { Photo } from "../Photo";

export function Drinks() {
  const [progress, setProgress] = useState(0);

  return (
    <section className="bg-cream py-24 lg:py-36">
      <div className="grid items-end gap-8 px-page lg:grid-cols-12">
        <h2 className="type-display text-[clamp(3.4rem,8vw,7rem)] lg:col-span-7">The good stuff.</h2>
        <p className="max-w-xs text-lg leading-relaxed text-espresso/75 lg:col-span-4 lg:col-start-9">
          Simple ingredients.
          <br />
          Carefully crafted.
        </p>
      </div>

      <div
        className="scroll-row mt-12 flex gap-4 overflow-x-auto px-page pb-2 lg:mt-16 lg:gap-6"
        onScroll={(event) => {
          const element = event.currentTarget;
          const max = element.scrollWidth - element.clientWidth;
          setProgress(max > 0 ? element.scrollLeft / max : 1);
        }}
      >
        {drinks.map((drink) => (
          <article key={drink.id} className="group w-[78vw] shrink-0 sm:w-[48vw] lg:w-[30vw]">
            <div className="aspect-[3/4] overflow-hidden bg-sage/30">
              <Photo
                id={drink.imageId}
                alt={drink.alt}
                sizes="(min-width: 1024px) 30vw, 78vw"
                className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.04]"
              />
            </div>
            <div className="mt-5 flex items-baseline justify-between gap-4">
              <h3 className="type-display text-[clamp(1.6rem,2.4vw,2.2rem)]">{drink.name}</h3>
              <p className="shrink-0 text-sm tabular-nums tracking-wide">{formatPrice(drink.price)}</p>
            </div>
            <p className="mt-2 max-w-[32ch] text-sm leading-relaxed text-espresso/70">{drink.description}</p>
          </article>
        ))}
      </div>

      <div className="mt-8 px-page">
        <div className="h-px w-full bg-espresso/15">
          <div
            className="h-px origin-left bg-honey"
            style={{ transform: `scaleX(${Math.max(progress, 0.12)})` }}
          />
        </div>
        <p className="type-label mt-4 text-forest">Scroll</p>
      </div>
    </section>
  );
}
