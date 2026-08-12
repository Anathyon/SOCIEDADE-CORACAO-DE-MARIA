import { describe, it, expect, beforeEach, vi } from "vitest";
import { describeError, consumeLastCapturedError } from "../lib/error-capture";

describe("describeError", () => {
  it("descreve um Error simples", () => {
    const err = new Error("algo deu errado");
    const result = describeError(err);
    expect(result).toContain("algo deu errado");
  });

  it("descreve uma string diretamente", () => {
    expect(describeError("mensagem de erro")).toBe("mensagem de erro");
  });

  it("serializa objetos não-Error", () => {
    expect(describeError({ code: 42 })).toBe('{"code":42}');
  });

  it("inclui a cadeia de causa (cause chain)", () => {
    const cause = new Error("causa raiz");
    const err = new Error("erro externo", { cause });
    const result = describeError(err);
    expect(result).toContain("erro externo");
    expect(result).toContain("causa raiz");
  });

  it("limita o tamanho da saída a 8000 caracteres", () => {
    const err = new Error("x".repeat(10_000));
    expect(describeError(err).length).toBeLessThanOrEqual(8_000);
  });
});

describe("consumeLastCapturedError", () => {
  beforeEach(() => {
    // Limpar qualquer erro capturado anteriormente
    consumeLastCapturedError();
  });

  it("retorna undefined quando não há erro capturado", () => {
    expect(consumeLastCapturedError()).toBeUndefined();
  });

  it("consome o erro apenas uma vez", () => {
    // Disparar captura via console.error
    const err = new Error("teste de captura");
    console.error(err);
    const first = consumeLastCapturedError();
    expect(first).toBeDefined();
    // Segunda chamada deve retornar undefined
    expect(consumeLastCapturedError()).toBeUndefined();
  });
});
