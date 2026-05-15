"use client";

import { useState } from "react";
import { generateTransactionsCSV } from "@/lib/csv";

export default function DashboardPage() {
  const [modal, setModal] = useState(false);

  const metrics: any[] = [];
  const transactions: any[] = [];

  function handleExportCSV() {
    const csv = generateTransactionsCSV(transactions);
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });

    const today = new Date();
    const date = today.toISOString().split("T")[0].replaceAll("-", "");
    const fileName = `transacoes-piggbank-${date}.csv`;

    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = fileName;
    link.click();

    URL.revokeObjectURL(link.href);
  }

  return (
    <main className="mx-auto max-w-6xl space-y-8 px-8 py-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-foreground">
            Visão Geral
          </h1>
          <p className="text-sm text-muted-foreground">
            Dashboard financeiro do Piggbank
          </p>
        </div>

        <button
          onClick={() => setModal(true)}
          className="rounded-md bg-blue-600 px-4 py-2 text-white"
        >
          Nova Transação
        </button>
      </div>

      <section>
        <h2 className="mb-4 text-lg font-semibold">Métricas</h2>

        {metrics.length === 0 ? (
          <p className="text-sm text-muted-foreground">
            Nenhuma métrica disponível.
          </p>
        ) : (
          <div>{metrics.length}</div>
        )}
      </section>

      <section>
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold">Transações</h2>

          <button
            onClick={handleExportCSV}
            className="rounded-md bg-green-600 px-4 py-2 text-white"
          >
            Exportar CSV
          </button>
        </div>

        {transactions.length === 0 ? (
          <p className="text-sm text-muted-foreground">
            Nenhuma transação encontrada.
          </p>
        ) : (
          <div>{transactions.length}</div>
        )}
      </section>

      {modal && (
        <div className="rounded-md border p-4">
          <p>Modal de nova transação</p>
          <button onClick={() => setModal(false)}>Fechar</button>
        </div>
      )}
    </main>
  );
}