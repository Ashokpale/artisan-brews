import { journal } from "../../data/journal";
import { Photo } from "../Photo";

const frames = [
  "col-span-2 aspect-[4/5] lg:row-span-2 lg:aspect-auto lg:min-h-[560px]",
  "aspect-square",
  "aspect-[3/4]",
  "col-span-2 aspect-[16/10]",
  "aspect-[3/4]",
  "aspect-square",
];

export function Journal() {
  return (
    <section id="journal" className="bg-cream px-page py-24 lg:py-36">
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <h2 className="type-display text-[clamp(3.2rem,7vw,6.4rem)]">
          Follow the
          <br />
          journey.
        </h2>
        <a
          href="https://www.instagram.com/artisan_brews.hyderabad?stkn=MTF2amlqZjRhZHE3"
          target="_blank"
          rel="noreferrer"
          className="type-label text-dust"
        >
          @artisanbrews
        </a>
      </div>

      <div className="mt-12 grid grid-cols-2 gap-3 lg:mt-16 lg:grid-cols-4 lg:gap-4">
        {journal.map((shot, index) => (
          <a
            key={shot.caption}
            href="https://instagram.com/artisanbrews"
            target="_blank"
            rel="noreferrer"
            className={`group relative block overflow-hidden bg-sage/30 ${frames[index] ?? ""}`}
          >
            <Photo
              id={shot.imageId}
              alt={shot.alt}
              sizes="(min-width: 1024px) 25vw, 50vw"
              className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105"
            />
            <span className="journal-overlay absolute inset-0 flex items-end justify-between bg-espresso/40 p-4 text-cream transition duration-500">
              <span className="type-label">{shot.caption}</span>
              <span aria-hidden="true">→</span>
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
