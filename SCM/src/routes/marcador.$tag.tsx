import { createFileRoute, Link } from "@tanstack/react-router";
import { posts } from "@/data/posts";
import { Reveal } from "@/components/reveal";
import { PostRow } from "@/components/post-row";
import { BlogSidebar } from "@/components/blog-sidebar";

export const Route = createFileRoute("/marcador/$tag")({
  head: ({ params }) => {
    const title = `Marcador: ${params.tag} | Sítio Santo Elias`;
    const description = `Publicações do blog Sítio Santo Elias sobre ${params.tag}, em Meruoca, Ceará.`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: TagPage,
});

function TagPage() {
  const { tag } = Route.useParams();
  const filtered = posts.filter((p) => p.tags.includes(tag));

  return (
    <main style={{ maxWidth: "80rem", margin: "0 auto", padding: "3rem 1.5rem" }}>
      <Reveal>
        <header className="border-b border-border" style={{ marginBottom: "4rem", paddingBottom: "2rem" }}>
          <span className="text-[11px] font-bold uppercase tracking-[0.4em] text-olive">
            Marcador
          </span>
          <h1
            className="font-serif text-4xl text-olive-deep md:text-5xl"
            style={{ marginTop: "0.5rem" }}
          >
            {tag}
          </h1>
          <p className="text-sm text-muted-foreground" style={{ marginTop: "0.75rem" }}>
            {filtered.length} {filtered.length === 1 ? "publicação" : "publicações"}
          </p>
        </header>
      </Reveal>

      <div
        style={{ display: "flex", gap: "3rem", alignItems: "flex-start" }}
        className="flex-col md:flex-row"
      >
        <div style={{ flex: "2", display: "flex", flexDirection: "column", gap: "4rem" }}>
          {filtered.length === 0 ? (
            <p className="text-sm">
              Nenhuma publicação com este marcador.{" "}
              <Link to="/" className="border-b-2 border-olive text-olive-deep">
                Voltar ao início
              </Link>
            </p>
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
