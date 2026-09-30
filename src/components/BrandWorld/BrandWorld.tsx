import { BrandMark } from "../BrandMark";
import { Photo } from "../Photo";

const cardItems = [
  ["Espresso", "69"],
  ["Latte", "149"],
  ["Mocha", "149"],
  ["Iced latte", "149"],
];

export function BrandWorld() {
  return (
    <section className="overflow-x-clip bg-cream px-page py-24 lg:py-36">
      <div className="grid items-end gap-8 lg:grid-cols-12">
        <h2 className="type-display text-[clamp(3.4rem,8vw,7rem)] lg:col-span-7">
          From the truck
          <br />
          to your hand.
        </h2>
        <p className="max-w-sm text-lg leading-relaxed text-espresso/75 lg:col-span-4 lg:col-start-9">
          Cups, bags, stickers, napkins. The same mark, wherever we stop.
        </p>
      </div>

      <div className="still scroll-row mt-14 lg:mt-20">
        <article className="piece piece-bag flex flex-col justify-between bg-forest p-6 text-cream">
          <div>
            <BrandMark className="h-9 w-9" />
            <p className="type-label mt-8 text-honey">Whole bean</p>
          </div>
          <div>
            <p className="type-display text-[clamp(2.4rem,4vw,3.4rem)]">
              House
              <br />
              blend
            </p>
            <p className="mt-4 text-sm text-cream/75">250g · Medium roast</p>
          </div>
          <span className="absolute inset-x-0 bottom-0 h-3 bg-honey" />
        </article>

        <article className="piece piece-napkin flex items-end bg-[#ebe4d6] p-6 text-forest">
          <p className="type-display text-4xl">
            Artisan
            <br />
            Brews
          </p>
        </article>

        <article className="piece piece-cup">
          <div className="relative mx-auto h-full w-[78%]">
            <div className="absolute top-0 left-1/2 h-4 w-[84%] -translate-x-1/2 bg-honey" />
            <div className="absolute inset-x-0 top-3 bottom-0 bg-cream [clip-path:polygon(10%_0,90%_0,78%_100%,22%_100%)]" />
            <div className="absolute inset-x-[12%] top-[46%] flex h-[26%] items-center justify-center bg-forest">
              <span className="type-label text-[0.62rem] text-cream">Artisan</span>
            </div>
          </div>
        </article>

        <article className="piece piece-photo overflow-hidden bg-espresso">
          <Photo
            id="1509042239860-f550ce710b93"
            alt="Ceramic cup of artisan latte"
            sizes="24vw"
            className="h-full w-full object-cover"
          />
        </article>

        <article className="piece piece-sticker flex aspect-square items-center justify-center rounded-full bg-honey text-espresso">
          <div className="px-4 text-center">
            <BrandMark className="mx-auto h-8 w-8" />
            <p className="type-label mt-3 leading-tight">
              Coffee
              <br />
              that moves
            </p>
          </div>
        </article>

        <article className="piece piece-menu flex flex-col bg-cream p-6 text-espresso shadow-[0_16px_40px_rgba(36,30,26,0.08)]">
          <p className="type-label text-forest">Menu card</p>
          <ul className="mt-6 space-y-3 text-sm">
            {cardItems.map(([name, price]) => (
              <li key={name} className="flex items-baseline justify-between gap-4 border-b border-espresso/10 pb-2">
                <span>{name}</span>
                <span className="tabular-nums">{price}</span>
              </li>
            ))}
          </ul>
          <p className="type-label mt-auto pt-6 text-forest">Artisan Brews</p>
        </article>

        <article className="piece piece-label flex flex-col justify-between bg-peach p-4 text-espresso">
          <p className="type-label">Batch</p>
          <p className="type-display text-5xl">06</p>
        </article>
      </div>
    </section>
  );
}
