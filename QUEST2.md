# Desafio: Evolução do Piggbank - Prototipagem e Git Flow

## 📝 Descrição da Atividade

**Atenção: Este trabalho deve ser realizado em dupla!**

O **piggbank** está crescendo e precisamos adicionar uma nova funcionalidade: o **Modal de Nova Transação**. Nesta atividade, vocês não vão apenas programar; vocês irão atuar como desenvolvedores full-stack responsáveis pelo ciclo de vida da feature: desde a prototipagem no **Google Stitch**, passando pela implementação com **IA (Copilot)**, até o **Code Review** mútuo.

O objetivo é garantir que a nova tela respeite o **Design System** existente e o fluxo de trabalho profissional de Git. Para realizar o trabalho corretamente, aconselhamos os alunos a pesquisarem bem sobre o que são e como funcionam _Branches_ e _Pull Requests_.

## 💡 A Funcionalidade: Modal de Nova Transação

**O Cenário (User Story):**

> _"Como proprietário de uma PME, quero poder adicionar uma nova despesa ou receita rapidamente no dashboard, escolhendo o valor, a categoria e a data, para que meu fluxo de caixa fique atualizado."_

### Requisitos para o Desenvolvimento:

1. **O Gatilho (Trigger):** Um botão "Nova Transação" no header ou canto do dashboard.
2. **O Modal/Overlay:** Uma tela flutuante (modal) com um formulário de inserção.
3. **Os Inputs:**
   - _Tipo:_ Toggle (Switch) para "Entrada" vs "Saída" (ou um Select).
   - _Valor:_ Campo numérico. **Obrigatório:** O formulário deve possuir uma validação que garanta que o valor adicionado seja maior que zero.
   - _Data:_ Date picker.
   - _Categoria:_ Select dropdown (pré-populado com algumas opções de exemplo).
4. **Ação:** Botão "Salvar" (deve fechar o modal e atualizar a tabela).

> **Atenção técnica:** Esta feature força a aplicação de diversos conceitos:
>
> - **Design System:** Você precisará reaproveitar os componentes existentes (ex: `Button`, `Input`).
> - **Estado (State Management):** Controle da abertura/fechamento do overlay (`isOpen`).
> - **Integração IA:** Utilize o Copilot para o boilerplate do formulário, mas substitua as tags genéricas de HTML pelas fornecidas no projeto (consulte `src/components/ui/`).

## 🔍 Tópicos para Pesquisa

Para realizar o trabalho com sucesso, aconselhamos fortemente que a dupla pesquise previamente sobre os seguintes conceitos do Git/GitHub:

- **Branches:** O que são, para que servem e como criar ramificações isoladas do código (onde você construirá a sua feature).
- **Pull Request (PR):** Como abrir uma solicitação de mesclagem, revisar o código do parceiro e como ela se encaixa no fluxo de desenvolvimento colaborativo.

## 🎯 Objetivos

Ao final desta atividade, você será capaz de:

- **Prototipar:** Transformar requisitos em uma interface visual no Google Stitch.
- **Design Tokens:** Aplicar o conceito de Design System (não hardcodear cores/espaçamentos).
- **Git Flow:** Trabalhar com _Feature Branches_ e _Pull Requests_.
- **Code Review:** Avaliar criticamente o código de um colega.

## ⚠️ Regras e Restrições

- **Trabalho em Dupla:** A atividade obrigatoriamente deve ser feita em pares.
- **Feature Branch:** É proibido fazer commits na branch `main`. Todo trabalho deve ocorrer em uma branch que contenha obrigatoriamente o nome dos dois alunos integrantes (ex: `feature/nova-transacao-joao-maria`).
- **Uso da IA:** O Copilot pode ser usado para gerar código, mas vocês devem validar se o output respeita as variáveis globais de estilo do projeto.
- **Code Review:** O PR (Pull Request) só será considerado concluído após a aprovação do colega de dupla (Peer Review).

---

## 🚀 Passo a Passo da Atividade

### 1. Prototipagem (Google Stitch)

Desenhe a nova tela (ou funcionalidade) no Google Stitch.

- **Desafio:** Identifique quais cores e espaçamentos você deve usar, consultando o arquivo `src/app/globals.css` do repositório antes de desenhar.

### 2. Preparação do Ambiente

Faça um **Fork** deste repositório para a sua conta pessoal no GitHub. Depois, clone o *seu* repositório (o fork), instale as dependências e crie sua branch de trabalho:

```bash
git clone git@github.com:SUA_CONTA_GITHUB/quest1-piggbank.git
cd quest1-piggbank
npm install
git checkout -b feature/nova-transacao-aluno1-aluno2
```

