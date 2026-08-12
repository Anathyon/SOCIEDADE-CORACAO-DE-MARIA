import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { posts } from "@/data/posts";
import { Reveal } from "@/components/reveal";
import { PostRow } from "@/components/post-row";
import { BlogSidebar } from "@/components/blog-sidebar";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sítio Santo Elias — Cultura, Audiovisual e Agroecologia em Meruoca" },
      {
        name: "description",
        content:
          "Blog da Sociedade Coração de Maria: projeto TV de Rua, feiras de agroecologia, cultura popular e agricultura familiar na Serra da Meruoca, Ceará.",
      },
      { property: "og:title", content: "Sítio Santo Elias — Cultura e Agroecologia na Meruoca" },
      {
        property: "og:description",
        content:
          "Publicações sobre audiovisual, agroecologia e cultura popular feitas pela Sociedade Coração de Maria em Meruoca, Ceará.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const [query, setQuery] = useState("");
  const featured = posts[0]!;
  const rest = posts.slice(1);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return rest;
    return rest.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.excerpt.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q)),
    );
  }, [query, rest]);

  return (
    <main style={{ maxWidth: "80rem", margin: "0 auto", padding: "3rem 1.5rem" }}>
      {/* Post em destaque */}
      <section style={{ marginBottom: "6rem" }}>
        <div className="reveal-in group relative overflow-hidden rounded-2xl bg-olive-deep">
          <img
            src={featured.image}
            alt={featured.imageAlt}
            width={1920}
            height={1080}
            className="aspect-[16/10] w-full object-cover opacity-70 transition-transform duration-700 group-hover:scale-105 md:aspect-[21/9]"
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-olive-deep/90 to-transparent"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              padding: "2rem",
            }}
          >
            <span
              className="text-xs font-medium uppercase tracking-[0.3em] text-olive"
              style={{ marginBottom: "1rem" }}
            >
              Destaque {featured.category}
            </span>
            <h1
              className="font-serif text-3xl leading-tight text-cream md:text-6xl"
              style={{ maxWidth: "48rem", marginBottom: "1.5rem" }}
            >
              {featured.title}
            </h1>
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "1.5rem" }}>
              <Link
                to="/post/$slug"
                params={{ slug: featured.slug }}
                className="rounded-full bg-olive text-xs font-bold uppercase tracking-widest text-olive-deep transition-colors hover:bg-cream"
                style={{ padding: "0.75rem 2rem" }}
              >
                Ler publicação
              </Link>
              <span className="font-serif text-sm italic text-cream/60">
                {featured.dateLabel} • Meruoca, Ceará
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Lista de posts + sidebar */}
      <div
        style={{ display: "flex", gap: "3rem", alignItems: "flex-start" }}
        className="flex-col md:flex-row"
      >
        <div style={{ flex: "2", display: "flex", flexDirection: "column", gap: "4rem" }}>
          {/* Cabeçalho da lista */}
          <div
            className="border-b border-border"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              paddingBottom: "1rem",
            }}
          >
            <h2 className="text-[11px] font-bold uppercase tracking-[0.4em] text-olive-deep">
              Últimas publicações
            </h2>
            <label style={{ minWidth: 0, width: "16rem" }}>
              <span className="sr-only">Pesquisar no blog</span>
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Pesquisar no blog..."
                className="w-full border-b border-border bg-transparent text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-olive-deep"
                style={{ paddingBottom: "0.25rem" }}
              />
            </label>
          </div>

          {filtered.length === 0 ? (
            <p className="text-sm">Nenhuma publicação encontrada para "{query}".</p>
          ) : (
            filtered.map((post, i) => (
              <Reveal key={post.slug} delay={i * 90}>
                <PostRow post={post} reverse={i % 2 === 1} />
              </Reveal>
            ))
          )}
        </div>

        <div style={{ flex: "1" }}>
          <BlogSidebar />
        </div>
      </div>
    </main>
  );
}
