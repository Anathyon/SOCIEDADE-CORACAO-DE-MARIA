import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { getPost, posts } from "@/data/posts";
import { Reveal } from "@/components/reveal";
import { BlogSidebar } from "@/components/blog-sidebar";

export const Route = createFileRoute("/post/$slug")({
  loader: ({ params }) => {
    const post = getPost(params.slug);
    if (!post) throw notFound();
    return { title: post.title, excerpt: post.excerpt };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Publicação não encontrada" }, { name: "robots", content: "noindex" }],
      };
    }
    const title = `${loaderData.title} | Sítio Santo Elias`;
    return {
      meta: [
        { title },
        { name: "description", content: loaderData.excerpt },
        { property: "og:title", content: title },
        { property: "og:description", content: loaderData.excerpt },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: PostPage,
});

function PostPage() {
  const { slug } = Route.useParams();
  const post = getPost(slug);

  // O loader já lança notFound() se o post não existe
  if (!post) return null;

  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <main style={{ maxWidth: "80rem", margin: "0 auto", padding: "3rem 1.5rem" }}>
      {/* Hero */}
      <Reveal>
        <div
          className="relative overflow-hidden rounded-2xl bg-olive-deep"
          style={{ marginBottom: "4rem" }}
        >
          <img
            src={post.image}
            alt={post.imageAlt}
            width={1920}
            height={1080}
            className="aspect-[21/9] w-full object-cover opacity-70"
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
              {post.category}
            </span>
            <h1
              className="font-serif text-3xl leading-tight text-cream md:text-5xl"
              style={{ maxWidth: "48rem" }}
            >
              {post.title}
            </h1>
            <p
              className="font-serif text-sm italic text-cream/60"
              style={{ marginTop: "1rem" }}
            >
              {post.dateLabel} • Meruoca, Ceará
            </p>
          </div>
        </div>
      </Reveal>

      {/* Conteúdo + sidebar */}
      <div
        style={{ display: "flex", gap: "3rem", alignItems: "flex-start" }}
        className="flex-col md:flex-row"
      >
        <div style={{ flex: "2" }}>
          {/* Corpo do post */}
          <Reveal>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }} className="text-base leading-relaxed">
              {post.body.map((p) => (
                <p key={p.slice(0, 40)}>{p}</p>
              ))}
            </div>
          </Reveal>

          {/* Links de filmes */}
          {post.links && (
            <Reveal delay={100}>
              <div
                className="rounded-2xl border border-border bg-card"
                style={{ marginTop: "3rem", padding: "2rem" }}
              >
                <h2
                  className="text-[11px] font-bold uppercase tracking-[0.3em] text-olive-deep"
                  style={{ marginBottom: "1.5rem" }}
                >
                  Filmes da turma
                </h2>
                <ul style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  {post.links.map((l) => (
                    <li
                      key={l.href}
                      className="border-b border-border last:border-0"
                      style={{ paddingBottom: "1rem" }}
                    >
                      <a
                        href={l.href}
                        target="_blank"
                        rel="noreferrer"
                        className="font-serif text-lg text-olive-deep transition-colors hover:text-olive"
                      >
                        {l.label}
                      </a>
                      {l.note && (
                        <p className="text-xs uppercase tracking-widest text-muted-foreground">
                          {l.note}
                        </p>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          )}

          {/* Tags */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginTop: "3rem" }}>
            {post.tags.map((tag) => (
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

          {/* Continue lendo */}
          <div
            className="border-t border-border"
            style={{ marginTop: "4rem", paddingTop: "2rem" }}
          >
            <h2
              className="text-[11px] font-bold uppercase tracking-[0.4em] text-olive-deep"
              style={{ marginBottom: "2rem" }}
            >
              Continue lendo
            </h2>
            <div
              style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}
            >
              {related.map((r) => (
                <Link
                  key={r.slug}
                  to="/post/$slug"
                  params={{ slug: r.slug }}
                  className="group block"
                  style={{ flex: "1", minWidth: "200px" }}
                >
                  <div className="overflow-hidden rounded-xl">
                    <img
                      src={r.image}
                      alt={r.imageAlt}
                      loading="lazy"
                      width={1200}
                      height={900}
                      className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h3
                    className="font-serif text-lg leading-snug text-olive-deep transition-colors group-hover:text-olive"
                    style={{ marginTop: "1rem" }}
                  >
                    {r.title}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div style={{ flex: "1" }}>
          <BlogSidebar />
        </div>
      </div>
    </main>
  );
}
