import { useEffect, useState } from "react";
import { useLenis } from "lenis/react";
import { BrandMark } from "../BrandMark";

const links = [
  { href: "#story", label: "Story" },
  { href: "#menu", label: "Menu" },
  { href: "#truck", label: "Truck" },
  { href: "#journal", label: "Journal" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const lenis = useLenis();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!lenis) return;
    if (open) lenis.stop();
    else lenis.start();
    return () => lenis.start();
  }, [lenis, open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
          open ? "bg-transparent text-cream" : scrolled ? "bg-cream text-espresso" : "bg-transparent text-cream"
        }`}
      >
        <div className="flex items-center justify-between px-page py-4 lg:py-5">
          <a href="#top" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
            <BrandMark className="h-6 w-6" />
            <span className="type-label">Artisan Brews</span>
          </a>

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
            {links.map((link) => (
              <a key={link.href} href={link.href} className="type-label transition-opacity hover:opacity-60">
                {link.label}
              </a>
            ))}
          </nav>

          <button
            type="button"
            className="type-label lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </header>

      {open ? (
        <div id="mobile-menu" className="fixed inset-0 z-40 bg-forest text-cream lg:hidden">
          <nav className="flex h-full flex-col justify-end px-page pb-14" aria-label="Mobile">
            <p className="type-label mb-8 text-honey">Mobile coffee co.</p>
            {links.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="overlay-link type-display block py-1 text-[clamp(3.2rem,14vw,5.5rem)]"
                style={{ animationDelay: `${index * 70}ms` }}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      ) : null}
    </>
  );
}
