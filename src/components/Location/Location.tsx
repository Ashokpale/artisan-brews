import { directionsUrl, place } from "../../data/locations";
import { LineReveal } from "../motion/LineReveal";

export function Location() {
  return (
    <section id="location" className="bg-cream px-page py-24 lg:py-36">
      <div className="grid items-start gap-14 lg:grid-cols-12">
        <LineReveal
          lines={["Where's", "the truck?"]}
          className="type-display text-[clamp(3.8rem,8vw,7.2rem)] lg:col-span-6"
        />
        <div className="flex flex-col gap-10 lg:col-span-5 lg:col-start-8">
          <div>
            <p className="type-label flex items-center gap-3 text-forest">
              <span className="h-px w-8 bg-honey" />
              The stop
            </p>
            <p className="type-display mt-4 text-[clamp(2.4rem,4.5vw,3.6rem)]">{place.name}</p>
            <address className="mt-4 text-lg leading-relaxed text-espresso/80 not-italic">
              {place.address.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>
          </div>
          <div>
            <p className="type-label text-forest">{place.hoursLabel}</p>
            <p className="mt-3 text-lg text-espresso/80">{place.hours}</p>
          </div>
          <a href={directionsUrl} target="_blank" rel="noreferrer" className="link-arrow text-espresso">
            Get directions <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
