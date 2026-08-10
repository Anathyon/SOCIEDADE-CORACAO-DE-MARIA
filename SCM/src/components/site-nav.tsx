import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

const links = [
  { to: "/", label: "Início" },
  { to: "/sobre", label: "Sobre" },
];

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 bg-cream/80 px-6 py-4 backdrop-blur-md transition-shadow ${
        scrolled
          ? "border-b border-border shadow-[0_8px_30px_-24px_oklch(0.29_0.041_108.5)]"
          : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4">
        <Link to="/" className="flex min-w-0 flex-col">
          <span className="truncate font-serif text-2xl font-bold italic tracking-tight text-olive-deep">
            Sítio Santo Elias
          </span>
          <span className="truncate text-[10px] uppercase tracking-[0.2em] text-olive-deep/60">
            Sociedade Coração de Maria — SCM
          </span>
        </Link>

        <div className="flex items-center gap-6">
          <div className="hidden gap-8 text-sm font-medium uppercase tracking-widest md:flex">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="text-olive-deep/70 transition-colors hover:text-olive"
                activeProps={{ className: "text-olive-deep" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            ))}
          </div>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Abrir menu"
            aria-expanded={open}
            className="flex size-10 shrink-0 items-center justify-center rounded-full border border-border transition-all hover:bg-olive-deep hover:text-cream md:hidden"
          >
            <span className="text-lg leading-none">{open ? "×" : "+"}</span>
          </button>
        </div>
      </div>

      {open && (
        <div className="mx-auto mt-4 flex max-w-7xl flex-col gap-3 border-t border-border pt-4 text-sm uppercase tracking-widest md:hidden">
          {links.map((l) => (
            <Link key={l.to} to={l.to} onClick={() => setOpen(false)} className="text-olive-deep">
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
