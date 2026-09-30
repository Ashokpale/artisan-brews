import { useState } from "react";
import { menu, type MenuCategoryId } from "../../data/menu";
import { formatPrice } from "../../lib/format";

export function Menu() {
  const [active, setActive] = useState<MenuCategoryId>("coffee");
  const category = menu.find((item) => item.id === active) ?? menu[0];

  return (
    <section id="menu" className="bg-cream px-page py-24 lg:py-36">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-4">
          <h2 className="type-display text-[clamp(3.6rem,8vw,6.5rem)]">The menu</h2>
          <div
            role="tablist"
            aria-label="Menu categories"
            className="mt-8 flex gap-6 overflow-x-auto lg:mt-12 lg:flex-col lg:gap-3"
          >
            {menu.map((item) => {
              const selected = item.id === active;
              return (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  id={`tab-${item.id}`}
                  aria-selected={selected}
                  aria-controls="menu-panel"
                  className={`type-label shrink-0 pb-2 text-left transition-colors ${
                    selected ? "text-espresso" : "text-espresso/40 hover:text-espresso"
                  }`}
                  onClick={() => setActive(item.id)}
                >
                  <span
                    className={`mr-3 inline-block h-px align-middle ${selected ? "w-8 bg-honey" : "w-4 bg-transparent"}`}
                  />
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>

        <div
          id="menu-panel"
          role="tabpanel"
          aria-labelledby={`tab-${category.id}`}
          key={category.id}
          className="menu-panel lg:col-span-7 lg:col-start-6"
        >
          {category.groups.map((group) => (
            <div key={group.label} className="mt-10 first:mt-0">
              <p className="type-label text-forest">{group.label}</p>
              <ul className="mt-2">
                {group.items.map((item) => (
                  <li key={item.name} className="border-b border-espresso/10 py-4">
                    <div className="flex items-baseline gap-3">
                      <span className="type-display max-w-[68%] text-[clamp(1.15rem,2.2vw,1.85rem)]">
                        {item.name}
                      </span>
                      <span className="mb-[0.35em] h-px min-w-4 flex-1 border-b border-dotted border-espresso/35" />
                      <span className="shrink-0 text-sm tabular-nums tracking-wide">{formatPrice(item.price)}</span>
                    </div>
                    {item.note ? (
                      <p className="mt-1 max-w-[42ch] text-sm leading-snug text-espresso/60">{item.note}</p>
                    ) : null}
                  </li>
                ))}
              </ul>
            </div>
          ))}
          {category.note ? <p className="mt-8 text-sm text-espresso/55">{category.note}</p> : null}
        </div>
      </div>
    </section>
  );
}
