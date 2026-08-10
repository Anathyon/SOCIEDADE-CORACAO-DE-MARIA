import { Link } from "@tanstack/react-router";
import type { Post } from "@/data/posts";

export function PostRow({ post, reverse = false }: { post: Post; reverse?: boolean }) {
  return (
    <article className={`group flex flex-col gap-8 ${reverse ? "md:flex-row-reverse" : "md:flex-row"}`}>
      <Link
        to="/post/$slug"
        params={{ slug: post.slug }}
        className="overflow-hidden rounded-xl md:w-1/2"
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
      <div className="flex flex-col justify-center md:w-1/2">
        <span className="mb-2 text-[10px] font-bold uppercase tracking-widest text-olive">
          {post.category}
        </span>
        <h3 className="mb-4 font-serif text-2xl leading-snug text-olive-deep transition-colors group-hover:text-olive">
          <Link to="/post/$slug" params={{ slug: post.slug }}>
            {post.title}
          </Link>
        </h3>
        <p className="mb-6 text-sm leading-relaxed">{post.excerpt}</p>
        <Link
          to="/post/$slug"
          params={{ slug: post.slug }}
          className="inline-block w-fit border-b-2 border-olive text-xs font-bold uppercase tracking-widest text-olive-deep"
        >
          Leia mais
        </Link>
      </div>
    </article>
  );
}
