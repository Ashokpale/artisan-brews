import { LineReveal } from "../motion/LineReveal";

export function FinalCTA() {
  return (
    <section className="bg-espresso px-page py-28 text-cream lg:py-40">
      <p className="type-label text-honey">Closer than you think</p>
      <LineReveal
        lines={["Your next", "coffee is", "closer than", "you think."]}
        className="type-display mt-8 max-w-6xl text-[clamp(3.2rem,8.2vw,7.6rem)]"
      />
      <p className="mt-10 max-w-sm text-lg leading-relaxed text-cream/75">
        Find the truck.
        <br />
        Grab a cup.
        <br />
        Stay for the moment.
      </p>
      <a href="#location" className="link-arrow mt-10 text-honey">
        Find the truck <span aria-hidden="true">→</span>
      </a>
    </section>
  );
}
