# Cenários de Teste: Exportação de Transações em CSV

## Cenário 1: Exportação bem-sucedida

- Dado que existem transações exibidas no dashboard.
- Quando o usuário clicar no botão "Exportar CSV".
- Então o sistema deve gerar um arquivo CSV.
- E o download deve iniciar automaticamente.
- E o nome do arquivo deve seguir o formato `transacoes-piggbank-YYYYMMDD.csv`.

---

## Cenário 2: CSV com colunas corretas

- O arquivo CSV deve conter:
  - Data
  - Tipo
  - Valor
  - Categoria

Exemplo:

```csv
Data,Tipo,Valor,Categoria
2026-05-15,Entrada,1500,Vendas
2026-05-15,Saída,250,Fornecedores
```

---

## Cenário 3: Data correta

- A data deve estar no formato `YYYY-MM-DD`.

Exemplo:

```csv
2026-05-15
```

---

## Cenário 4: Sem transações

- Caso não existam transações, o sistema deve gerar apenas os cabeçalhos do CSV.

Exemplo:

```csv
Data,Tipo,Valor,Categoria
```

---

## Cenário 5: Caracteres especiais

- O CSV deve suportar UTF-8.
- Caracteres como "Alimentação" e "Comissão" devem aparecer corretamente.

---

## Cenário 6: Exportação considerando filtros

- Apenas as transações visíveis na tela devem ser exportadas.

---

## Cenário 7: Não alterar estado do app

- A exportação não deve alterar métricas, filtros ou transações.

---

## Critérios de Aceite

- O botão "Exportar CSV" deve aparecer próximo da tabela.
- O arquivo deve conter Data, Tipo, Valor e Categoria.
- O arquivo deve usar separador vírgula.
- O nome do arquivo deve seguir o padrão `transacoes-piggbank-YYYYMMDD.csv`.
- A funcionalidade deve seguir TDD.