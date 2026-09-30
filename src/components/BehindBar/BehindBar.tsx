import { barFrames } from "../../data/bar";
import { Photo } from "../Photo";
import { Reveal } from "../motion/Reveal";

export function BehindBar() {
  return (
    <section className="bg-cream px-page py-8 pb-24 lg:pb-36">
      <p className="type-label text-forest">Behind the bar</p>
      <div className="mt-10 grid grid-cols-12 gap-x-4 gap-y-10 lg:gap-x-6">
        {barFrames.map((frame, index) => (
          <Reveal key={frame.number} clip delay={index * 80} className={frame.className}>
            <figure>
              <div
                className={`overflow-hidden bg-sage/30 ${
                  frame.number === "03" ? "aspect-[3/5]" : frame.number === "02" ? "aspect-[4/5]" : "aspect-[4/5]"
                }`}
              >
                <Photo
                  id={frame.imageId}
                  alt={frame.alt}
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="h-full w-full object-cover"
                />
              </div>
              <figcaption className="type-label mt-3 text-forest">
                {frame.number}
                <span className="mx-2 text-dust">/</span>
                {frame.title}
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
