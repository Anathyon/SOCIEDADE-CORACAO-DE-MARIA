import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="mt-24 bg-olive-deep px-6 py-16 text-cream/60">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 md:flex-row">
        <div className="flex flex-col items-center md:items-start">
          <Link
            to="/"
            className="mb-2 font-serif text-2xl font-bold italic tracking-tight text-cream"
          >
            Sítio Santo Elias
          </Link>
          <p className="text-[10px] uppercase tracking-[0.2em]">
            Narrando o território desde 2014
          </p>
        </div>
        <div className="flex gap-8 text-sm">
          <a
            href="https://asantoelias.blogspot.com/"
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-olive"
          >
            Blog antigo
          </a>
          <a
            href="https://asantoelias.blogspot.com/feeds/posts/default"
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-olive"
          >
            RSS
          </a>
        </div>
        <p className="text-center text-[10px] uppercase tracking-widest md:text-right">
          © {new Date().getFullYear()} Sociedade Coração de Maria.
          <br />
          Feito na Serra da Meruoca, Ceará.
        </p>
      </div>
    </footer>
  );
}
