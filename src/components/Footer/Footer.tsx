const links = [
  { href: "#story", label: "Story" },
  { href: "#menu", label: "Menu" },
  { href: "#truck", label: "Truck" },
  { href: "#journal", label: "Journal" },
];

export function Footer() {
  return (
    <footer className="bg-cream px-page py-14 text-espresso lg:py-16">
      <div className="grid gap-12 border-t border-espresso/15 pt-10 md:grid-cols-3">
        <div>
          <p className="type-label">Artisan Brews</p>
          <p className="type-display mt-4 text-3xl">Coffee that moves.</p>
        </div>
        <nav className="flex flex-col gap-3" aria-label="Footer">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="type-label w-fit hover:text-forest">
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex flex-col gap-2 text-sm leading-relaxed">
          <a href="mailto:hello@artisanbrews.com" className="w-fit hover:text-forest">
            hello@artisanbrews.com
          </a>
          <a href="tel:+917337545226" className="w-fit hover:text-forest">
            +91 7337545226
          </a>
        </div>
      </div>
      <p className="mt-16 text-xs tracking-[0.14em] text-espresso/55">© 2026 Artisan Brews</p>
    </footer>
  );
}
