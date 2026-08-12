import { describe, it, expect } from "vitest";
import { posts, allTags, archive, getPost } from "../data/posts";

describe("posts", () => {
  it("tem pelo menos um post", () => {
    expect(posts.length).toBeGreaterThan(0);
  });

  it("cada post tem os campos obrigatórios", () => {
    for (const post of posts) {
      expect(post.slug).toBeTruthy();
      expect(post.title).toBeTruthy();
      expect(post.category).toBeTruthy();
      expect(post.date).toMatch(/^\d{4}-\d{2}-\d{2}$/);
      expect(post.image).toBeTruthy();
      expect(Array.isArray(post.tags)).toBe(true);
      expect(Array.isArray(post.body)).toBe(true);
      expect(post.body.length).toBeGreaterThan(0);
    }
  });

  it("slugs são únicos", () => {
    const slugs = posts.map((p) => p.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });
});

describe("allTags", () => {
  it("é um array ordenado sem duplicatas", () => {
    expect(allTags).toEqual([...new Set(allTags)].sort());
  });

  it("contém todas as tags dos posts", () => {
    const expected = Array.from(new Set(posts.flatMap((p) => p.tags))).sort();
    expect(allTags).toEqual(expected);
  });
});

describe("archive", () => {
  it("é derivado corretamente dos posts", () => {
    const years = posts.map((p) => p.date.slice(0, 4));
    const uniqueYears = new Set(years);
    expect(archive.length).toBe(uniqueYears.size);
  });

  it("está ordenado do mais recente para o mais antigo", () => {
    for (let i = 1; i < archive.length; i++) {
      expect(Number(archive[i - 1].year)).toBeGreaterThanOrEqual(Number(archive[i].year));
    }
  });

  it("contagem por ano está correta", () => {
    for (const entry of archive) {
      const count = posts.filter((p) => p.date.startsWith(entry.year)).length;
      expect(entry.count).toBe(count);
    }
  });
});

describe("getPost", () => {
  it("retorna o post correto pelo slug", () => {
    const first = posts[0]!;
    expect(getPost(first.slug)).toEqual(first);
  });

  it("retorna undefined para slug inexistente", () => {
    expect(getPost("slug-que-nao-existe")).toBeUndefined();
  });
});
