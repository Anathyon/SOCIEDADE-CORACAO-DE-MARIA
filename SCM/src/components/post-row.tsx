import { Link } from "@tanstack/react-router";
import type { Post } from "@/data/posts";

export function PostRow({ post, reverse = false }: { post: Post; reverse?: boolean }) {
  return (
    <article
      className="group"
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: reverse ? "row-reverse" : "row",
          gap: "2rem",
          alignItems: "center",
          width: "100%",
        }}
        className="flex-col md:flex-row"
      >
        <Link
          to="/post/$slug"
          params={{ slug: post.slug }}
          className="overflow-hidden rounded-xl"
          style={{ flex: "1" }}
          aria-label={post.title}
        >
          <img
            src={post.image}
            alt={post.imageAlt}
            loading="lazy"
            width={1200}
            height={900}
            className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </Link>

        <div
          style={{
            flex: "1",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <span
            className="text-[10px] font-bold uppercase tracking-widest text-olive"
            style={{ marginBottom: "0.5rem" }}
          >
            {post.category}
          </span>
          <h3
            className="font-serif text-2xl leading-snug text-olive-deep transition-colors group-hover:text-olive"
            style={{ marginBottom: "1rem" }}
          >
            <Link to="/post/$slug" params={{ slug: post.slug }}>
              {post.title}
            </Link>
          </h3>
          <p className="text-sm leading-relaxed" style={{ marginBottom: "1.5rem" }}>
            {post.excerpt}
          </p>
          <Link
            to="/post/$slug"
            params={{ slug: post.slug }}
            className="inline-block w-fit border-b-2 border-olive text-xs font-bold uppercase tracking-widest text-olive-deep"
            tabIndex={-1}
            aria-hidden
          >
            Leia mais
          </Link>
        </div>
      </div>
    </article>
  );
}
