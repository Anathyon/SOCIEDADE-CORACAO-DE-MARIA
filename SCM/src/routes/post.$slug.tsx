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
  const post = posts.find((p) => p.slug === slug)!;
  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 2);


  return (
    <main className="mx-auto max-w-7xl px-6 py-12">
      <Reveal>
        <div className="relative mb-16 overflow-hidden rounded-2xl bg-olive-deep">
          <img
            src={post.image}
            alt={post.imageAlt}
            width={1920}
            height={1080}
            className="aspect-[21/9] w-full object-cover opacity-70"
          />
          <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-olive-deep/90 to-transparent p-8 md:p-16">
            <span className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-olive">
              {post.category}
            </span>
            <h1 className="max-w-3xl font-serif text-3xl leading-tight text-cream md:text-5xl">
              {post.title}
            </h1>
            <p className="mt-4 font-serif text-sm italic text-cream/60">
              {post.dateLabel} • Meruoca, Ceará
            </p>
          </div>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
        <div className="md:col-span-8">
          <Reveal>
            <div className="space-y-6 text-base leading-relaxed">
              {post.body.map((p) => (
                <p key={p.slice(0, 40)}>{p}</p>
              ))}
            </div>
          </Reveal>

          {post.links && (
            <Reveal delay={100}>
              <div className="mt-12 rounded-2xl border border-border bg-card p-8">
                <h2 className="mb-6 text-[11px] font-bold uppercase tracking-[0.3em] text-olive-deep">
                  Filmes da turma
                </h2>
                <ul className="space-y-4">
                  {post.links.map((l) => (
                    <li key={l.href} className="border-b border-border pb-4 last:border-0 last:pb-0">
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

          <div className="mt-12 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
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

          <div className="mt-16 border-t border-border pt-8">
            <h2 className="mb-8 text-[11px] font-bold uppercase tracking-[0.4em] text-olive-deep">
              Continue lendo
            </h2>
            <div className="grid gap-8 sm:grid-cols-2">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  to="/post/$slug"
                  params={{ slug: r.slug }}
                  className="group block"
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
                  <h3 className="mt-4 font-serif text-lg leading-snug text-olive-deep transition-colors group-hover:text-olive">
                    {r.title}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="md:col-span-4">
          <BlogSidebar />
        </div>
      </div>
    </main>
  );
}
