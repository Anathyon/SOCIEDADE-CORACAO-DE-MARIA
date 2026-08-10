import { Link } from "@tanstack/react-router";
import casaDigital from "@/assets/casa-digital.jpg";
import { allTags, archive } from "@/data/posts";

export function BlogSidebar() {
  return (
    <aside className="space-y-12">
      <div className="rounded-2xl bg-olive-deep p-8 text-cream">
        <h2 className="mb-4 font-serif text-xl text-cream">Casa Digital Santo Elias</h2>
        <p className="mb-6 text-xs leading-relaxed text-cream/70">
          Um espaço de convergência tecnológica e social para os jovens da nossa comunidade, onde
          nascem os filmes do TV de Rua.
        </p>
        <img
          src={casaDigital}
          alt="Câmera de cinema e computador na Casa Digital"
          loading="lazy"
          width={800}
          height={600}
          className="mb-6 aspect-video w-full rounded object-cover"
        />
        <Link
          to="/sobre"
          className="block w-full border border-olive py-3 text-center text-[10px] font-bold uppercase tracking-widest text-olive transition-all hover:bg-olive hover:text-olive-deep"
        >
          Conheça o espaço
        </Link>
      </div>

      <div>
        <h2 className="mb-6 text-[11px] font-bold uppercase tracking-[0.3em] text-olive-deep">
          Marcadores
        </h2>
        <div className="flex flex-wrap gap-2">
          {allTags.map((tag) => (
            <Link
              key={tag}
              to="/marcador/$tag"
              params={{ tag }}
              className="rounded-full border border-border bg-card px-3 py-1 text-[10px] font-bold uppercase tracking-tight text-olive-deep transition-all hover:-translate-y-0.5 hover:bg-olive/25"
            >
              {tag}
            </Link>
          ))}
        </div>
      </div>

      <div>
        <h2 className="mb-6 text-[11px] font-bold uppercase tracking-[0.3em] text-olive-deep">
          Arquivo
        </h2>
        <ul className="space-y-3">
          {archive.map((a) => (
            <li
              key={a.year}
              className="flex items-center justify-between border-b border-border pb-2 text-sm"
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