### 🔧 Tutorial Passo a Passo: Fork, Branch e Pull Request

Se você não está familiarizado com o fluxo de Fork e Pull Request (conhecido como *Forking Workflow*), siga este roteiro:

1. **Fazendo o Fork:**
   - Vá até a página principal do repositório original (`xpeer-io/quest1-piggbank`) no GitHub.
   - No canto superior direito, clique no botão **"Fork"**.
   - Escolha a sua conta pessoal como destino e confirme. Isso criará uma cópia do projeto na *sua* conta.
2. **Clonando o Fork:**
   - No seu repositório recém-criado (`SUA_CONTA_GITHUB/quest1-piggbank`), clique no botão verde "Code" e copie o link (HTTPS ou SSH).
   - No terminal, rode `git clone <LINK_COPIADO>`, entre na pasta (`cd quest1-piggbank`) e instale as dependências (`npm install`).
3. **Criando a Branch:**
   - Crie e mude para a nova branch da dupla: `git checkout -b feature/nova-transacao-aluno1-aluno2`.
4. **Trabalhando e Fazendo Push:**
   - Após finalizar as modificações (desenvolver o fluxo do modal), adicione e commite as mudanças: `git add .` e `git commit -m "feat: adiciona modal de transacao"`.
   - Envie as alterações feitas na branch para o seu repositório no GitHub: `git push -u origin feature/nova-transacao-aluno1-aluno2`.
5. **Abrindo o Pull Request para o Original:**
   - Vá até a página do seu fork no GitHub (ou a página do repositório original). Haverá um banner na cor amarela/verde apontando sua push recente com um botão "Compare & pull request", clique nele. Alternativamente, você pode ir na aba "Pull requests" e clicar em "New pull request".
   - Certifique-se de que a *base repository* apontada no lado esquerdo seja o da empresa (`xpeer-io/quest1-piggbank`) e o *head repository* (lado direito) seja o seu fork com a sua devida branch que contém as mudanças.
   - Preencha um título adequado e a descrição. Crie o PR. 
   - Logo em seguida, você deve solicitar o *Code Review* de seu colega de equipe/dupla enviando o link e informando aos responsáveis.

### 3. Implementação Guiada por IA

Utilize o Copilot para implementar o código, mas siga o **Spec-Driven Development**:

- Ao pedir código à IA, forneça o contexto dos componentes existentes (`Ex: "Crie um botão usando o componente Button padrão, respeitando o tema de cores do sistema"`).
- Se a IA sugerir hardcoding (cores hexadecimais manuais), corrija-a para usar os tokens do projeto.

### 4. Pull Request (PR) e Code Review

Após terminar:

1. Faça o commit e push da sua branch para o **seu fork**.
2. Abra um Pull Request (PR) no GitHub direcionado ao repositório **original** (`xpeer-io/quest1-piggbank`).
3. **Crucial:** Você deve solicitar que um colega faça o Code Review do seu PR.
4. **O Revisor:** Deve comentar no PR caso encontre:
   - Uso de cores/espaçamentos fora do padrão (hardcoding).
   - Código duplicado.
   - Falta de componentização.

### 5. Análise de Design System

No arquivo de entrega (ou no comentário do PR), responda:

1. **Consistência:** A IA sugeriu alguma alteração de estilo? Você conseguiu manter a consistência com o restante do app?
2. **Reuso:** Você conseguiu reutilizar componentes existentes ou precisou criar tudo do zero?
3. **Lições do Review:** O que o seu revisor apontou que você não tinha percebido?

## � Comandos Úteis (Terminal)

Durante a atividade, vocês precisarão usar ferramentas de linha de comando. Aqui estão os comandos principais que podem ajudar no fluxo:

- `npm install`: Instala todas as dependências necessárias do projeto após você clonar o repositório.
- `npm run dev`: Inicia o servidor de desenvolvimento local para você ver a aplicação rodando no seu navegador.
- `git status`: Verifica o estado atual do repositório (quais arquivos foram modificados, recém-criados ou removidos).
- `git add .`: Prepara (faz o _stage_ de) todos os arquivos modificados para o próximo commit.
- `git commit -m "sua mensagem"`: Salva as alterações na sua branch local com uma mensagem clara sobre o que foi feito.
- `git push -u origin nome-da-branch`: Envia sua nova branch e commits para o repositório remoto no GitHub.

## �📦 Entrega

A entrega da atividade será realizada através dos links do GitHub.

- O repositório do PR deve estar com o status de "Aprovado" pelo seu colega revisor (seu parceiro de dupla).
- Envie o link do PR junto com o link da branch correspondente à sua dupla no formulário do Blackboard.

---
