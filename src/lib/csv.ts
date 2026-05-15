export function generateTransactionsCSV(transactions: any[]) {
  const headers = ["Data", "Tipo", "Valor", "Categoria"];

  if (!transactions || transactions.length === 0) {
    return headers.join(",");
  }

  const rows = transactions.map((transaction) => {
    const date = new Date(transaction.date).toISOString().split("T")[0];
    const type = transaction.type === "income" ? "Entrada" : "Saída";

    return [date, type, transaction.amount, transaction.category].join(",");
  });

  return [headers.join(","), ...rows].join("\n");
}