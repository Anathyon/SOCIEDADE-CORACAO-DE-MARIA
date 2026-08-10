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
    <main className="mx-auto max-w-7xl px-6 py-12">
      <section className="reveal-in mb-24">
        <div className="group relative overflow-hidden rounded-2xl bg-olive-deep">
          <img
            src={featured.image}
            alt={featured.imageAlt}
            width={1920}
            height={1080}
            className="aspect-[16/10] w-full object-cover opacity-70 transition-transform duration-700 group-hover:scale-105 md:aspect-[21/9]"
          />
          <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-olive-deep/90 to-transparent p-8 md:p-16">
            <span className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-olive">
              Destaque {featured.category}
            </span>
            <h1 className="mb-6 max-w-3xl font-serif text-3xl leading-tight text-cream md:text-6xl">
              {featured.title}
            </h1>
            <div className="flex flex-wrap items-center gap-6">
              <Link
                to="/post/$slug"
                params={{ slug: featured.slug }}
                className="rounded-full bg-olive px-8 py-3 text-xs font-bold uppercase tracking-widest text-olive-deep transition-colors hover:bg-cream"
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

      <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
        <div className="space-y-16 md:col-span-8">
          <div className="flex flex-col gap-4 border-b border-border pb-4 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="text-[11px] font-bold uppercase tracking-[0.4em] text-olive-deep">
              Últimas publicações
            </h2>
            <label className="min-w-0 sm:w-64">
              <span className="sr-only">Pesquisar no blog</span>
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Pesquisar no blog..."
                className="w-full border-b border-border bg-transparent pb-1 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-olive-deep"
              />
            </label>
          </div>

          {filtered.length === 0 ? (
            <p className="text-sm">Nenhuma publicação encontrada para “{query}”.</p>
          ) : (
            filtered.map((post, i) => (
              <Reveal key={post.slug} delay={i * 90}>
                <PostRow post={post} reverse={i % 2 === 1} />
              </Reveal>
            ))
          )}
        </div>

        <div className="md:col-span-4">
          <BlogSidebar />
        </div>
      </div>
    </main>
  );
}
