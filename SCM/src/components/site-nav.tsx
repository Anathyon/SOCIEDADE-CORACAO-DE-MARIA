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
      style={{ padding: "1rem 1.5rem" }}
      className={`sticky top-0 z-50 bg-cream/80 backdrop-blur-md transition-shadow ${
        scrolled ? "border-b border-border shadow-sm" : "border-b border-transparent"
      }`}
    >
      <div
        style={{
          maxWidth: "80rem",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Link
          to="/"
          style={{ display: "flex", alignItems: "center" }}
        >
          <img
            src="/Sociedade Coração de Maria SCM 1.png"
            alt="Logo Sociedade Coração de Maria"
            style={{ height: "4.5rem", width: "auto" }}
          />
        </Link>

        <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
          <div
            className="hidden md:flex text-sm font-medium uppercase tracking-widest"
            style={{ gap: "2rem" }}
          >
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
            style={{ width: "2.5rem", height: "2.5rem" }}
            className="md:hidden shrink-0 flex items-center justify-center rounded-full border border-border transition-all hover:bg-olive-deep hover:text-cream"
          >
            <span className="text-lg leading-none">{open ? "×" : "+"}</span>
          </button>
        </div>
      </div>

      {open && (
        <div
          className="md:hidden flex flex-col border-t border-border text-sm uppercase tracking-widest"
          style={{ maxWidth: "80rem", margin: "1rem auto 0", paddingTop: "1rem", gap: "0.75rem" }}
        >
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
