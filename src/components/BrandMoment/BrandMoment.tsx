import { BlurWords } from "../motion/BlurWords";
import { LineReveal } from "../motion/LineReveal";
import { Photo } from "../Photo";

export function BrandMoment() {
  return (
    <section className="relative z-20 bg-forest text-cream">
      <div className="grid items-center gap-12 px-page py-24 lg:min-h-[88vh] lg:grid-cols-12 lg:py-32">
        <div className="lg:col-span-7">
          <p className="type-label text-honey">The idea</p>
          <LineReveal
            lines={["Good coffee", "shouldn't", "stay in one place."]}
            className="type-display mt-6 text-[clamp(3.2rem,6.6vw,6.6rem)]"
          />
          <BlurWords
            text="From morning markets to late afternoon streets, Artisan Brews brings specialty coffee wherever people gather."
            className="mt-8 max-w-md text-lg leading-relaxed text-cream/85"
          />
        </div>
        <div className="relative z-10 lg:col-span-5 lg:translate-y-[22%]">
          <div className="aspect-[4/5] overflow-hidden bg-forest">
            <Photo
              id="1495474472287-4d71bcdd2085"
              alt="Espresso pouring at the truck window"
              sizes="(min-width: 1024px) 42vw, 100vw"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
