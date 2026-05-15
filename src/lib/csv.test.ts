import { describe, it, expect } from "vitest";
import { generateTransactionsCSV } from "./csv";

describe("generateTransactionsCSV", () => {
  it("should generate only headers when transactions list is empty", () => {
    const transactions: any[] = [];

    const expected = "Data,Tipo,Valor,Categoria";

    const result = generateTransactionsCSV(transactions);

    expect(result).toBe(expected);
  });

  it("should generate CSV with correct data", () => {
    const transactions = [
      {
        date: new Date("2026-05-15"),
        type: "income",
        amount: 1500,
        category: "Vendas",
      },
      {
        date: new Date("2026-05-15"),
        type: "expense",
        amount: 250,
        category: "Fornecedores",
      },
    ];

    const expected = [
      "Data,Tipo,Valor,Categoria",
      "2026-05-15,Entrada,1500,Vendas",
      "2026-05-15,Saída,250,Fornecedores",
    ].join("\n");

    const result = generateTransactionsCSV(transactions);

    expect(result).toBe(expected);
  });

  it("should support special characters", () => {
    const transactions = [
      {
        date: new Date("2026-05-16"),
        type: "expense",
        amount: 50,
        category: "Alimentação",
      },
    ];

    const expected = [
      "Data,Tipo,Valor,Categoria",
      "2026-05-16,Saída,50,Alimentação",
    ].join("\n");

    const result = generateTransactionsCSV(transactions);

    expect(result).toBe(expected);
  });
});