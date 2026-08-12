import { describe, it, expect } from "vitest";
import { cn } from "../lib/utils";

describe("cn", () => {
  it("combina classes simples", () => {
    expect(cn("foo", "bar")).toBe("foo bar");
  });

  it("ignora valores falsy", () => {
    expect(cn("foo", undefined, null, false, "bar")).toBe("foo bar");
  });

  it("resolve conflitos do tailwind (última classe vence)", () => {
    expect(cn("p-4", "p-8")).toBe("p-8");
    expect(cn("text-red-500", "text-blue-500")).toBe("text-blue-500");
  });

  it("aceita objetos condicionais", () => {
    expect(cn({ "font-bold": true, italic: false })).toBe("font-bold");
  });

  it("retorna string vazia sem argumentos", () => {
    expect(cn()).toBe("");
  });
});
