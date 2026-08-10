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
    <main className="mx-auto max-w-7xl px-6 py-12">
      <Reveal>
        <header className="mb-16 border-b border-border pb-8">
          <span className="text-[11px] font-bold uppercase tracking-[0.4em] text-olive">
            Marcador
          </span>
          <h1 className="mt-2 font-serif text-4xl text-olive-deep md:text-5xl">{tag}</h1>
          <p className="mt-3 text-sm text-muted-foreground">
            {filtered.length} {filtered.length === 1 ? "publicação" : "publicações"}
          </p>
        </header>
      </Reveal>

      <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
        <div className="space-y-16 md:col-span-8">
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
        <div className="md:col-span-4">
          <BlogSidebar />
        </div>
      </div>
    </main>
  );
}
