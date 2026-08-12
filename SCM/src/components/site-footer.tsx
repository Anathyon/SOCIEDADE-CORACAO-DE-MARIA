import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer
      className="bg-olive-deep text-cream/60"
      style={{ marginTop: "6rem", padding: "4rem 1.5rem" }}
    >
      <div
        style={{
          maxWidth: "80rem",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "2rem",
        }}
        className="md:flex-row"
      >
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }} className="md:items-start">
          <Link
            to="/"
            className="font-serif text-2xl font-bold italic tracking-tight text-cream"
            style={{ marginBottom: "0.5rem" }}
          >
            Sítio Santo Elias
          </Link>
          <p className="text-[10px] uppercase tracking-[0.2em]">
            Narrando o território desde 2014
          </p>
        </div>

        <div style={{ display: "flex", gap: "2rem" }} className="text-sm">
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
