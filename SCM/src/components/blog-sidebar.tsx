import { Link } from "@tanstack/react-router";
import casaDigital from "@/assets/casa-digital.jpg";
import { allTags, archive } from "@/data/posts";

export function BlogSidebar() {
  return (
    <aside style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
      {/* Casa Digital */}
      <div
        className="rounded-2xl bg-olive-deep text-cream"
        style={{ padding: "2rem" }}
      >
        <h2
          className="font-serif text-xl text-cream"
          style={{ marginBottom: "1rem" }}
        >
          Casa Digital Santo Elias
        </h2>
        <p
          className="text-xs leading-relaxed text-cream/70"
          style={{ marginBottom: "1.5rem" }}
        >
          Um espaço de convergência tecnológica e social para os jovens da nossa comunidade, onde
          nascem os filmes do TV de Rua.
        </p>
        <img
          src={casaDigital}
          alt="Câmera de cinema e computador na Casa Digital"
          loading="lazy"
          width={800}
          height={600}
          className="aspect-video w-full rounded object-cover"
          style={{ marginBottom: "1.5rem" }}
        />
        <Link
          to="/sobre"
          className="block w-full border border-olive text-center text-[10px] font-bold uppercase tracking-widest text-olive transition-all hover:bg-olive hover:text-olive-deep"
          style={{ padding: "0.75rem 0" }}
        >
          Conheça o espaço
        </Link>
      </div>

      {/* Marcadores */}
      <div>
        <h2
          className="text-[11px] font-bold uppercase tracking-[0.3em] text-olive-deep"
          style={{ marginBottom: "1.5rem" }}
        >
          Marcadores
        </h2>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
          {allTags.map((tag) => (
            <Link
              key={tag}
              to="/marcador/$tag"
              params={{ tag }}
              className="rounded-full border border-border bg-card text-[10px] font-bold uppercase tracking-tight text-olive-deep transition-all hover:-translate-y-0.5 hover:bg-olive/25"
              style={{ padding: "0.25rem 0.75rem" }}
            >
              {tag}
            </Link>
          ))}
        </div>
      </div>

      {/* Arquivo */}
      <div>
        <h2
          className="text-[11px] font-bold uppercase tracking-[0.3em] text-olive-deep"
          style={{ marginBottom: "1.5rem" }}
        >
          Arquivo
        </h2>
        <ul style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          {archive.map((a) => (
            <li
              key={a.year}
              className="border-b border-border text-sm"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                paddingBottom: "0.5rem",
              }}
            >
              <span className="font-serif text-lg text-olive-deep">{a.year}</span>
              <span className="text-[10px] uppercase tracking-widest text-muted-foreground">
                {a.count} {a.count === 1 ? "publicação" : "publicações"}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
